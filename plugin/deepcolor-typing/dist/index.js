/* SPDX-License-Identifier: GPL-3.0-or-later */
/* Local Fcitx5 mascot. Does not send, persist, or log input text. */
(() => {
  'use strict';
  const scriptURL = document.currentScript && document.currentScript.src;
  const atlasURL = new URL('../assets/deepcolor-atlas.png', scriptURL || location.href).href;
  const fcitx = window.fcitx;
  const key = '__deepcolorTypingPlugin';
  const idleDelay = 900;
  let theme, panel, mascot, observer, idleTimer;
  let candidatesPresent = false;
  let active = false;
  let fittedExpansion = false;
  let placementPlan = null;
  let nativeBridge = null;
  let nativeBridgeDescriptor = null;
  let placementBridge = null;
  let lastNativeResize = null;
  let heightDriver = null;
  let windowFrame = null;
  let decorationStyle = null;
  const resizeStats = { received: 0, forwarded: 0, skipped: 0 };
  const hooks = [];

  function callNative(target, receiver, args) {
    if (!active || args[0] !== 'resize') return Reflect.apply(target, receiver, args);
    alignWindowFrame(args);
    resizeStats.received++;
    const now = performance.now();
    const stationary = args[1] !== 0 && !args[19] && !args[2] && !args[3];
    const signature = stationary ? args.slice(1).join(',') : null;
    // Geometry and epoch must BOTH match. A new host epoch can carry a new
    // caret position even when every DOM dimension remains the same.
    if (signature && lastNativeResize && lastNativeResize.signature === signature &&
        now - lastNativeResize.time < 24) {
      resizeStats.skipped++;
      return lastNativeResize.result;
    }
    resizeStats.forwarded++;
    const result = Reflect.apply(target, receiver, args);
    lastNativeResize = signature ? { signature, time: now, result } : null;
    return result;
  }

  function log(message) {
    if (typeof fcitx.log === 'function') fcitx.log('[deepcolor-typing] ' + message);
  }

  function installWindowFrame() {
    // The exported demo is embedded in a document rather than a bare native
    // window. Its page layout must not be attached to the viewport edges.
    if (document.body.classList.contains('preview-page') ||
        !fcitx.host || fcitx.host.system !== 'macOS') return;
    const decoration = theme.querySelector('.fcitx-decoration');
    if (!decoration) return;
    decorationStyle = {
      element: decoration,
      position: decoration.style.getPropertyValue('position'),
      positionPriority: decoration.style.getPropertyPriority('position'),
      zIndex: decoration.style.getPropertyValue('z-index'),
      zIndexPriority: decoration.style.getPropertyPriority('z-index'),
    };
    decoration.style.setProperty('position', 'relative');
    decoration.style.setProperty('z-index', '1');
    windowFrame = document.createElement('div');
    windowFrame.className = panel.className + ' dc-window-frame';
    windowFrame.setAttribute('aria-hidden', 'true');
    theme.appendChild(windowFrame);
    panel.classList.add('dc-layout-panel');
  }

  function alignWindowFrame(args) {
    if (!windowFrame || ![8, 9, 10, 11, 17, 18].every(i => Number.isFinite(args[i]))) return;
    // Keep layout/ResizeObserver on the real content panel. Paint its skin in
    // a separate fixed layer constrained on BOTH viewport edges. Native window
    // resizes cross a process boundary; a border tied to DOM content height can
    // otherwise paint a frame before the matching window height arrives.
    const insets = {
      top: args[8], left: args[11],
      right: Math.ceil(args[17]) - args[9],
      bottom: Math.ceil(args[18]) - args[10],
    };
    for (const [name, value] of Object.entries(insets)) {
      const css = value + 'px';
      if (windowFrame.style[name] !== css) windowFrame.style[name] = css;
    }
    theme.classList.add('dc-window-frame-active');
  }

  function setState(state) {
    if (!active || !theme) return;
    if (theme.dataset.dcState === state) return;
    theme.dataset.dcState = state;
    theme.classList.toggle('dc-typing', state === 'typing');
    theme.classList.toggle('dc-idle', state === 'idle');
    log(state);
  }

  function rest() {
    clearTimeout(idleTimer);
    setState('idle');
  }

  function activity() {
    if (!active || !candidatesPresent) return;
    setState('typing');
    clearTimeout(idleTimer);
    idleTimer = setTimeout(rest, idleDelay);
  }

  function stopHeightAnimation() {
    if (!heightDriver || !heightDriver.animation) return;
    const animation = heightDriver.animation;
    heightDriver.animation = null;
    animation.cancel();
  }

  function writeHeight(height) {
    const driver = heightDriver;
    driver.list.style.maxBlockSize = height + 'px';
    driver.ownValue = driver.list.style.maxBlockSize;
  }

  function motionEnabled() {
    return getComputedStyle(theme).getPropertyValue('--scroll-animation').trim() !== 'none' &&
      !matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function integerHeightFrames(from, to) {
    const distance = Math.abs(to - from), direction = Math.sign(to - from);
    const frames = [{ maxBlockSize: from + 'px', offset: 0, easing: 'steps(1, end)' }];
    for (let i = 1; i < distance; i++) {
      // Invert the existing cubic-bezier(.22, .61, .36, 1): the timing stays
      // eased, but each keyframe holds an integer AppKit point. Half-points
      // are insufficient: NSWindow.setFrame rounds height to whole points
      // on this host even when its backingScaleFactor is 2.
      const progress = i / distance;
      let lo = 0, hi = 1;
      for (let n = 0; n < 24; n++) {
        const t = (lo + hi) / 2, u = 1 - t;
        const y = 3 * u * u * t * .61 + 3 * u * t * t + t * t * t;
        if (y < progress) lo = t; else hi = t;
      }
      const t = (lo + hi) / 2, u = 1 - t;
      const offset = 3 * u * u * t * .22 + 3 * u * t * t * .36 + t * t * t;
      frames.push({ maxBlockSize: (from + direction * i) + 'px', offset, easing: 'steps(1, end)' });
    }
    frames.push({ maxBlockSize: to + 'px', offset: 1, easing: 'steps(1, end)' });
    return frames;
  }

  function animateHeight(from, to) {
    const driver = heightDriver;
    from = Math.round(from);
    to = Math.round(to);
    stopHeightAnimation();
    writeHeight(to);
    driver.lastHeight = to;
    driver.target = to;
    if (from <= 0 || from === to || !motionEnabled()) return;
    // Web Animations owns the timeline; there is no additional JS frame loop
    // and no delayed/queued native resize. ResizeObserver sees integer heights.
    const animation = driver.list.animate(integerHeightFrames(from, to), {
      duration: 280, easing: 'linear', fill: 'both',
    });
    driver.animation = animation;
    animation.finished.then(() => {
      if (!active || heightDriver !== driver || driver.animation !== animation) return;
      driver.animation = null;
      animation.cancel(); // The matching inline endpoint is already installed.
    }).catch(() => {});
  }

  function installHeightDriver() {
    const list = panel.querySelector('.fcitx-hoverables');
    if (!list || typeof list.animate !== 'function') return;
    const driver = heightDriver = {
      list, animation: null, target: null,
      lastHeight: list.getBoundingClientRect().height,
      ownValue: list.style.maxBlockSize,
      transition: list.style.getPropertyValue('transition'),
      transitionPriority: list.style.getPropertyPriority('transition'),
    };
    list.style.setProperty('transition', 'none', 'important');
    driver.observer = new MutationObserver(() => {
      if (!active || heightDriver !== driver) return;
      const value = list.style.maxBlockSize;
      if (value === driver.ownValue) return;
      driver.ownValue = value;
      if (!list.classList.contains('fcitx-horizontal-scroll')) {
        stopHeightAnimation();
        driver.lastHeight = list.getBoundingClientRect().height;
        return;
      }
      // Native collapse() writes the old single-row cap, then waits 290ms
      // before replacing the grid. Observe that target before the next paint.
      const target = Number.parseFloat(value);
      if (!Number.isFinite(target) || target <= 0) return;
      const from = driver.animation ? list.getBoundingClientRect().height : driver.lastHeight;
      if (target < from && !(driver.animation && driver.target === target)) {
        placementPlan = null;
        animateHeight(from, target);
      }
    });
    driver.observer.observe(list, { attributes: true, attributeFilter: ['style'] });
  }

  function captureHeight() {
    const list = panel && panel.querySelector('.fcitx-hoverables');
    return list && { height: list.getBoundingClientRect().height,
      expanded: list.classList.contains('fcitx-horizontal-scroll') };
  }

  function fitExpansionAnimation(before) {
    const list = panel && panel.querySelector('.fcitx-hoverables');
    if (!list || !list.classList.contains('fcitx-horizontal-scroll')) {
      placementPlan = null;
      if (heightDriver && list) {
        stopHeightAnimation();
        heightDriver.lastHeight = list.getBoundingClientRect().height;
        heightDriver.ownValue = list.style.maxBlockSize;
      }
      return;
    }
    // Native CSS reserves one extra row for optional tabs. Animate to the actual
    // laid-out list height so a tabless list does not stop halfway through the
    // easing curve. Candidate widths, row heights and scroll bounds stay native.
    const naturalHeight = list.scrollHeight;
    if (naturalHeight > 0) {
      const currentHeight = before ? before.height : list.getBoundingClientRect().height;
      const now = performance.now();
      if (naturalHeight > currentHeight + .5 && (!placementPlan ||
          Math.abs(placementPlan.height - naturalHeight) > .5 || now > placementPlan.until)) {
        placementPlan = { height: naturalHeight, until: now + 380, epochs: new Set() };
      }
      if (heightDriver) {
        if (heightDriver.animation && before && before.expanded && heightDriver.target === naturalHeight) {
          writeHeight(naturalHeight); // Keep the running animation when more candidates arrive.
        } else {
          animateHeight(currentHeight, naturalHeight);
        }
      } else {
        list.style.maxBlockSize = naturalHeight + 'px';
      }
      fittedExpansion = true;
    }
  }

  function interceptNativePlacement() {
    if (typeof window.fcitx !== 'function') return false;
    nativeBridge = window.fcitx;
    nativeBridgeDescriptor = Object.getOwnPropertyDescriptor(window, 'fcitx');
    placementBridge = new Proxy(nativeBridge, {
      apply(target, receiver, args) {
        const plan = placementPlan;
        if (active && args[0] === 'resize' && plan && performance.now() <= plan.until) {
          // This is the documented native resize bridge in page/global.d.ts.
          // Its indices include the leading API name.
          const list = panel && panel.querySelector('.fcitx-horizontal-scroll');
          if (args[19] || args[2] || args[3]) {
            placementPlan = null; // Respect manual window dragging.
          } else if (list && Number.parseFloat(list.style.maxBlockSize) >= plan.height - .5 &&
              !plan.epochs.has(args[1])) {
            const delta = plan.height - list.getBoundingClientRect().height;
            const finalGeometry = args.slice();
            if (delta > .5 && [6, 10, 18].every(i => Number.isFinite(args[i]))) {
              // Let the native bottom-edge test see the expanded geometry once,
              // before any intermediate-height frame. Native was_above_ then
              // keeps the chosen side for the rest of this visible composition.
              // Follow immediately with real current geometry; the browser's
              // candidate dimensions and animation remain unchanged.
              for (const i of [6, 10, 18]) finalGeometry[i] += delta;
              plan.epochs.add(args[1]);
              try {
                const result = callNative(target, receiver, finalGeometry);
                if (result && typeof result.catch === 'function') result.catch(() => {});
              } catch (_) { /* A failed decorative preflight must not affect input. */ }
            }
          }
        }
        return callNative(target, receiver, args);
      },
    });
    if (!nativeBridgeDescriptor || nativeBridgeDescriptor.configurable) {
      Object.defineProperty(window, 'fcitx', {
        value: placementBridge, configurable: true, writable: true,
        enumerable: nativeBridgeDescriptor ? nativeBridgeDescriptor.enumerable : true,
      });
    } else if (nativeBridgeDescriptor.writable || nativeBridgeDescriptor.set) {
      window.fcitx = placementBridge;
    } else {
      placementBridge = null;
      return false;
    }
    return window.fcitx === placementBridge;
  }

  function hasText(value) {
    if (typeof value === 'string') return value.length > 0;
    if (Array.isArray(value)) return value.some(item =>
      Array.isArray(item) ? typeof item[0] === 'string' && item[0].length > 0 :
        typeof item === 'string' && item.length > 0);
    return false;
  }

  function hook(name, after, before) {
    const original = fcitx[name];
    if (typeof original !== 'function') return;
    const wrapped = function (...args) {
      let context;
      try { if (before) context = before(args); } catch (_) {}
      const result = original.apply(this, args);
      try { after(args, context); } catch (_) { /* Decoration must never interrupt typing. */ }
      return result;
    };
    fcitx[name] = wrapped;
    hooks.push({ name, original, wrapped });
  }

  function unload() {
    active = false;
    placementPlan = null;
    lastNativeResize = null;
    clearTimeout(idleTimer);
    if (observer) observer.disconnect();
    if (windowFrame) windowFrame.remove();
    windowFrame = null;
    if (panel) panel.classList.remove('dc-layout-panel');
    if (theme) theme.classList.remove('dc-window-frame-active');
    if (decorationStyle) {
      const saved = decorationStyle;
      for (const [name, value, priority] of [
        ['position', saved.position, saved.positionPriority],
        ['z-index', saved.zIndex, saved.zIndexPriority],
      ]) {
        if (value) saved.element.style.setProperty(name, value, priority);
        else saved.element.style.removeProperty(name);
      }
      decorationStyle = null;
    }
    if (heightDriver) {
      heightDriver.observer.disconnect();
      stopHeightAnimation();
      if (heightDriver.transition) {
        heightDriver.list.style.setProperty('transition', heightDriver.transition, heightDriver.transitionPriority);
      } else {
        heightDriver.list.style.removeProperty('transition');
      }
      heightDriver = null;
    }
    if (fittedExpansion && panel) {
      const list = panel.querySelector('.fcitx-horizontal-scroll');
      if (list) list.style.removeProperty('max-block-size');
    }
    fittedExpansion = false;
    for (const { name, original, wrapped } of hooks.splice(0).reverse()) {
      if (fcitx[name] === wrapped) fcitx[name] = original;
    }
    if (placementBridge && window.fcitx === placementBridge) {
      if (nativeBridgeDescriptor && nativeBridgeDescriptor.configurable) {
        Object.defineProperty(window, 'fcitx', nativeBridgeDescriptor);
      } else {
        window.fcitx = nativeBridge;
      }
    }
    placementBridge = null;
    nativeBridge = null;
    nativeBridgeDescriptor = null;
    if (mascot) mascot.remove();
    if (theme) {
      theme.classList.remove('dc-theme', 'dc-typing', 'dc-idle');
      delete theme.dataset.dcState;
    }
    if (window[key] && window[key].unload === unload) delete window[key];
  }

  function load() {
    if (window[key]) window[key].unload();
    theme = document.getElementById('fcitx-theme');
    panel = theme && theme.querySelector('.fcitx-panel');
    if (!theme || !panel) { log('candidate panel missing'); return; }
    active = true;
    window[key] = { unload, getResizeStats: () => ({ ...resizeStats }) };
    theme.classList.add('dc-theme', 'dc-idle');
    theme.dataset.dcState = 'idle';
    mascot = document.createElement('div');
    mascot.className = 'dc-mascot';
    mascot.setAttribute('aria-hidden', 'true');
    const sprite = document.createElement('div');
    sprite.className = 'dc-sprite';
    sprite.style.backgroundImage = 'url("' + atlasURL.replace(/"/g, '%22') + '")';
    mascot.appendChild(sprite);
    // Use Fcitx's decoration grid so the character is outside the text bar,
    // while remaining inside the native candidate window's measured bounds.
    const corner = theme.querySelector('.fcitx-panel-top') || panel;
    corner.appendChild(mascot);

    const placementReady = interceptNativePlacement();
    installHeightDriver();
    installWindowFrame();

    hook('setCandidates', (args, before) => {
      candidatesPresent = Array.isArray(args[0]) && args[0].length > 0;
      fitExpansionAnimation(before);
      if (candidatesPresent) activity(); else rest();
    }, captureHeight);
    hook('updateInputPanel', args => {
      // Supports both the legacy HTML API and the newer attributed-text API.
      if (hasText(args[0]) || (Array.isArray(args[0]) && hasText(args[2]))) activity();
    });
    hook('hidePanel', () => { candidatesPresent = false; placementPlan = null; lastNativeResize = null; stopHeightAnimation(); rest(); });

    // Covers frontend versions that retain an internal reference to an API function.
    observer = new MutationObserver(records => {
      if (!records.some(r => !(r.target instanceof Element) || !r.target.closest('.dc-mascot'))) return;
      candidatesPresent = !!panel.querySelector('.fcitx-candidate');
      if (candidatesPresent) activity(); else rest();
    });
    const content = panel.querySelector('.fcitx-panel-blur') || panel;
    observer.observe(content, { childList: true, characterData: true, subtree: true });
    candidatesPresent = !!panel.querySelector('.fcitx-candidate');
    log(placementReady ? 'ready v1.6; viewport-anchored frame; integer-point height animation; native resize dedup; edge placement preflight; idle timeout 900ms' :
      'ready v1.6; placement bridge unavailable');
  }

  if (fcitx && fcitx.pluginManager && typeof fcitx.pluginManager.register === 'function') {
    fcitx.pluginManager.register({ load, unload });
  }
})();
