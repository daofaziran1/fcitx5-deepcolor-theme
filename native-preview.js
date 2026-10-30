/* Fcitx5 webview c509e24c1c87e96edd215b67f3993f000ecf8c31. GPL-3.0-or-later. */
"use strict";var FcitxNative=(()=>{var lt=Object.defineProperty;var te=Object.getOwnPropertyDescriptor;var ie=Object.getOwnPropertyNames;var ee=Object.prototype.hasOwnProperty;var oe=(t,i)=>{for(var e in i)lt(t,e,{get:i[e],enumerable:!0})},re=(t,i,e,o)=>{if(i&&typeof i=="object"||typeof i=="function")for(let r of ie(i))!ee.call(t,r)&&r!==e&&lt(t,r,{get:()=>i[r],enumerable:!(o=te(i,r))||o.enumerable});return t};var ce=t=>re(lt({},"__esModule",{value:!0}),t);var Le={};oe(Le,{initPanel:()=>ze});var It=`@charset "UTF-8";
#fcitx-theme {
  user-select: none; /* disable text select */
  font-family: sans-serif;
}

.fcitx-hidden {
  display: none;
}

.fcitx-panel-topleft {
  grid-area: topleft;
}

.fcitx-panel-top {
  grid-area: top;
}

.fcitx-panel-topright {
  grid-area: topright;
}

.fcitx-panel-left {
  grid-area: left;
}

.fcitx-panel-center {
  grid-area: center;
}

.fcitx-panel-right {
  grid-area: right;
}

.fcitx-panel-bottomleft {
  grid-area: bottomleft;
}

.fcitx-panel-bottom {
  grid-area: bottom;
}

.fcitx-panel-bottomright {
  grid-area: bottomright;
}

.fcitx-decoration {
  display: inline-grid;
  grid-template-areas: "topleft top topright" "left center right" "bottomleft bottom bottomright";
  min-width: max-content; /* On f5j keep width when dragging across screen's right boundary. */
}

.fcitx-panel {
  width: fit-content; /* For irregular-shaped window, if top/center/bottom image has a min-width, don't let panel expand to that. */
  overflow: hidden; /* needed because of border-radius */
}
.fcitx-panel.fcitx-vertical-rl {
  writing-mode: vertical-rl;
}
.fcitx-panel.fcitx-vertical-lr {
  writing-mode: vertical-lr;
}
.fcitx-panel:is(.fcitx-vertical-rl, .fcitx-vertical-lr) .fcitx-text {
  /* It seems WebKit doesn't do a great job predicting inline-size of text,
  so it may wrap text based on underestimated height, but next frame it's
  corrected, with significant layout shift. Reproducible with Rime F4. */
  white-space: nowrap;
}

.fcitx-tabs {
  display: none;
}

.fcitx-panel.fcitx-has-tab-actions .fcitx-tabs {
  display: flex;
}

.fcitx-tabs-scrollable {
  display: flex;
  flex: 1;
  overflow-x: auto;
  scrollbar-width: none;
  overscroll-behavior: none;
}

.fcitx-tabs-pinned {
  display: flex;
  flex-shrink: 0;
}

.fcitx-tab {
  display: flex;
  justify-content: center;
}

.fcitx-tab-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  min-inline-size: 30px; /* Prevent single-letter tabs from being too narrow. */
}

.fcitx-preedit, .fcitx-aux-up {
  display: inline-flex; /* put the caret on the same line with preedit */
  align-items: center;
  line-height: 1em; /* align preedit and text caret */
}
.fcitx-preedit.fcitx-hidden, .fcitx-aux-up.fcitx-hidden {
  display: none; /* needed because the above display has higher precedence than .hidden's */
}

.fcitx-aux-up {
  justify-content: center;
}

.fcitx-aux-down {
  display: flex;
  align-items: center;
}
.fcitx-aux-down.fcitx-hidden {
  display: none;
}

.fcitx-candidate {
  position: relative;
}

.fcitx-candidate-background {
  position: absolute;
  width: 100%;
  height: 100%;
}

.fcitx-candidate-inner {
  display: flex;
  align-items: center; /* English words have lower height */
  line-height: 1em; /* align label and candidates */
  position: relative; /* for absolute position of mark */
  box-sizing: content-box; /* f5j: vitepress sets border-box for * which makes candidate shorter */
  white-space: pre-wrap; /* Don't collapse spaces and newlines of candidates. */
}

.fcitx-label {
  /* Label is usually a single number. Will look ugly when all parts have vertical writing mode. */
  writing-mode: horizontal-tb;
  inline-size: var(--label-width);
  text-align: center; /* Since width is determined by fattest label for vertical and scroll mode, thinner ones need centralizing. */
}

.fcitx-hoverables {
  display: flex;
  background-image: var(--background-image);
  background-size: cover;
}
.fcitx-hoverables .fcitx-divider {
  display: flex;
}
.fcitx-hoverables.fcitx-vertical {
  flex-direction: column;
}
.fcitx-hoverables.fcitx-vertical .fcitx-scroll-area {
  flex-direction: column;
}
.fcitx-hoverables.fcitx-vertical .fcitx-comment {
  flex: var(--vertical-comment-flex);
  text-align: end;
}
.fcitx-hoverables.fcitx-vertical .fcitx-divider:last-child, .fcitx-hoverables.fcitx-vertical .fcitx-divider:has(+ .fcitx-divider-paging) {
  display: none;
}
.fcitx-hoverables.fcitx-horizontal .fcitx-candidate {
  /* When horizontal and there is multi-line candidate,
  make sure other candidates are vertical centered.
  Don't enable it for vertical. It will shrink highlight. */
  display: flex;
}
.fcitx-hoverables.fcitx-horizontal {
  /* stylelint-disable-next-line no-descending-specificity */
}
.fcitx-hoverables.fcitx-horizontal .fcitx-divider {
  flex-direction: column;
  /* If the last row (either temporary with more candidates to come, or final when scroll ends)
  is not full, it takes care of the last gap. JS is responsible for full rows. */
}
.fcitx-hoverables.fcitx-horizontal .fcitx-divider:last-child, .fcitx-hoverables.fcitx-horizontal .fcitx-divider:has(+ .fcitx-divider-paging) {
  flex-grow: 1;
}
.fcitx-hoverables.fcitx-horizontal .fcitx-divider:last-child .fcitx-divider-middle, .fcitx-hoverables.fcitx-horizontal .fcitx-divider:has(+ .fcitx-divider-paging) .fcitx-divider-middle {
  block-size: 0;
}
.fcitx-hoverables.fcitx-horizontal .fcitx-divider:last-child .fcitx-divider-side, .fcitx-hoverables.fcitx-horizontal .fcitx-divider:has(+ .fcitx-divider-paging) .fcitx-divider-side {
  flex-grow: 1;
}
.fcitx-hoverables.fcitx-horizontal-scroll {
  display: block; /* Reset from flex so that long tabs (typing a in pinyin) won't cause weird layout issue. */
}
.fcitx-hoverables.fcitx-horizontal-scroll .fcitx-scroll-area {
  flex-wrap: wrap;
  overflow-y: auto;
  overscroll-behavior: none;
}
.fcitx-hoverables.fcitx-horizontal-scroll .fcitx-candidate-inner {
  width: 100%;
}
.fcitx-hoverables.fcitx-horizontal-scroll .fcitx-label {
  opacity: 0;
}
.fcitx-hoverables.fcitx-horizontal-scroll .fcitx-highlighted-row .fcitx-label {
  opacity: 1;
}
.fcitx-hoverables.fcitx-horizontal-scroll .fcitx-comment {
  overflow-wrap: anywhere; /* Disallow long comment to introduce horizontal scrollbar. */
}

.fcitx-scroll-area {
  flex: 1;
  display: flex;
}

:is(.fcitx-vertical-rl, .fcitx-vertical-lr) .fcitx-paging svg {
  transform: rotate(90deg);
}

.fcitx-paging {
  display: flex;
}
.fcitx-paging.fcitx-arrow svg {
  block-size: 12px;
  inline-size: 12px;
}
.fcitx-paging.fcitx-triangle svg {
  block-size: 16px;
  inline-size: 16px;
}
.fcitx-paging.fcitx-scroll .fcitx-expand {
  block-size: 18px;
  inline-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fcitx-paging.fcitx-scroll .fcitx-expand svg {
  transform: rotate(90deg);
  width: 16px;
}

/* When horizontal, paging is shorter than candidates, so need to centralize them. */
.fcitx-prev, .fcitx-next {
  display: flex;
  align-items: center;
}

.fcitx-horizontal .fcitx-arrow .fcitx-prev, .fcitx-horizontal .fcitx-arrow .fcitx-next {
  margin: 0;
}

.fcitx-paging-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
}

.fcitx-mark {
  opacity: 0;
}
.fcitx-mark.fcitx-no-text {
  position: absolute;
  inset-inline-start: 0;
  inline-size: 3px;
  border-radius: 1.5px;
  block-size: 16px;
  background-color: white;
}

.fcitx-highlighted .fcitx-mark {
  opacity: var(--mark-opacity, 0);
}

.fcitx-highlighted :active .fcitx-mark.fcitx-no-text {
  block-size: 12px;
}

.fcitx-blur {
  backdrop-filter: var(--backdrop-filter, blur(16px));
}

.fcitx-contextmenu {
  position: absolute;
  z-index: 1000;
  display: none;
  overflow: hidden;
}

.fcitx-menu-item {
  display: flex;
  align-items: center;
}

.fcitx-macos .fcitx-decoration {
  /* Leave top and left for shadow. 
    It's done here instead of fcitx-panel because we want fcitx-panel to
    align with it by default, so that we can know whether there are images
    that changes anchor from panel to it. */
  transform: translate(25px, 25px);
}
.fcitx-macos .fcitx-panel, .fcitx-macos .fcitx-contextmenu {
  border-style: solid;
  background-clip: padding-box; /* make border alpha and content alpha independent */
  box-shadow: var(--panel-shadow, 0 10px 20px rgba(0, 0, 0, 0.14), 0 0 25px rgba(0, 0, 0, 0.12));
}
.fcitx-macos .fcitx-horizontal .fcitx-paging.fcitx-arrow {
  flex-direction: column;
  justify-content: center;
}
.fcitx-macos .fcitx-horizontal .fcitx-paging.fcitx-arrow .fcitx-paging-inner {
  inline-size: 28px;
  block-size: auto;
}
.fcitx-macos .fcitx-paging.fcitx-scroll {
  inline-size: 28px;
  justify-content: center;
  align-items: center;
}
.fcitx-macos .fcitx-contextmenu {
  border-radius: 6px;
}
.fcitx-macos .fcitx-caret.fcitx-no-text {
  inline-size: 1px;
  block-size: 16px;
  margin-inline: 1px;
}
.fcitx-macos .fcitx-menu-item:hover {
  color: white;
  background-color: var(--accent-color);
}
.fcitx-macos .fcitx-vertical .fcitx-divider-middle {
  inline-size: 100%;
}
.fcitx-macos .fcitx-hoverables.fcitx-horizontal-scroll .fcitx-divider-middle {
  block-size: 100%;
}
.fcitx-macos .fcitx-hoverables.fcitx-horizontal .fcitx-divider {
  inline-size: 0;
}
.fcitx-macos .fcitx-hoverables.fcitx-horizontal .fcitx-divider.fcitx-divider-paging {
  inline-size: 1px;
}
.fcitx-macos .fcitx-hoverables.fcitx-horizontal .fcitx-divider.fcitx-divider-paging .fcitx-divider-middle {
  block-size: 100%;
}
.fcitx-macos .fcitx-hoverables.fcitx-horizontal-scroll > .fcitx-scroll-area::-webkit-scrollbar {
  width: var(--scrollbar-width, 8px);
}
.fcitx-macos .fcitx-hoverables.fcitx-horizontal-scroll > .fcitx-scroll-area::-webkit-scrollbar-thumb {
  border-radius: 4px;
}
.fcitx-macos .fcitx-horizontal-tb .fcitx-horizontal .fcitx-paging.fcitx-arrow svg {
  transform: rotate(90deg);
}
.fcitx-macos .fcitx-vertical-rl .fcitx-horizontal .fcitx-paging.fcitx-arrow svg {
  transform: rotate(180deg);
}
.fcitx-macos .fcitx-vertical-lr .fcitx-horizontal .fcitx-paging.fcitx-arrow svg {
  transform: rotate(0deg);
}

.fcitx-macos.fcitx-light .fcitx-contextmenu {
  color: black;
}

.fcitx-macos.fcitx-dark .fcitx-contextmenu {
  color: white;
}

/* compromise to \u{1F004}'s height */
/* Not perfect. It shouldn't be blended with background. Same below. */
.fcitx-macos-15.fcitx-light .fcitx-panel, .fcitx-macos-15.fcitx-light .fcitx-contextmenu {
  border-color: var(--light-panel-border-color, rgba(0, 0, 0, 0.175));
}
.fcitx-macos-15.fcitx-light .fcitx-candidate-background, .fcitx-macos-15.fcitx-light .fcitx-tabs {
  background-color: var(--light-panel-color-no-image, rgba(240, 240, 240, 0.8125));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-light .fcitx-tabs {
  border-block-start: 1px solid var(--light-divider-color, rgba(224, 224, 224, 0.8125));
}
.fcitx-macos-15.fcitx-light .fcitx-header, .fcitx-macos-15.fcitx-light .fcitx-aux-down, .fcitx-macos-15.fcitx-light .fcitx-contextmenu {
  background-color: var(--light-panel-color, rgba(240, 240, 240, 0.8125));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-light .fcitx-paging {
  color: var(--light-disabled-paging-button-color, gray);
  background-color: var(--light-panel-color-no-image, rgba(240, 240, 240, 0.8125));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-light .fcitx-paging .fcitx-hoverable-inner {
  color: var(--light-paging-button-color, var(--light-text-color, rgba(0, 0, 0, 0.7)));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-light .fcitx-divider-side {
  background-color: var(--light-panel-color-no-image, rgba(240, 240, 240, 0.8125));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-light .fcitx-divider-middle {
  background-color: var(--light-divider-color, rgba(224, 224, 224, 0.8125));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-light .fcitx-hoverables.fcitx-horizontal-scroll .fcitx-divider-middle {
  background-color: var(--light-panel-color-no-image, rgba(240, 240, 240, 0.8125));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-light .fcitx-scroll-area::-webkit-scrollbar-track {
  background-color: var(--light-panel-color-no-image, rgba(240, 240, 240, 0.8125));
}
.fcitx-macos-15.fcitx-light .fcitx-scroll-area::-webkit-scrollbar-thumb {
  background-color: rgba(81, 81, 81, 0.333);
}
.fcitx-macos-15.fcitx-light .fcitx-scroll-area::-webkit-scrollbar-thumb:hover {
  background-color: rgba(45, 45, 45, 0.389);
}
.fcitx-macos-15.fcitx-light .fcitx-aux-up, .fcitx-macos-15.fcitx-light .fcitx-aux-down {
  color: var(--light-aux-color, var(--light-text-color, rgba(0, 0, 0, 0.7)));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-light .fcitx-pre-caret {
  color: var(--light-preedit-color-pre-caret, var(--light-text-color, rgba(0, 0, 0, 0.7)));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-light .fcitx-caret {
  color: var(--light-preedit-color-caret, var(--light-text-color, rgba(0, 0, 0, 0.7)));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-light .fcitx-caret.fcitx-no-text {
  background-color: var(--light-preedit-color-caret, var(--light-text-color, rgba(0, 0, 0, 0.7)));
}
.fcitx-macos-15.fcitx-light .fcitx-post-caret {
  color: var(--light-preedit-color-post-caret, var(--light-text-color, rgba(0, 0, 0, 0.7)));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-light .fcitx-text, .fcitx-macos-15.fcitx-light .fcitx-header, .fcitx-macos-15.fcitx-light .fcitx-tab-inner {
  color: var(--light-text-color, rgba(0, 0, 0, 0.7));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-light .fcitx-candidate:not(.fcitx-highlighted):hover:not(:active) .fcitx-text {
  color: var(--light-text-hover-color, var(--light-text-color, rgba(0, 0, 0, 0.7)));
}
.fcitx-macos-15.fcitx-light .fcitx-candidate:not(.fcitx-highlighted):active .fcitx-text {
  color: var(--light-text-press-color, var(--light-text-color, rgba(0, 0, 0, 0.7)));
}
.fcitx-macos-15.fcitx-light .fcitx-label {
  color: var(--light-label-color, rgb(128, 128, 128));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-light .fcitx-candidate:not(.fcitx-highlighted):hover .fcitx-label {
  color: var(--light-label-hover-color, var(--light-label-color, rgb(128, 128, 128)));
}
.fcitx-macos-15.fcitx-light .fcitx-candidate:not(.fcitx-highlighted):hover .fcitx-comment {
  color: var(--light-comment-hover-color, var(--light-comment-color, var(--light-label-color, rgb(128, 128, 128))));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-light .fcitx-mousemoved .fcitx-highlighted:hover:not(:active) .fcitx-hoverable-inner {
  background-color: var(--light-highlight-hover-color, var(--accent-color));
}
.fcitx-macos-15.fcitx-light .fcitx-mousemoved .fcitx-hoverable:not(.fcitx-highlighted):hover:not(:active) .fcitx-hoverable-inner {
  background-color: var(--light-hover-color);
}
.fcitx-macos-15.fcitx-light .fcitx-highlighted:active .fcitx-hoverable-inner {
  background-color: var(--light-highlight-color, var(--accent-color));
}
.fcitx-macos-15.fcitx-light .fcitx-hoverable:not(.fcitx-highlighted):active .fcitx-hoverable-inner {
  background-color: var(--light-press-color);
}
.fcitx-macos-15.fcitx-light .fcitx-highlighted .fcitx-hoverable-inner {
  background-color: var(--light-highlight-color, var(--accent-color));
}
.fcitx-macos-15.fcitx-light .fcitx-highlighted .fcitx-mark {
  color: var(--light-highlight-mark-text-color);
  background-color: var(--light-highlight-mark-color);
}
.fcitx-macos-15.fcitx-light .fcitx-highlighted .fcitx-text {
  color: var(--light-highlight-text-color, white);
}
.fcitx-macos-15.fcitx-light .fcitx-highlighted.fcitx-candidate:active .fcitx-text {
  color: var(--light-highlight-text-press-color, var(--light-highlight-text-color, white));
}
.fcitx-macos-15.fcitx-light .fcitx-highlighted .fcitx-label {
  color: var(--light-highlight-label-color, white);
}
.fcitx-macos-15.fcitx-light .fcitx-highlighted .fcitx-comment {
  color: var(--light-highlight-comment-color, white);
}
.fcitx-macos-15.fcitx-light .fcitx-tab:active .fcitx-tab-inner {
  background-color: var(--light-highlight-color, var(--accent-color));
  color: var(--light-highlight-text-color, white);
  transition: none;
}
.fcitx-macos-15.fcitx-light .fcitx-tab.fcitx-highlighted .fcitx-tab-inner {
  background-color: var(--light-highlight-color, var(--accent-color));
  color: var(--light-highlight-text-color, white);
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-light .fcitx-comment {
  color: var(--light-comment-color, var(--light-label-color, rgb(128, 128, 128)));
}
.fcitx-macos-15.fcitx-light.fcitx-blue {
  --accent-color: rgb(0, 90, 216);
}
.fcitx-macos-15.fcitx-light.fcitx-purple {
  --accent-color: rgb(125, 42, 126);
}
.fcitx-macos-15.fcitx-light.fcitx-pink {
  --accent-color: rgb(217, 59, 134);
}
.fcitx-macos-15.fcitx-light.fcitx-red {
  --accent-color: rgb(196, 38, 43);
}
.fcitx-macos-15.fcitx-light.fcitx-orange {
  --accent-color: rgb(217, 107, 10);
}
.fcitx-macos-15.fcitx-light.fcitx-yellow {
  --accent-color: rgb(214, 164, 14);
}
.fcitx-macos-15.fcitx-light.fcitx-green {
  --accent-color: rgb(76, 160, 50);
}
.fcitx-macos-15.fcitx-light.fcitx-graphite {
  --accent-color: rgb(128, 128, 128);
}

.fcitx-macos-15.fcitx-dark .fcitx-panel, .fcitx-macos-15.fcitx-dark .fcitx-contextmenu {
  border-color: var(--dark-panel-border-color, rgba(0, 0, 0, 0.475));
}
.fcitx-macos-15.fcitx-dark .fcitx-candidate-background, .fcitx-macos-15.fcitx-dark .fcitx-tabs {
  background-color: var(--dark-panel-color-no-image, rgba(60, 60, 60, 0.8125));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-dark .fcitx-tabs {
  border-block-start: 1px solid var(--dark-divider-color, rgba(85, 85, 85, 0.8125));
}
.fcitx-macos-15.fcitx-dark .fcitx-header, .fcitx-macos-15.fcitx-dark .fcitx-aux-down, .fcitx-macos-15.fcitx-dark .fcitx-contextmenu {
  background-color: var(--dark-panel-color, rgba(60, 60, 60, 0.8125));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-dark .fcitx-paging {
  color: var(--dark-disabled-paging-button-color, gray);
  background-color: var(--dark-panel-color-no-image, rgba(60, 60, 60, 0.8125));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-dark .fcitx-paging .fcitx-hoverable-inner {
  color: var(--dark-paging-button-color, var(--dark-text-color, rgba(255, 255, 255, 0.9)));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-dark .fcitx-divider-side {
  background-color: var(--dark-panel-color-no-image, rgba(60, 60, 60, 0.8125));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-dark .fcitx-divider-middle {
  background-color: var(--dark-divider-color, rgba(85, 85, 85, 0.8125));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-dark .fcitx-hoverables.fcitx-horizontal-scroll .fcitx-divider-middle {
  background-color: var(--dark-panel-color-no-image, rgba(60, 60, 60, 0.8125));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-dark .fcitx-scroll-area::-webkit-scrollbar-track {
  background-color: var(--dark-panel-color-no-image, rgba(60, 60, 60, 0.8125));
}
.fcitx-macos-15.fcitx-dark .fcitx-scroll-area::-webkit-scrollbar-thumb {
  background-color: rgba(153, 153, 153, 0.8125);
}
.fcitx-macos-15.fcitx-dark .fcitx-scroll-area::-webkit-scrollbar-thumb:hover {
  background-color: rgba(214, 214, 214, 0.8125);
}
.fcitx-macos-15.fcitx-dark .fcitx-aux-up, .fcitx-macos-15.fcitx-dark .fcitx-aux-down {
  color: var(--dark-aux-color, var(--dark-text-color, rgba(255, 255, 255, 0.9)));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-dark .fcitx-pre-caret {
  color: var(--dark-preedit-color-pre-caret, var(--dark-text-color, rgba(255, 255, 255, 0.9)));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-dark .fcitx-caret {
  color: var(--dark-preedit-color-caret, var(--dark-text-color, rgba(255, 255, 255, 0.9)));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-dark .fcitx-caret.fcitx-no-text {
  background-color: var(--dark-preedit-color-caret, var(--dark-text-color, rgba(255, 255, 255, 0.9)));
}
.fcitx-macos-15.fcitx-dark .fcitx-post-caret {
  color: var(--dark-preedit-color-post-caret, var(--dark-text-color, rgba(255, 255, 255, 0.9)));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-dark .fcitx-text, .fcitx-macos-15.fcitx-dark .fcitx-header, .fcitx-macos-15.fcitx-dark .fcitx-tab-inner {
  color: var(--dark-text-color, rgba(255, 255, 255, 0.9));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-dark .fcitx-candidate:not(.fcitx-highlighted):hover:not(:active) .fcitx-text {
  color: var(--dark-text-hover-color, var(--dark-text-color, rgba(255, 255, 255, 0.9)));
}
.fcitx-macos-15.fcitx-dark .fcitx-candidate:not(.fcitx-highlighted):active .fcitx-text {
  color: var(--dark-text-press-color, var(--dark-text-color, rgba(255, 255, 255, 0.9)));
}
.fcitx-macos-15.fcitx-dark .fcitx-label {
  color: var(--dark-label-color, rgb(124, 124, 124));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-dark .fcitx-candidate:not(.fcitx-highlighted):hover .fcitx-label {
  color: var(--dark-label-hover-color, var(--dark-label-color, rgb(124, 124, 124)));
}
.fcitx-macos-15.fcitx-dark .fcitx-candidate:not(.fcitx-highlighted):hover .fcitx-comment {
  color: var(--dark-comment-hover-color, var(--dark-comment-color, var(--dark-label-color, rgb(124, 124, 124))));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-dark .fcitx-mousemoved .fcitx-highlighted:hover:not(:active) .fcitx-hoverable-inner {
  background-color: var(--dark-highlight-hover-color, var(--accent-color));
}
.fcitx-macos-15.fcitx-dark .fcitx-mousemoved .fcitx-hoverable:not(.fcitx-highlighted):hover:not(:active) .fcitx-hoverable-inner {
  background-color: var(--dark-hover-color);
}
.fcitx-macos-15.fcitx-dark .fcitx-highlighted:active .fcitx-hoverable-inner {
  background-color: var(--dark-highlight-color, var(--accent-color));
}
.fcitx-macos-15.fcitx-dark .fcitx-hoverable:not(.fcitx-highlighted):active .fcitx-hoverable-inner {
  background-color: var(--dark-press-color);
}
.fcitx-macos-15.fcitx-dark .fcitx-highlighted .fcitx-hoverable-inner {
  background-color: var(--dark-highlight-color, var(--accent-color));
}
.fcitx-macos-15.fcitx-dark .fcitx-highlighted .fcitx-mark {
  color: var(--dark-highlight-mark-text-color);
  background-color: var(--dark-highlight-mark-color);
}
.fcitx-macos-15.fcitx-dark .fcitx-highlighted .fcitx-text {
  color: var(--dark-highlight-text-color, white);
}
.fcitx-macos-15.fcitx-dark .fcitx-highlighted.fcitx-candidate:active .fcitx-text {
  color: var(--dark-highlight-text-press-color, var(--dark-highlight-text-color, white));
}
.fcitx-macos-15.fcitx-dark .fcitx-highlighted .fcitx-label {
  color: var(--dark-highlight-label-color, white);
}
.fcitx-macos-15.fcitx-dark .fcitx-highlighted .fcitx-comment {
  color: var(--dark-highlight-comment-color, white);
}
.fcitx-macos-15.fcitx-dark .fcitx-tab:active .fcitx-tab-inner {
  background-color: var(--dark-highlight-color, var(--accent-color));
  color: var(--dark-highlight-text-color, white);
  transition: none;
}
.fcitx-macos-15.fcitx-dark .fcitx-tab.fcitx-highlighted .fcitx-tab-inner {
  background-color: var(--dark-highlight-color, var(--accent-color));
  color: var(--dark-highlight-text-color, white);
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-15.fcitx-dark .fcitx-comment {
  color: var(--dark-comment-color, var(--dark-label-color, rgb(124, 124, 124)));
}
.fcitx-macos-15.fcitx-dark.fcitx-blue {
  --accent-color: rgb(0, 89, 208);
}
.fcitx-macos-15.fcitx-dark.fcitx-purple {
  --accent-color: rgb(128, 52, 130);
}
.fcitx-macos-15.fcitx-dark.fcitx-pink {
  --accent-color: rgb(201, 51, 120);
}
.fcitx-macos-15.fcitx-dark.fcitx-red {
  --accent-color: rgb(209, 53, 57);
}
.fcitx-macos-15.fcitx-dark.fcitx-orange {
  --accent-color: rgb(200, 96, 4);
}
.fcitx-macos-15.fcitx-dark.fcitx-yellow {
  --accent-color: rgb(209, 158, 0);
}
.fcitx-macos-15.fcitx-dark.fcitx-green {
  --accent-color: rgb(67, 146, 42);
}
.fcitx-macos-15.fcitx-dark.fcitx-graphite {
  --accent-color: rgb(105, 105, 105);
}

.fcitx-macos-15 .fcitx-panel, .fcitx-macos-15 .fcitx-contextmenu {
  border-width: var(--border-width, 1px);
  border-radius: var(--border-radius, 6px);
}
.fcitx-macos-15 .fcitx-panel:has(.fcitx-horizontal .fcitx-paging:is(.fcitx-arrow, .fcitx-scroll)) {
  border-start-end-radius: calc((max(24px, var(--text-font-size, 16px)) + var(--top-padding, 3px) + var(--bottom-padding, 3px) + 2 * var(--margin, 0px)) / 2 + var(--border-width, 1px));
  border-end-end-radius: calc((max(24px, var(--text-font-size, 16px)) + var(--top-padding, 3px) + var(--bottom-padding, 3px) + 2 * var(--margin, 0px)) / 2 + var(--border-width, 1px));
}
.fcitx-macos-15 .fcitx-panel:has(.fcitx-horizontal-scroll) {
  /* Apply to panel to restrict both candidates and preedit width. */
  inline-size: calc(var(--cell-width, 65px) * var(--max-column, 6) + var(--scrollbar-redundancy-width, 2px) + var(--scrollbar-width, 8px));
}
.fcitx-macos-15 .fcitx-candidate-inner, .fcitx-macos-15 .fcitx-preedit, .fcitx-macos-15 .fcitx-aux-down, .fcitx-macos-15 .fcitx-menu-item {
  /* Make sure \u{1F9A6} takes equal width when vertical+vertical-rl. */
  min-block-size: 24px;
  background-clip: padding-box;
}
.fcitx-macos-15 .fcitx-aux-up {
  /* Combine min-block-size, min-inline-size and padding to make aux-up a square for \u5C0F and A */
  min-block-size: 24px;
  min-inline-size: calc(24px + var(--top-padding, 3px) + var(--bottom-padding, 3px) - var(--left-padding, 7px) - var(--right-padding, 7px));
}
.fcitx-macos-15 .fcitx-candidate-inner {
  gap: var(--label-text-gap, 6px);
  line-height: var(--text-font-size, 16px);
}
.fcitx-macos-15 .fcitx-horizontal-tb .fcitx-vertical .fcitx-candidate {
  min-inline-size: var(--vertical-min-width, 200px); /* avoid abrupt enlarging when start typing. */
}
.fcitx-macos-15 .fcitx-candidate-inner, .fcitx-macos-15 .fcitx-paging-inner, .fcitx-macos-15 .fcitx-menu-item, .fcitx-macos-15 .fcitx-tab-inner {
  border-radius: var(--highlight-radius, 0px);
}
.fcitx-macos-15 .fcitx-candidate-inner, .fcitx-macos-15 .fcitx-preedit, .fcitx-macos-15 .fcitx-aux-up, .fcitx-macos-15 .fcitx-menu-item, .fcitx-macos-15 .fcitx-prev, .fcitx-macos-15 .fcitx-next, .fcitx-macos-15 .fcitx-tab-inner {
  margin: var(--margin, 0px);
}
.fcitx-macos-15 .fcitx-text {
  font-family: var(--text-font-family);
  font-size: var(--text-font-size, 16px);
  font-weight: var(--text-font-weight);
}
.fcitx-macos-15 .fcitx-label {
  font-family: var(--label-font-family);
  font-size: var(--label-font-size, 12px);
  font-weight: var(--label-font-weight);
}
.fcitx-macos-15 .fcitx-comment {
  font-family: var(--comment-font-family);
  font-size: var(--comment-font-size, 12px);
  font-weight: var(--comment-font-weight);
  margin-inline-start: calc(var(--text-margin-left-scale, 0) * var(--label-text-gap, 6px));
}
.fcitx-macos-15 .fcitx-preedit {
  font-family: var(--preedit-font-family);
  font-size: var(--preedit-font-size, 16px);
  font-weight: var(--preedit-font-weight);
  line-height: var(--preedit-font-size, 16px);
}
.fcitx-macos-15 .fcitx-caret.fcitx-no-text {
  block-size: var(--preedit-font-size, 16px);
}
.fcitx-macos-15 .fcitx-prev {
  margin-inline-end: calc(var(--margin, 0px) / 2);
}
.fcitx-macos-15 .fcitx-next {
  margin-inline-start: calc(var(--margin, 0px) / 2);
}
.fcitx-macos-15 .fcitx-horizontal:not(.fcitx-horizontal-scroll) .fcitx-candidate-inner {
  margin-inline: calc(var(--margin, 0px) / 2);
}
.fcitx-macos-15 .fcitx-horizontal .fcitx-candidate-first .fcitx-candidate-inner {
  margin-inline-start: var(--margin, 0px);
}
.fcitx-macos-15 .fcitx-horizontal .fcitx-candidate-last .fcitx-candidate-inner {
  margin-inline-end: var(--margin, 0px);
}
.fcitx-macos-15 .fcitx-horizontal .fcitx-divider-paging .fcitx-divider-side {
  block-size: var(--margin, 0px);
}
.fcitx-macos-15 .fcitx-vertical .fcitx-candidate:not(.fcitx-candidate-first) .fcitx-candidate-inner {
  margin-block-start: var(--middle-margin, var(--margin, 0px));
}
.fcitx-macos-15 .fcitx-vertical .fcitx-candidate:not(.fcitx-candidate-last) .fcitx-candidate-inner {
  margin-block-end: var(--middle-margin, var(--margin, 0px));
}
.fcitx-macos-15 .fcitx-vertical .fcitx-divider-side {
  inline-size: var(--margin, 0px);
}
.fcitx-macos-15 .fcitx-candidate-inner, .fcitx-macos-15 .fcitx-preedit, .fcitx-macos-15 .fcitx-aux-up, .fcitx-macos-15 .fcitx-menu-item, .fcitx-macos-15 .fcitx-tab-inner {
  /* combine min-block-size, min-inline-size and padding to make aux-up a square for \u5C0F and A */
  padding-block: var(--top-padding, 3px) var(--bottom-padding, 3px);
  padding-inline: var(--left-padding, 7px) var(--right-padding, 7px);
}
.fcitx-macos-15 .fcitx-aux-down {
  /* No highlight for aux-down so combine padding and margin. */
  padding-block: calc(var(--top-padding, 3px) + var(--margin, 0px)) calc(var(--bottom-padding, 3px) + var(--margin, 0px));
  padding-inline: calc(var(--left-padding, 7px) + var(--margin, 0px)) calc(var(--right-padding, 7px) + var(--margin, 0px));
}
.fcitx-macos-15 {
  /* Use a dedicated div because
  * 1. divider color is not overlaid by panel color
  * 2. divider may not be full-length
  */
}
.fcitx-macos-15 .fcitx-vertical .fcitx-divider {
  block-size: var(--horizontal-divider-width, 1px);
}
.fcitx-macos-15 .fcitx-tab {
  block-size: calc(max(24px, var(--text-font-size, 16px)) + var(--top-padding, 3px) + var(--bottom-padding, 3px) + 2 * var(--margin, 0px));
}
.fcitx-macos-15 .fcitx-horizontal-scroll {
  max-block-size: calc((var(--max-row, 6) + 1) * (max(24px, var(--text-font-size, 16px)) + var(--top-padding, 3px) + var(--bottom-padding, 3px) + 2 * var(--margin, 0px))); /* If block-size, 2 rows will have 90px each. */
  transition: var(--scroll-animation, max-block-size 300ms);
}
.fcitx-macos-15 .fcitx-horizontal-scroll .fcitx-scroll-area {
  max-block-size: calc(var(--max-row, 6) * (max(24px, var(--text-font-size, 16px)) + var(--top-padding, 3px) + var(--bottom-padding, 3px) + 2 * var(--margin, 0px)));
}
.fcitx-macos-15 .fcitx-horizontal-scroll .fcitx-candidate {
  min-inline-size: var(--cell-width, 65px);
}

/* Not perfect. It shouldn't be blended with background. Same below. */
.fcitx-macos-26.fcitx-light .fcitx-panel, .fcitx-macos-26.fcitx-light .fcitx-contextmenu {
  border-color: var(--light-panel-border-color, rgba(0, 0, 0, 0.855));
}
.fcitx-macos-26.fcitx-light .fcitx-candidate-background, .fcitx-macos-26.fcitx-light .fcitx-tabs {
  background-color: var(--light-panel-color-no-image, rgba(247, 247, 247, 0.708));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-light .fcitx-tabs {
  border-block-start: 1px solid var(--light-divider-color, rgba(224, 224, 224, 0.708));
}
.fcitx-macos-26.fcitx-light .fcitx-header, .fcitx-macos-26.fcitx-light .fcitx-aux-down, .fcitx-macos-26.fcitx-light .fcitx-contextmenu {
  background-color: var(--light-panel-color, rgba(247, 247, 247, 0.708));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-light .fcitx-paging {
  color: var(--light-disabled-paging-button-color, gray);
  background-color: var(--light-panel-color-no-image, rgba(247, 247, 247, 0.708));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-light .fcitx-paging .fcitx-hoverable-inner {
  color: var(--light-paging-button-color, var(--light-text-color, rgba(0, 0, 0, 0.7)));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-light .fcitx-divider-side {
  background-color: var(--light-panel-color-no-image, rgba(247, 247, 247, 0.708));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-light .fcitx-divider-middle {
  background-color: var(--light-divider-color, rgba(224, 224, 224, 0.708));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-light .fcitx-hoverables.fcitx-horizontal-scroll .fcitx-divider-middle {
  background-color: var(--light-panel-color-no-image, rgba(247, 247, 247, 0.708));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-light .fcitx-scroll-area::-webkit-scrollbar-track {
  background-color: var(--light-panel-color-no-image, rgba(247, 247, 247, 0.708));
}
.fcitx-macos-26.fcitx-light .fcitx-scroll-area::-webkit-scrollbar-thumb {
  background-color: rgba(81, 81, 81, 0.333);
}
.fcitx-macos-26.fcitx-light .fcitx-scroll-area::-webkit-scrollbar-thumb:hover {
  background-color: rgba(45, 45, 45, 0.389);
}
.fcitx-macos-26.fcitx-light .fcitx-aux-up, .fcitx-macos-26.fcitx-light .fcitx-aux-down {
  color: var(--light-aux-color, var(--light-text-color, rgba(0, 0, 0, 0.7)));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-light .fcitx-pre-caret {
  color: var(--light-preedit-color-pre-caret, var(--light-text-color, rgba(0, 0, 0, 0.7)));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-light .fcitx-caret {
  color: var(--light-preedit-color-caret, var(--light-text-color, rgba(0, 0, 0, 0.7)));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-light .fcitx-caret.fcitx-no-text {
  background-color: var(--light-preedit-color-caret, var(--light-text-color, rgba(0, 0, 0, 0.7)));
}
.fcitx-macos-26.fcitx-light .fcitx-post-caret {
  color: var(--light-preedit-color-post-caret, var(--light-text-color, rgba(0, 0, 0, 0.7)));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-light .fcitx-text, .fcitx-macos-26.fcitx-light .fcitx-header, .fcitx-macos-26.fcitx-light .fcitx-tab-inner {
  color: var(--light-text-color, rgba(0, 0, 0, 0.7));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-light .fcitx-candidate:not(.fcitx-highlighted):hover:not(:active) .fcitx-text {
  color: var(--light-text-hover-color, var(--light-text-color, rgba(0, 0, 0, 0.7)));
}
.fcitx-macos-26.fcitx-light .fcitx-candidate:not(.fcitx-highlighted):active .fcitx-text {
  color: var(--light-text-press-color, var(--light-text-color, rgba(0, 0, 0, 0.7)));
}
.fcitx-macos-26.fcitx-light .fcitx-label {
  color: var(--light-label-color, rgb(128, 128, 128));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-light .fcitx-candidate:not(.fcitx-highlighted):hover .fcitx-label {
  color: var(--light-label-hover-color, var(--light-label-color, rgb(128, 128, 128)));
}
.fcitx-macos-26.fcitx-light .fcitx-candidate:not(.fcitx-highlighted):hover .fcitx-comment {
  color: var(--light-comment-hover-color, var(--light-comment-color, var(--light-label-color, rgb(128, 128, 128))));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-light .fcitx-mousemoved .fcitx-highlighted:hover:not(:active) .fcitx-hoverable-inner {
  background-color: var(--light-highlight-hover-color, var(--accent-color));
}
.fcitx-macos-26.fcitx-light .fcitx-mousemoved .fcitx-hoverable:not(.fcitx-highlighted):hover:not(:active) .fcitx-hoverable-inner {
  background-color: var(--light-hover-color);
}
.fcitx-macos-26.fcitx-light .fcitx-highlighted:active .fcitx-hoverable-inner {
  background-color: var(--light-highlight-color, var(--accent-color));
}
.fcitx-macos-26.fcitx-light .fcitx-hoverable:not(.fcitx-highlighted):active .fcitx-hoverable-inner {
  background-color: var(--light-press-color);
}
.fcitx-macos-26.fcitx-light .fcitx-highlighted .fcitx-hoverable-inner {
  background-color: var(--light-highlight-color, var(--accent-color));
}
.fcitx-macos-26.fcitx-light .fcitx-highlighted .fcitx-mark {
  color: var(--light-highlight-mark-text-color);
  background-color: var(--light-highlight-mark-color);
}
.fcitx-macos-26.fcitx-light .fcitx-highlighted .fcitx-text {
  color: var(--light-highlight-text-color, white);
}
.fcitx-macos-26.fcitx-light .fcitx-highlighted.fcitx-candidate:active .fcitx-text {
  color: var(--light-highlight-text-press-color, var(--light-highlight-text-color, white));
}
.fcitx-macos-26.fcitx-light .fcitx-highlighted .fcitx-label {
  color: var(--light-highlight-label-color, white);
}
.fcitx-macos-26.fcitx-light .fcitx-highlighted .fcitx-comment {
  color: var(--light-highlight-comment-color, white);
}
.fcitx-macos-26.fcitx-light .fcitx-tab:active .fcitx-tab-inner {
  background-color: var(--light-highlight-color, var(--accent-color));
  color: var(--light-highlight-text-color, white);
  transition: none;
}
.fcitx-macos-26.fcitx-light .fcitx-tab.fcitx-highlighted .fcitx-tab-inner {
  background-color: var(--light-highlight-color, var(--accent-color));
  color: var(--light-highlight-text-color, white);
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-light .fcitx-comment {
  color: var(--light-comment-color, var(--light-label-color, rgb(128, 128, 128)));
}
.fcitx-macos-26.fcitx-light.fcitx-blue {
  --accent-color: rgb(0, 122, 255);
}
.fcitx-macos-26.fcitx-light.fcitx-purple {
  --accent-color: rgb(149, 61, 150);
}
.fcitx-macos-26.fcitx-light.fcitx-pink {
  --accent-color: rgb(247, 79, 158);
}
.fcitx-macos-26.fcitx-light.fcitx-red {
  --accent-color: rgb(224, 56, 62);
}
.fcitx-macos-26.fcitx-light.fcitx-orange {
  --accent-color: rgb(246, 129, 27);
}
.fcitx-macos-26.fcitx-light.fcitx-yellow {
  --accent-color: rgb(209, 163, 25);
}
.fcitx-macos-26.fcitx-light.fcitx-green {
  --accent-color: rgb(97, 184, 69);
}
.fcitx-macos-26.fcitx-light.fcitx-graphite {
  --accent-color: rgb(152, 152, 152);
}

.fcitx-macos-26.fcitx-dark .fcitx-panel, .fcitx-macos-26.fcitx-dark .fcitx-contextmenu {
  border-color: var(--dark-panel-border-color, rgba(0, 0, 0, 0.863));
}
.fcitx-macos-26.fcitx-dark .fcitx-candidate-background, .fcitx-macos-26.fcitx-dark .fcitx-tabs {
  background-color: var(--dark-panel-color-no-image, rgba(40, 40, 40, 0.708));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-dark .fcitx-tabs {
  border-block-start: 1px solid var(--dark-divider-color, rgba(85, 85, 85, 0.708));
}
.fcitx-macos-26.fcitx-dark .fcitx-header, .fcitx-macos-26.fcitx-dark .fcitx-aux-down, .fcitx-macos-26.fcitx-dark .fcitx-contextmenu {
  background-color: var(--dark-panel-color, rgba(40, 40, 40, 0.708));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-dark .fcitx-paging {
  color: var(--dark-disabled-paging-button-color, gray);
  background-color: var(--dark-panel-color-no-image, rgba(40, 40, 40, 0.708));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-dark .fcitx-paging .fcitx-hoverable-inner {
  color: var(--dark-paging-button-color, var(--dark-text-color, rgba(255, 255, 255, 0.9)));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-dark .fcitx-divider-side {
  background-color: var(--dark-panel-color-no-image, rgba(40, 40, 40, 0.708));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-dark .fcitx-divider-middle {
  background-color: var(--dark-divider-color, rgba(85, 85, 85, 0.708));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-dark .fcitx-hoverables.fcitx-horizontal-scroll .fcitx-divider-middle {
  background-color: var(--dark-panel-color-no-image, rgba(40, 40, 40, 0.708));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-dark .fcitx-scroll-area::-webkit-scrollbar-track {
  background-color: var(--dark-panel-color-no-image, rgba(40, 40, 40, 0.708));
}
.fcitx-macos-26.fcitx-dark .fcitx-scroll-area::-webkit-scrollbar-thumb {
  background-color: rgba(153, 153, 153, 0.708);
}
.fcitx-macos-26.fcitx-dark .fcitx-scroll-area::-webkit-scrollbar-thumb:hover {
  background-color: rgba(214, 214, 214, 0.708);
}
.fcitx-macos-26.fcitx-dark .fcitx-aux-up, .fcitx-macos-26.fcitx-dark .fcitx-aux-down {
  color: var(--dark-aux-color, var(--dark-text-color, rgba(255, 255, 255, 0.9)));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-dark .fcitx-pre-caret {
  color: var(--dark-preedit-color-pre-caret, var(--dark-text-color, rgba(255, 255, 255, 0.9)));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-dark .fcitx-caret {
  color: var(--dark-preedit-color-caret, var(--dark-text-color, rgba(255, 255, 255, 0.9)));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-dark .fcitx-caret.fcitx-no-text {
  background-color: var(--dark-preedit-color-caret, var(--dark-text-color, rgba(255, 255, 255, 0.9)));
}
.fcitx-macos-26.fcitx-dark .fcitx-post-caret {
  color: var(--dark-preedit-color-post-caret, var(--dark-text-color, rgba(255, 255, 255, 0.9)));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-dark .fcitx-text, .fcitx-macos-26.fcitx-dark .fcitx-header, .fcitx-macos-26.fcitx-dark .fcitx-tab-inner {
  color: var(--dark-text-color, rgba(255, 255, 255, 0.9));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-dark .fcitx-candidate:not(.fcitx-highlighted):hover:not(:active) .fcitx-text {
  color: var(--dark-text-hover-color, var(--dark-text-color, rgba(255, 255, 255, 0.9)));
}
.fcitx-macos-26.fcitx-dark .fcitx-candidate:not(.fcitx-highlighted):active .fcitx-text {
  color: var(--dark-text-press-color, var(--dark-text-color, rgba(255, 255, 255, 0.9)));
}
.fcitx-macos-26.fcitx-dark .fcitx-label {
  color: var(--dark-label-color, rgb(124, 124, 124));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-dark .fcitx-candidate:not(.fcitx-highlighted):hover .fcitx-label {
  color: var(--dark-label-hover-color, var(--dark-label-color, rgb(124, 124, 124)));
}
.fcitx-macos-26.fcitx-dark .fcitx-candidate:not(.fcitx-highlighted):hover .fcitx-comment {
  color: var(--dark-comment-hover-color, var(--dark-comment-color, var(--dark-label-color, rgb(124, 124, 124))));
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-dark .fcitx-mousemoved .fcitx-highlighted:hover:not(:active) .fcitx-hoverable-inner {
  background-color: var(--dark-highlight-hover-color, var(--accent-color));
}
.fcitx-macos-26.fcitx-dark .fcitx-mousemoved .fcitx-hoverable:not(.fcitx-highlighted):hover:not(:active) .fcitx-hoverable-inner {
  background-color: var(--dark-hover-color);
}
.fcitx-macos-26.fcitx-dark .fcitx-highlighted:active .fcitx-hoverable-inner {
  background-color: var(--dark-highlight-color, var(--accent-color));
}
.fcitx-macos-26.fcitx-dark .fcitx-hoverable:not(.fcitx-highlighted):active .fcitx-hoverable-inner {
  background-color: var(--dark-press-color);
}
.fcitx-macos-26.fcitx-dark .fcitx-highlighted .fcitx-hoverable-inner {
  background-color: var(--dark-highlight-color, var(--accent-color));
}
.fcitx-macos-26.fcitx-dark .fcitx-highlighted .fcitx-mark {
  color: var(--dark-highlight-mark-text-color);
  background-color: var(--dark-highlight-mark-color);
}
.fcitx-macos-26.fcitx-dark .fcitx-highlighted .fcitx-text {
  color: var(--dark-highlight-text-color, white);
}
.fcitx-macos-26.fcitx-dark .fcitx-highlighted.fcitx-candidate:active .fcitx-text {
  color: var(--dark-highlight-text-press-color, var(--dark-highlight-text-color, white));
}
.fcitx-macos-26.fcitx-dark .fcitx-highlighted .fcitx-label {
  color: var(--dark-highlight-label-color, white);
}
.fcitx-macos-26.fcitx-dark .fcitx-highlighted .fcitx-comment {
  color: var(--dark-highlight-comment-color, white);
}
.fcitx-macos-26.fcitx-dark .fcitx-tab:active .fcitx-tab-inner {
  background-color: var(--dark-highlight-color, var(--accent-color));
  color: var(--dark-highlight-text-color, white);
  transition: none;
}
.fcitx-macos-26.fcitx-dark .fcitx-tab.fcitx-highlighted .fcitx-tab-inner {
  background-color: var(--dark-highlight-color, var(--accent-color));
  color: var(--dark-highlight-text-color, white);
  transition: var(--color-transition, background-color 500ms ease, color 500ms ease);
}
.fcitx-macos-26.fcitx-dark .fcitx-comment {
  color: var(--dark-comment-color, var(--dark-label-color, rgb(124, 124, 124)));
}
.fcitx-macos-26.fcitx-dark.fcitx-blue {
  --accent-color: rgb(0, 122, 255);
}
.fcitx-macos-26.fcitx-dark.fcitx-purple {
  --accent-color: rgb(165, 80, 167);
}
.fcitx-macos-26.fcitx-dark.fcitx-pink {
  --accent-color: rgb(247, 79, 158);
}
.fcitx-macos-26.fcitx-dark.fcitx-red {
  --accent-color: rgb(255, 82, 87);
}
.fcitx-macos-26.fcitx-dark.fcitx-orange {
  --accent-color: rgb(246, 129, 27);
}
.fcitx-macos-26.fcitx-dark.fcitx-yellow {
  --accent-color: rgb(202, 157, 1);
}
.fcitx-macos-26.fcitx-dark.fcitx-green {
  --accent-color: rgb(97, 184, 69);
}
.fcitx-macos-26.fcitx-dark.fcitx-graphite {
  --accent-color: rgb(140, 140, 140);
}

.fcitx-macos-26 .fcitx-panel, .fcitx-macos-26 .fcitx-contextmenu {
  border-width: var(--border-width, 0.5px);
  border-radius: var(--border-radius, 15px);
}
.fcitx-macos-26 .fcitx-panel:has(.fcitx-horizontal .fcitx-paging:is(.fcitx-arrow, .fcitx-scroll)) {
  border-start-end-radius: calc((max(24px, var(--text-font-size, 16px)) + var(--top-padding, 0px) + var(--bottom-padding, 0px) + 2 * var(--margin, 2px)) / 2 + var(--border-width, 0.5px));
  border-end-end-radius: calc((max(24px, var(--text-font-size, 16px)) + var(--top-padding, 0px) + var(--bottom-padding, 0px) + 2 * var(--margin, 2px)) / 2 + var(--border-width, 0.5px));
}
.fcitx-macos-26 .fcitx-panel:has(.fcitx-horizontal-scroll) {
  /* Apply to panel to restrict both candidates and preedit width. */
  inline-size: calc(var(--cell-width, 65px) * var(--max-column, 6) + var(--scrollbar-redundancy-width, 2px) + var(--scrollbar-width, 8px));
}
.fcitx-macos-26 .fcitx-candidate-inner, .fcitx-macos-26 .fcitx-preedit, .fcitx-macos-26 .fcitx-aux-down, .fcitx-macos-26 .fcitx-menu-item {
  /* Make sure \u{1F9A6} takes equal width when vertical+vertical-rl. */
  min-block-size: 24px;
  background-clip: padding-box;
}
.fcitx-macos-26 .fcitx-aux-up {
  /* Combine min-block-size, min-inline-size and padding to make aux-up a square for \u5C0F and A */
  min-block-size: 24px;
  min-inline-size: calc(24px + var(--top-padding, 0px) + var(--bottom-padding, 0px) - var(--left-padding, 7px) - var(--right-padding, 7px));
}
.fcitx-macos-26 .fcitx-candidate-inner {
  gap: var(--label-text-gap, 5px);
  line-height: var(--text-font-size, 16px);
}
.fcitx-macos-26 .fcitx-horizontal-tb .fcitx-vertical .fcitx-candidate {
  min-inline-size: var(--vertical-min-width, 256px); /* avoid abrupt enlarging when start typing. */
}
.fcitx-macos-26 .fcitx-candidate-inner, .fcitx-macos-26 .fcitx-paging-inner, .fcitx-macos-26 .fcitx-menu-item, .fcitx-macos-26 .fcitx-tab-inner {
  border-radius: var(--highlight-radius, 13px);
}
.fcitx-macos-26 .fcitx-candidate-inner, .fcitx-macos-26 .fcitx-preedit, .fcitx-macos-26 .fcitx-aux-up, .fcitx-macos-26 .fcitx-menu-item, .fcitx-macos-26 .fcitx-prev, .fcitx-macos-26 .fcitx-next, .fcitx-macos-26 .fcitx-tab-inner {
  margin: var(--margin, 2px);
}
.fcitx-macos-26 .fcitx-text {
  font-family: var(--text-font-family);
  font-size: var(--text-font-size, 16px);
  font-weight: var(--text-font-weight);
}
.fcitx-macos-26 .fcitx-label {
  font-family: var(--label-font-family);
  font-size: var(--label-font-size, 12px);
  font-weight: var(--label-font-weight);
}
.fcitx-macos-26 .fcitx-comment {
  font-family: var(--comment-font-family);
  font-size: var(--comment-font-size, 12px);
  font-weight: var(--comment-font-weight);
  margin-inline-start: calc(var(--text-margin-left-scale, 0) * var(--label-text-gap, 5px));
}
.fcitx-macos-26 .fcitx-preedit {
  font-family: var(--preedit-font-family);
  font-size: var(--preedit-font-size, 16px);
  font-weight: var(--preedit-font-weight);
  line-height: var(--preedit-font-size, 16px);
}
.fcitx-macos-26 .fcitx-caret.fcitx-no-text {
  block-size: var(--preedit-font-size, 16px);
}
.fcitx-macos-26 .fcitx-prev {
  margin-inline-end: calc(var(--margin, 2px) / 2);
}
.fcitx-macos-26 .fcitx-next {
  margin-inline-start: calc(var(--margin, 2px) / 2);
}
.fcitx-macos-26 .fcitx-horizontal:not(.fcitx-horizontal-scroll) .fcitx-candidate-inner {
  margin-inline: calc(var(--margin, 2px) / 2);
}
.fcitx-macos-26 .fcitx-horizontal .fcitx-candidate-first .fcitx-candidate-inner {
  margin-inline-start: var(--margin, 2px);
}
.fcitx-macos-26 .fcitx-horizontal .fcitx-candidate-last .fcitx-candidate-inner {
  margin-inline-end: var(--margin, 2px);
}
.fcitx-macos-26 .fcitx-horizontal .fcitx-divider-paging .fcitx-divider-side {
  block-size: var(--margin, 2px);
}
.fcitx-macos-26 .fcitx-vertical .fcitx-candidate:not(.fcitx-candidate-first) .fcitx-candidate-inner {
  margin-block-start: var(--middle-margin, var(--margin, 2px));
}
.fcitx-macos-26 .fcitx-vertical .fcitx-candidate:not(.fcitx-candidate-last) .fcitx-candidate-inner {
  margin-block-end: var(--middle-margin, var(--margin, 2px));
}
.fcitx-macos-26 .fcitx-vertical .fcitx-divider-side {
  inline-size: var(--margin, 2px);
}
.fcitx-macos-26 .fcitx-candidate-inner, .fcitx-macos-26 .fcitx-preedit, .fcitx-macos-26 .fcitx-aux-up, .fcitx-macos-26 .fcitx-menu-item, .fcitx-macos-26 .fcitx-tab-inner {
  /* combine min-block-size, min-inline-size and padding to make aux-up a square for \u5C0F and A */
  padding-block: var(--top-padding, 0px) var(--bottom-padding, 0px);
  padding-inline: var(--left-padding, 7px) var(--right-padding, 7px);
}
.fcitx-macos-26 .fcitx-aux-down {
  /* No highlight for aux-down so combine padding and margin. */
  padding-block: calc(var(--top-padding, 0px) + var(--margin, 2px)) calc(var(--bottom-padding, 0px) + var(--margin, 2px));
  padding-inline: calc(var(--left-padding, 7px) + var(--margin, 2px)) calc(var(--right-padding, 7px) + var(--margin, 2px));
}
.fcitx-macos-26 {
  /* Use a dedicated div because
  * 1. divider color is not overlaid by panel color
  * 2. divider may not be full-length
  */
}
.fcitx-macos-26 .fcitx-vertical .fcitx-divider {
  block-size: var(--horizontal-divider-width, 1px);
}
.fcitx-macos-26 .fcitx-tab {
  block-size: calc(max(24px, var(--text-font-size, 16px)) + var(--top-padding, 0px) + var(--bottom-padding, 0px) + 2 * var(--margin, 2px));
}
.fcitx-macos-26 .fcitx-horizontal-scroll {
  max-block-size: calc((var(--max-row, 6) + 1) * (max(24px, var(--text-font-size, 16px)) + var(--top-padding, 0px) + var(--bottom-padding, 0px) + 2 * var(--margin, 2px))); /* If block-size, 2 rows will have 90px each. */
  transition: var(--scroll-animation, max-block-size 300ms);
}
.fcitx-macos-26 .fcitx-horizontal-scroll .fcitx-scroll-area {
  max-block-size: calc(var(--max-row, 6) * (max(24px, var(--text-font-size, 16px)) + var(--top-padding, 0px) + var(--bottom-padding, 0px) + 2 * var(--margin, 2px)));
}
.fcitx-macos-26 .fcitx-horizontal-scroll .fcitx-candidate {
  min-inline-size: var(--cell-width, 65px);
}`;var n,I,b,g,u,q,A,ut,Dt,v;function qt(t){n=t.querySelector("#fcitx-theme"),I=t.querySelector(".fcitx-decoration"),b=t.querySelector(".fcitx-panel"),g=b.querySelector(".fcitx-hoverables"),u=g.querySelector(".fcitx-scroll-area"),q=b.querySelector(".fcitx-tabs"),A=t.querySelector(".fcitx-preedit"),ut=t.querySelector(".fcitx-aux-up"),Dt=t.querySelector(".fcitx-aux-down"),v=t.querySelector(".fcitx-contextmenu")}var _t=()=>/[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E-\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED9\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDD1D\uDEEF]\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE]|\uDEEF\u200D\uD83D\uDC69\uD83C[\uDFFB-\uDFFE])))?))?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEFA](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3C-\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDEC2\uDEC6\uDEC8\uDECC-\uDEDD\uDEDF-\uDEEB\uDEEF]|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC30\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3\uDE70]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|\uDEEF\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;var T=[],_=t=>`${t}`,$=null;function $t(t){T=t,$=null}var ne=/[⌃⌥⇧⌘]/,le=/C-|A-|S-|M-/;function ue(){if(T.length===0)return _;let t=T[0];if(ne.test(t)||le.test(t))return _;let i=t.indexOf("1");if(i===-1||t.lastIndexOf("1")!==i)return _;let e=o=>t.replace("1",`${o}`);for(let o=1;o<Math.min(T.length,10);++o){let r=(o+1)%10;if(T[o]!==e(r))return _}return e}function W(){return $===null&&($=ue()),$}var z=6,L=6,ft=65,Xt=28;function Jt(t,i,e,o){z=t,L=i,ft=e,Xt=o}var Kt=!0,dt=0;function Zt(t){Kt=t}var ht=0;function mt(){return ht}function Qt(t){ht=t}var Ft=!1;function ti(t){Ft=t}var R=!1;function ii(){R=!1}function ei(){window.fcitx("scroll",0,(z+1)*L)}function Wt(){Kt?(g.style.maxBlockSize=`${dt}px`,setTimeout(()=>{window.fcitx("scroll",-1,0)},290)):window.fcitx("scroll",-1,0)}var p=[],k=0;function B(t){return p.slice(0,t).reduce((i,e)=>i+e,0)}function oi(t){let i=0;for(let e=0;e<p.length-1;++e){let o=i+p[e];if(t<o)return e;i=o}return p.length-1}function M(){return oi(k)}function gt(t,i){return t.getBoundingClientRect()[i]-u.getBoundingClientRect().top}function xe(){let t=u.querySelectorAll(".fcitx-candidate"),i=gt(t[k],"bottom")-u.clientHeight;i>0&&(u.scrollTop+=i);let e=gt(t[k],"top");e<0&&(u.scrollTop+=e)}function jt(t,i){let e=W(),o=t.querySelector(".fcitx-label");o.textContent=e(i)}function ri(t,i){window.fcitx("highlight",t);let e=u.querySelectorAll(".fcitx-candidate");if(i){let a=M(),l=B(a);for(let f=l;f<l+p[a];++f){let x=e[f];x.classList.remove("fcitx-highlighted-row"),jt(x,0)}e[k].classList.remove("fcitx-highlighted","fcitx-highlighted-original")}k=t;let o=M(),r=B(o);for(let a=r;a<r+p[o];++a){let l=e[a];l.classList.add("fcitx-highlighted-row"),jt(l,(a-r+1)%10)}e[k].classList.add("fcitx-highlighted","fcitx-highlighted-original")}function ci(t){let i=u.querySelectorAll(".fcitx-candidate");p=[];let e=0,o=0;for(let r of i){r.classList.remove("fcitx-highlighted-row");let{width:a}=r.getBoundingClientRect(),l=Math.min(Math.ceil(a/ft),L);r.setAttribute("style",`width: ${l*ft}px`),o+=l,o<=L?++e:(p.push(e),r.previousElementSibling?.setAttribute("style","flex-grow: 1"),e=1,o=l)}p.push(e),ri(t?0:k,!t)}function ai(t,i){let e=oi(t),o=u.querySelectorAll(".fcitx-candidate"),{left:r,right:a}=o[t].getBoundingClientRect(),l=(r+a)/2;function f(x){if(x<0||x===p.length)return-1;let d=B(x),D=d+p[x]-1;for(let c=d;c<D;++c){let s=o[c].getBoundingClientRect();if(!(s.right<=r))return s.right>l||s.right-r>r-s.left?c:c+1}return D}switch(i){case 10:return f(e-1);case 11:return f(e+1);case 12:return t-1;case 13:return t+1<B(p.length+1)?t+1:-1;case 14:case 15:{let x=B(e);return i===14?x:x+p[e]-1}case 16:case 17:{let x=i===16?10:11,d=z,D=t,c;do c=D,D=ai(D,x);while(D>=0&&--d);return c===t?-1:c}}}function ni(t){if(w(),t>=0&&t<=9){let i=(t+9)%10,e=M(),o=p[e];return i>=o?void 0:window.fcitx("select",B(e)+i)}switch(t){case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:{let i=ai(k,t);if(i>=0){if(ri(i,!0),xe(),!Ft&&!R){let e=M();p.length-e<=z&&(R=!0,window.fcitx("scroll",B(p.length),z*L))}}else[10,16].includes(t)&&M()===0&&Wt();break}case 19:Wt();break;case 20:window.fcitx("select",k);break}}function li(){u.addEventListener("wheel",i=>{mt()!==2&&window.fcitx("page",i.deltaY>0)}),u.addEventListener("scroll",()=>{if(Ft||R)return;let i=B(p.length-1)-1,e=u.querySelectorAll(".fcitx-candidate"),o=e[i];gt(o,"top")<u.clientHeight&&(R=!0,window.fcitx("scroll",e.length,z*L))}),new ResizeObserver(i=>{ht===1&&(dt=Math.max(Xt,i[0].contentRect.height),g.style.maxBlockSize=`${dt}px`),ui()}).observe(g)}var Di=_t(),fe=new Intl.Segmenter(void 0,{granularity:"grapheme"});function de(t){return Di.lastIndex=0,Array.from(fe.segment(t)).length===1&&Di.test(t)}function pt(t=!1){let i=h("fcitx-divider");t&&i.classList.add("fcitx-divider-paging");let e=h("fcitx-divider-side"),o=h("fcitx-divider-middle"),r=h("fcitx-divider-side");return i.append(e,o,r),i}var bt="";function Et(t){bt=t}var vt="";function fi(t){vt=t}function kt(t,i){t?.classList.remove("fcitx-highlighted"),i?.classList.add("fcitx-highlighted");let e=g?.querySelector(".fcitx-mark"),o=i?.querySelector(".fcitx-mark"),r=i?.querySelector(".fcitx-candidate-inner");e&&!o&&r&&r.prepend(e)}var X='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="{}"><path d="{}" fill="currentColor"></path></svg>',ge=X.replace("{}","0 0 192 512").replace("{}","M192 127.338v257.324c0 17.818-21.543 26.741-34.142 14.142L29.196 270.142c-7.81-7.81-7.81-20.474 0-28.284l128.662-128.662c12.599-12.6 34.142-3.676 34.142 14.142z"),he=X.replace("{}","0 0 192 512").replace("{}","M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"),me=X.replace("{}","0 0 24 24").replace("{}","M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"),si=X.replace("{}","0 0 24 24").replace("{}","M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31a.996.996 0 0 0 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z");function xi(t){let i=h("fcitx-tab"),e=h("fcitx-tab-inner");return e.textContent=t.text,i.appendChild(e),t.checked&&i.classList.add("fcitx-highlighted"),i.addEventListener("click",()=>window.fcitx("tabAction",t.id)),i}function Fe(t){let i=q.querySelector(".fcitx-tabs-scrollable"),e=q.querySelector(".fcitx-tabs-pinned");i.innerHTML="",e.innerHTML="";let o=t.findIndex(l=>l.separator),r=o!==-1?t.slice(0,o):t,a=o!==-1?t.slice(o+1).filter(l=>!l.separator):[];for(let l of r)i.appendChild(xi(l));for(let l of a)e.appendChild(xi(l));b.classList.toggle("fcitx-has-tab-actions",t.length>0)}function wt(t,i,e,o,r,a,l,f,x){t.length&&n.classList.remove("fcitx-hidden");let d=g.classList.contains("fcitx-vertical");gi(),w(),Qt(a),Fe(a===2?x:[]),a!==2||l?(u.innerHTML="",u.scrollTop=0):ii(),g.classList.toggle("fcitx-horizontal-scroll",a===2),a===2?(g.style.maxBlockSize="",ti(f)):a===1?$t(t.map(c=>c.label)):g.style.maxBlockSize="";let D=W()(0);for(let c=0;c<t.length;++c){let s=h("fcitx-candidate","fcitx-hoverable");c===0&&a!==2&&s.classList.add("fcitx-candidate-first"),c===i&&s.classList.add("fcitx-highlighted","fcitx-highlighted-original"),c===t.length-1&&a!==2&&s.classList.add("fcitx-candidate-last");let m=h("fcitx-candidate-inner","fcitx-hoverable-inner");if(d||g.classList.contains("fcitx-horizontal-scroll")||c===i){let F=h("fcitx-mark");bt===""?F.classList.add("fcitx-no-text"):F.textContent=bt,m.append(F)}if(t[c].label||a===2){let F=h("fcitx-label");F.textContent=t[c].label||D,m.append(F)}let C=h("fcitx-text");if(C.textContent=t[c].text,de(t[c].text)&&(C.style.writingMode="horizontal-tb"),m.append(C),t[c].comment){let F=h("fcitx-comment");F.textContent=t[c].comment,t[c].spaceBetweenComment===!1&&(F.style.setProperty("--text-margin-left-scale","-1"),F.style.setProperty("--vertical-comment-flex","0")),m.append(F)}s.append(h("fcitx-candidate-background")),s.append(m),u.append(s),u.append(pt())}if(hi(t.map(c=>c.actions)),a===1&&Ct()!=="None"){u.append(pt(!0));let c=h("fcitx-expand","fcitx-paging-inner","fcitx-hoverable-inner");c.innerHTML=si;let s=h("fcitx-paging","fcitx-scroll","fcitx-hoverable");s.append(c),u.append(s)}else if(a===0&&e){let c=Ct()==="Arrow";u.append(pt(!0));let s=h("fcitx-prev","fcitx-hoverable"),m=h("fcitx-paging-inner");o&&m.classList.add("fcitx-hoverable-inner"),m.innerHTML=c?me:ge,s.appendChild(m);let C=h("fcitx-next","fcitx-hoverable"),F=h("fcitx-paging-inner");r&&F.classList.add("fcitx-hoverable-inner"),F.innerHTML=c?si:he,C.appendChild(F);let y=h("fcitx-paging");c?y.classList.add("fcitx-arrow"):y.classList.add("fcitx-triangle"),y.appendChild(s),y.appendChild(C),u.appendChild(y)}else a===2&&ci(l);for(let c of u.querySelectorAll(".fcitx-hoverable"))c.addEventListener("mousemove",()=>{if(H()==="Move"&&g.classList.contains("fcitx-mousemoved")){let m=u.querySelector(".fcitx-highlighted");kt(m,c)}});if(d&&new Set(t.map(c=>c.label.length)).size===1||l){n.style.removeProperty("--label-width");let c=0;u.querySelectorAll(".fcitx-label").forEach(s=>{c=Math.max(c,s.getBoundingClientRect().width)}),n.style.setProperty("--label-width",`${c}px`)}else a!==2&&n.style.removeProperty("--label-width");J()}function V(t,i){if(t.innerHTML="",t.classList.toggle("fcitx-hidden",i.length===0),i.length>0)for(let[e,o]of i){let r=document.createElement("span");r.textContent=e,t.appendChild(r)}}function Bt(t,i,e,o,r){let a=t.length||e.length;(a||o.length||r.length)&&n.classList.remove("fcitx-hidden"),w();let l=A.querySelector(".fcitx-pre-caret"),f=A.querySelector(".fcitx-caret"),x=A.querySelector(".fcitx-post-caret");V(l,t),i&&(f.textContent=vt,f.classList.toggle("fcitx-no-text",!vt)),V(x,e),A.classList.toggle("fcitx-hidden",!a),V(ut,o),V(Dt,r)}function di(){Bt([],!1,[],[],[]),wt([],-1,!1,!1,!1,0,!1,!1,[]),n.classList.add("fcitx-hidden")}var pe=10,P=0,K=!1,Z=!1,yt=0,At=0,Q=0,tt=0,it=0,bi=0;function gi(){bi=0,g.classList.remove("fcitx-mousemoved"),b.classList.remove("fcitx-mousemoved")}var Lt=[];function hi(t){Lt=t}var vi=0,Ci=0,Ei=0;function ki(t){zi(vi,Ci,Ei,t)}var wi=t=>{};function St(t){wi(t)}function Bi(t){let i=document.querySelector(".fcitx-caret");i&&(i.style.opacity=t?"1":"0")}var yi=!0;function Ai(t){yi=t,t||Bi(!0)}var zt=!1;function be(t){switch(t.length){case 1:return[t[0],t[0],t[0],t[0]];case 2:return[t[0],t[1],t[0],t[1]];case 3:return[t[0],t[1],t[2],t[0]];case 4:return t;default:return[0,0,0,0]}}function O(t,i,e,o,r){P=t;function a(l){let{anchorTop:f,anchorRight:x,anchorLeft:d,right:D,bottom:c}=mi(b),s=I.getBoundingClientRect();f=Math.min(f,s.top),d=Math.min(d,s.left),s.right>D&&(x=D=s.right);let m=s.bottom;if(m>c&&(c=s.bottom),l)D+=100,c+=100;else if(v.style.display==="block"){let{right:Zi,bottom:Qi}=mi(v);D=Math.max(D,Zi),c=Math.max(c,Qi)}let C=b.getBoundingClientRect(),{borderRadius:F,borderWidth:y}=getComputedStyle(b),Ji=Math.max(...y.split(" ").map(Number.parseFloat)),Ki=F.split(" ").map(Number.parseFloat),N=be(Ki);window.fcitx("resize",P,i,e,f,x,m,d,C.top,C.right,C.bottom,C.left,N[0],N[1],N[2],N[3],Ji,D,c,o)}a(r)}var ui=()=>O(P,0,0,!1,!1);function mi(t){let i=t.getBoundingClientRect(),e=i.right,o=i.bottom,r=window.getComputedStyle(t).boxShadow.split(" ").map(Number.parseFloat);for(let a=0;a<r.length/7;a+=1){let l=r[7*a+3],f=r[7*a+4],x=r[7*a+5],d=r[7*a+6],D=l+x+d,c=f+x+d,s=i.right+(D>0?D:0),m=i.bottom+(c>0?c:0);s>e&&(e=s),m>o&&(o=m)}return{anchorTop:i.top,anchorRight:i.right,anchorLeft:i.left,right:e,bottom:o}}function h(...t){let i=document.createElement("div");return i.classList.add(...t),i}function Fi(t){return t!==u&&u.contains(t)}function pi(t){let i=u.querySelectorAll(".fcitx-candidate");for(let e=0;e<i.length;++e)if(i[e]===t)return e;return-1}function zi(t,i,e,o){v.innerHTML="";for(let r of o){let a=h("fcitx-menu-item");a.textContent=r.text,a.addEventListener("click",()=>{window.fcitx("action",e,r.id),w()}),v.appendChild(a)}v.style.top=`${i}px`,v.style.left=`${t}px`,v.style.display="block",O(P,0,0,!1,!0)}function w(){v.innerHTML="",v.style.display="none"}var et;function Li(){et=window.fcitx.distribution==="fcitx5-js"?I:document,et.addEventListener("mouseup",t=>{t.button!==0||v.style.display!=="block"||v.contains(t.target)||(w(),K=!1,Z=!1,t.stopImmediatePropagation())},!0),g.addEventListener("mouseleave",()=>{if(H()==="Move"){let i=u.querySelector(".fcitx-highlighted"),e=u.querySelector(".fcitx-highlighted-original");kt(i,e)}}),et.addEventListener("mousedown",t=>{t.button===0&&(K=!0,yt=t.clientX,At=t.clientY,Q=0,tt=0,it=0)}),document.addEventListener("mousemove",t=>{if(++bi>=2&&g.classList.add("fcitx-mousemoved"),t.button!==0||!K)return;w(),Z=!0;let i=t.clientX-yt,e=t.clientY-At;window.fcitx.distribution==="fcitx5-js"&&(yt=t.clientX,At=t.clientY),Q+=i,tt+=e,it=Math.max(it,Q*Q+tt*tt),O(P,i,e,!0,!1)}),document.addEventListener("mouseup",t=>{if(t.button!==0||(K=!1,Z&&(Z=!1,it>pe)))return;let i=t.target;if(!Fi(i))return;for(;i.parentElement!==u;){if(i.classList.contains("fcitx-prev"))return i.querySelector(".fcitx-hoverable-inner")?window.fcitx("page",!1):void 0;if(i.classList.contains("fcitx-next"))return i.querySelector(".fcitx-hoverable-inner")?window.fcitx("page",!0):void 0;if(i.classList.contains("fcitx-expand"))return ei();i=i.parentElement}let e=pi(i);if(e>=0)return window.fcitx("select",e)}),et.addEventListener("contextmenu",t=>{t.preventDefault();let i=t.target;if(!Fi(i))return;let e=t.clientX-(window.fcitx.distribution==="fcitx5-js"?n.getBoundingClientRect().left:0),o=t.clientY-(window.fcitx.distribution==="fcitx5-js"?n.getBoundingClientRect().top:0);for(;i.parentElement!==u;)i=i.parentElement;let r=pi(i);if(r>=0&&mt()===2)return vi=e,Ci=o,Ei=r,window.fcitx("askActions",r);r>=0&&Lt[r].length>0?zi(e,o,r,Lt[r]):w()}),wi=t=>{document.querySelector(".fcitx-panel-blur").classList.toggle("fcitx-blur",t)},setInterval(()=>{yi&&(Bi(zt),zt=!zt)},500)}var Si="None";function Ti(t){Si=t}function H(){return Si}var Mi="Arrow";function Ri(t){Mi=t}function Ct(){return Mi}var Hi="fcitx-ghost-stripe";function Pi(t,i,e){let o=Number.parseFloat(e.borderWidth),r=t.querySelector(".fcitx-candidate-inner"),a=r.getBoundingClientRect(),l=getComputedStyle(r),f=a.top<=i.top+o&&a.left<=i.left+o&&Number.parseFloat(l.borderTopLeftRadius)<=Number.parseFloat(e.borderTopLeftRadius),x=a.top<=i.top+o&&a.right>=i.right-o&&Number.parseFloat(l.borderTopRightRadius)<=Number.parseFloat(e.borderTopRightRadius),d=a.bottom>=i.bottom-o&&a.left<=i.left+o&&Number.parseFloat(l.borderBottomLeftRadius)<=Number.parseFloat(e.borderBottomLeftRadius),D=a.bottom>=i.bottom-o&&a.right>=i.right-o&&Number.parseFloat(l.borderBottomRightRadius)<=Number.parseFloat(e.borderBottomRightRadius);if(!f&&!x&&!d&&!D)return"";let c=[];return f?c.push(`0 ${e.borderTopLeftRadius}`,`${e.borderTopLeftRadius} 0`):c.push("0 0","0 0"),x?c.push(`calc(100% - ${e.borderTopRightRadius}) 0`,`100% ${e.borderTopRightRadius}`):c.push("100% 0","100% 0"),D?c.push(`100% calc(100% - ${e.borderBottomRightRadius})`,`calc(100% - ${e.borderBottomRightRadius}) 100%`):c.push("100% 100%","100% 100%"),d?c.push(`${e.borderBottomLeftRadius} 100%`,`0 calc(100% - ${e.borderBottomLeftRadius})`):c.push("0 100%","0 100%"),`polygon(${c.join(", ")})`}function J(){let t=document.head.querySelector(`#${Hi}`);do{if(g.classList.contains("fcitx-horizontal-scroll"))break;let i=u.querySelectorAll(".fcitx-candidate");if(i.length===0)break;let e=b.getBoundingClientRect(),o=getComputedStyle(b),r=Pi(i[0],e,o),a=i.length>1?Pi(i[i.length-1],e,o):"";if(!r&&!a)break;t||(t=document.createElement("style"),t.id=Hi,document.head.appendChild(t));let l="",f=H();r&&(l+=`.fcitx-candidate-first.fcitx-highlighted .fcitx-candidate-background { clip-path: ${r}; }
`,f==="Add"&&(l+=`.fcitx-candidate-first:hover .fcitx-candidate-background { clip-path: ${r}; }
`)),a&&(l+=`.fcitx-candidate-last.fcitx-highlighted .fcitx-candidate-background { clip-path: ${a}; }
`,f==="Add"&&(l+=`.fcitx-candidate-last:hover .fcitx-candidate-background { clip-path: ${a}; }
`)),t.innerHTML=l;return}while(!1);t?.remove()}function S(t){return`${t}px`}var ve=["cursive","fangsong","fantasy","kai","khmer-mul","math","monospace","nastaliq","sans-serif","serif","system-ui","ui-monospace","ui-rounded","ui-sans-serif","ui-serif"];function ot(t,i){let e=Object.values(i).flatMap(o=>(o=o.trim(),o?ve.includes(o)?o:JSON.stringify(o):[]));n.style.setProperty(t,e.join(", "))}function Oi(t){return`${t}?r=${Math.random()}`}var Ce=["macos"],Ee=["macos-26","macos-15"],rt=28;function Tt(t){let i="",e="";switch(t){case"macOS 26":i="macos",e="macos-26",rt=28;break;case"macOS 15":i="macos",e="macos-15",rt=30;break}for(let o of Ce)n.classList.toggle(`fcitx-${o}`,o===i);for(let o of Ee)n.classList.toggle(`fcitx-${o}`,o===e)}var Mt="var(--accent-color)";function Ni(t){let i=JSON.parse(t),e=i.Background.ImageUrl.trim();e.startsWith("fcitx://")&&(e=Oi(e));function o(d,D,c=""){n.style.setProperty(`--light-${d}`,i.LightMode.OverrideDefault==="True"&&D?i.LightMode[D]:c),n.style.setProperty(`--dark-${d}`,i.DarkMode.OverrideDefault==="True"&&D?i.DarkMode.SameWithLightMode==="True"&&i.LightMode.OverrideDefault==="True"?i.LightMode[D]:i.DarkMode[D]:c.replace("--light-","--dark-"))}function r(d,D){n.style.setProperty(`--${d}`,i.Size.OverrideDefault==="True"?S(D):"")}i.Basic.DefaultTheme==="System"?window.fcitx.host.system==="macOS"&&window.fcitx.host.version<=15?Tt("macOS 15"):Tt("macOS 26"):Tt(i.Basic.DefaultTheme),o("highlight-color","HighlightColor",Mt),o("highlight-hover-color","HighlightHoverColor"),i.Highlight.HoverBehavior==="Add"?(o("hover-color","HighlightColor",Mt),o("press-color","HighlightHoverColor",Mt),o("text-hover-color","","var(--light-highlight-text-color, white)"),o("text-press-color","","var(--light-highlight-text-press-color, white)"),o("label-hover-color","HighlightLabelColor","white"),o("comment-hover-color","HighlightCommentColor","white")):(o("hover-color",""),o("press-color",""),o("text-hover-color",""),o("text-press-color",""),o("label-hover-color","LabelColor"),o("comment-hover-color","CommentColor")),o("highlight-text-color","HighlightTextColor"),o("highlight-text-press-color","HighlightTextPressColor"),o("highlight-label-color","HighlightLabelColor"),o("highlight-comment-color","HighlightCommentColor"),i.Highlight.MarkStyle==="Text"?(o("highlight-mark-text-color","HighlightMarkColor","white"),o("highlight-mark-color","","transparent"),Et(i.Highlight.MarkText)):(o("highlight-mark-text-color",""),o("highlight-mark-color","HighlightMarkColor","white"),Et("")),e&&i.Background.KeepPanelColorWhenHasImage==="False"?o("panel-color-no-image","","transparent"):o("panel-color-no-image","PanelColor"),o("panel-color","PanelColor"),o("text-color","TextColor"),o("label-color","LabelColor"),o("comment-color","CommentColor"),o("paging-button-color","PagingButtonColor"),o("disabled-paging-button-color","DisabledPagingButtonColor"),o("aux-color","AuxColor"),o("preedit-color-pre-caret","PreeditColorPreCaret"),o("preedit-color-caret","PreeditColorCaret"),o("preedit-color-post-caret","PreeditColorPostCaret"),o("panel-border-color","BorderColor"),o("divider-color","DividerColor");let a=65;i.Size.OverrideDefault==="True"&&(a=Number(i.Size.ScrollCellWidth),rt=Math.max(24,Number(i.Font.TextFontSize))+Number(i.Size.TopPadding)+Number(i.Size.BottomPadding)+2*Number(i.Size.Margin)),r("border-width",i.Size.BorderWidth),r("border-radius",i.Size.BorderRadius),r("margin",i.Size.Margin),r("middle-margin",i.Size.HorizontalDividerWidth==="0"?Number(i.Size.Margin)/2:i.Size.Margin),r("highlight-radius",i.Size.HighlightRadius),r("top-padding",i.Size.TopPadding),r("right-padding",i.Size.RightPadding),r("bottom-padding",i.Size.BottomPadding),r("left-padding",i.Size.LeftPadding),r("label-text-gap",i.Size.LabelTextGap),r("vertical-min-width",i.Size.VerticalMinWidth),r("cell-width",a),r("horizontal-divider-width",i.Size.HorizontalDividerWidth),n.style.setProperty("--vertical-comment-flex",i.Typography.VerticalCommentsAlignRight==="True"?"1":""),Ri(i.Typography.PagingButtonsStyle);let l=Number(i.ScrollMode.MaxRowCount),f=Number(i.ScrollMode.MaxColumnCount);n.style.setProperty("--max-row",i.ScrollMode.MaxRowCount),n.style.setProperty("--max-column",i.ScrollMode.MaxColumnCount),Jt(l,f,a,rt),n.style.setProperty("--scrollbar-redundancy-width",i.ScrollMode.ShowScrollBar==="False"?"0px":"2px"),n.style.setProperty("--scrollbar-width",i.ScrollMode.ShowScrollBar==="False"?"0px":"8px");let x=i.ScrollMode.Animation==="True";if(n.style.setProperty("--scroll-animation",x?"":"none"),Zt(x),n.style.setProperty("--background-image",e?`url(${JSON.stringify(e)})`:""),window.fcitx.distribution==="fcitx5-js"){i.Background.Blur==="True"?St(!0):St(!1);let d=`blur(${S(i.Background.BlurRadius)})`;n.style.setProperty("--backdrop-filter",d)}n.style.setProperty("--panel-shadow",i.Background.Shadow==="True"?"":"none"),ot("--text-font-family",i.Font.TextFontFamily),n.style.setProperty("--text-font-size",S(i.Font.TextFontSize)),n.style.setProperty("--text-font-weight",i.Font.TextFontWeight),ot("--label-font-family",i.Font.LabelFontFamily),n.style.setProperty("--label-font-size",S(i.Font.LabelFontSize)),n.style.setProperty("--label-font-weight",i.Font.LabelFontWeight),ot("--comment-font-family",i.Font.CommentFontFamily),n.style.setProperty("--comment-font-size",S(i.Font.CommentFontSize)),n.style.setProperty("--comment-font-weight",i.Font.CommentFontWeight),ot("--preedit-font-family",i.Font.PreeditFontFamily),n.style.setProperty("--preedit-font-size",S(i.Font.PreeditFontSize)),n.style.setProperty("--preedit-font-weight",i.Font.PreeditFontWeight),Ai(i.Caret.Style==="Blink"),fi(i.Caret.Style==="Text"?i.Caret.Text:""),Ti(i.Highlight.HoverBehavior),n.style.setProperty("--mark-opacity",i.Highlight.MarkStyle==="None"?"0":"1"),document.head.querySelector("#fcitx-user")?.setAttribute("href",Oi(i.Advanced.UserCss)),J()}function Ii(){let t=window.fcitx?.distribution||"";if(t!=="fcitx5-js"){let i=document.createElement("style");i.innerHTML=`body {
  background: rgb(0 0 0 / 0%);
  margin: 0;
  overflow: hidden;
  width: 1920px;
  height: 1080px;
}`,document.head.append(i),window.fcitx||=((...e)=>console.log(...e)),window.fcitx.distribution=t}window.fcitx.host||={system:"macOS",version:26},window.fcitx.setHost=(i,e)=>{i&&(window.fcitx.host={system:i,version:e})}}function qi(...t){for(let i=0;i<t.length;++i){i>0&&window.fcitx("log"," ");let e=t[i],o="";if(typeof e=="object")try{o=JSON.stringify(e)}catch{}window.fcitx("log",o||String(e))}window.fcitx("log",`
`)}var ct=[],Rt={};Object.defineProperty(Rt,"register",{value:t=>{if(typeof t.load!="function")return window.fcitx.log("Plugin must have a load function");if(typeof t.unload!="function")return window.fcitx.log("Plugin must have an unload function");ct.push(t.unload),t.load()}});function _i(t){for(let i of t){window.fcitx.log(`Loading plugin ${i}`);let e=document.createElement("script");e.src=`fcitx:///file/plugin/${i}/dist/index.js`,e.classList.add("fcitx-plugin"),document.head.appendChild(e)}}function $i(){for(let t of ct.reverse())try{t()}catch(i){window.fcitx.log(`Error unloading plugin: ${i}`)}ct.splice(0,ct.length),document.head.querySelectorAll(".fcitx-plugin").forEach(t=>t.remove())}var Ht,Ot=!1,nt=!0;function Wi(t){n.style.setProperty("--color-transition",t?"":"none")}function ji(t,i){Wi(!0),n.classList.remove(t),n.classList.add(i),setTimeout(Wi,500,!1)}function Gi(){ji("fcitx-dark","fcitx-light")}function Yi(){ji("fcitx-light","fcitx-dark")}function Ui(){Ot?Yi():Gi()}function Vi(){typeof window>"u"||!window.matchMedia||(Ht=window.matchMedia("(prefers-color-scheme: dark)"),Ot=Ht.matches,Ht.addEventListener("change",t=>{Ot=t.matches,nt&&Ui()}))}function Nt(t){switch(t){case 0:nt=!0,Ui();break;case 1:nt=!1,Gi();break;case 2:nt=!1,Yi();break}}var Pt={null:"blue","-1":"graphite",0:"red",1:"orange",2:"yellow",3:"green",4:"blue",5:"purple",6:"pink"},at="null";function Xi(t){if(typeof t=="string"){n.style.setProperty("--accent-color",t);return}n.style.setProperty("--accent-color",""),n.classList.remove(`fcitx-${Pt[at]}`);let i=String(t);i in Pt?at=i:at="4",n.classList.add(`fcitx-${Pt[at]}`)}function Be(t){g.classList.toggle("fcitx-horizontal",t===0),g.classList.toggle("fcitx-vertical",t===1)}function ye(t){let i=["fcitx-horizontal-tb","fcitx-vertical-rl","fcitx-vertical-lr"];for(let e=0;e<i.length;++e)b.classList.toggle(i[e],t===e)}function Ae(){let t=document.documentElement.outerHTML;window.fcitx("copyHTML",t)}function ze(t){if(Ii(),!document.head.querySelector("#fcitx-style")){let i=document.createElement("style");i.id="fcitx-style",i.textContent=It,document.head.append(i)}if(!document.head.querySelector("#fcitx-user")){let i=document.createElement("link");i.id="fcitx-user",i.rel="stylesheet",document.head.append(i)}t.insertAdjacentHTML("beforeend",`
    <div id="fcitx-theme" class="fcitx-blue fcitx-macos fcitx-macos-15 fcitx-macos-26">
      <div class="fcitx-decoration">
        <div class="fcitx-panel-topleft"></div>
        <div class="fcitx-panel-top"></div>
        <div class="fcitx-panel-topright"></div>
        <div class="fcitx-panel-left"></div>
        <div class="fcitx-panel-right"></div>
        <div class="fcitx-panel-bottomleft"></div>
        <div class="fcitx-panel-bottom"></div>
        <div class="fcitx-panel-bottomright"></div>
        <div class="fcitx-panel-center">
          <div class="fcitx-panel fcitx-horizontal-tb">
            <div class="fcitx-panel-blur">
              <div class="fcitx-header">
                <div class="fcitx-aux-up fcitx-hidden"></div>
                <div class="fcitx-preedit fcitx-hidden">
                  <div class="fcitx-pre-caret"></div>
                  <div class="fcitx-caret"></div>
                  <div class="fcitx-post-caret"></div>
                </div>
              </div>
              <div class="fcitx-aux-down fcitx-hidden"></div>
              <div class="fcitx-hoverables fcitx-horizontal">
                <div class="fcitx-scroll-area"></div>
                <div class="fcitx-tabs">
                  <div class="fcitx-tabs-scrollable"></div>
                  <div class="fcitx-tabs-pinned"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="fcitx-contextmenu fcitx-blur"></div>
    </div>
  `),qt(t),Vi(),Li(),li(),window.fcitx.setCandidates=wt,window.fcitx.setLayout=Be,window.fcitx.updateInputPanel=Bt,window.fcitx.hidePanel=di,window.fcitx.resize=O,window.fcitx.setTheme=Nt,window.fcitx.setAccentColor=Xi,window.fcitx.setStyle=Ni,window.fcitx.setWritingMode=ye,window.fcitx.copyHTML=Ae,window.fcitx.scrollKeyAction=ni,window.fcitx.answerActions=ki,window.fcitx.log=qi,Object.defineProperty(window.fcitx,"pluginManager",{value:Rt}),Object.defineProperty(window.fcitx,"loadPlugins",{value:_i}),Object.defineProperty(window.fcitx,"unloadPlugins",{value:$i}),Nt(0),window.fcitx("onload")}return ce(Le);})();
