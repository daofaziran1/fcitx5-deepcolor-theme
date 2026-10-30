# 深海色输入法主题

当前版本：v2.1.1，人物联动外侧角饰。

## 声明

本仓库为纯 AI 生成的个人项目，仅供个人使用。引用的第三方代码不属于 AI 生成内容，仍遵循各自原有许可证。

本目录是主题的维护源码。原 Codex outputs 目录保留交互预览和打包副本。

## 文件

- `deepcolor.css`：当前主题样式，包含外侧边框、四角饰件、深浅配色和人物动画样式。
- `assets/character-corners.png`：人物四角装饰透明图集。
- `plugin/deepcolor-typing/dist/index.js`：可直接维护的动态人物插件 JavaScript。
- `plugin/deepcolor-typing/assets/deepcolor-atlas.png`：动态人物图集。
- `交互预览.html`、`preview-config.js`：交互预览及其配置。
- `native-preview.js`：同版本 Fcitx5 候选窗前端预览依赖；许可见 `fcitx5-webview-LICENSE`。
- `生成提示词.txt`：生成角饰使用的提示词及人物参考说明。
- `deepcolor-v210.css`：上一版内侧角饰样式，便于比较本次调整。

## 预览

```sh
cd ~/dev/fcitx5-deepcolor-theme
python3 -m http.server 8794 --bind 127.0.0.1
```

浏览器打开 `http://127.0.0.1:8794/交互预览.html`，可以检查短条、长条、展开和深浅色。

## 应用样式改动

```sh
cd ~/dev/fcitx5-deepcolor-theme
./应用人物联动角饰.command
```

脚本将当前 CSS 和角饰素材复制到本机 Fcitx5 主题目录，并通过本地配置接口切换至该主题。
此脚本基于本机现有的动态人物插件和候选窗配置。修改人物插件后，需要将对应插件文件另行同步到本机的 `fcitx5/www/plugin/deepcolor-typing` 目录。

四角饰件固定为 30px，向外延伸约 8px；主体保持 12px 圆角。
当前输入法关闭玻璃效果，默认在候选窗显示拼音。
