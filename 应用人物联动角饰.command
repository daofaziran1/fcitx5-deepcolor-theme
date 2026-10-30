#!/bin/zsh
set -eu
TASK_ART_DIR="$(cd -- "$(dirname -- "$0")" && pwd)"
TASK_THEME_DIR="$HOME/.local/share/fcitx5/www/css/deepcolor-character-v211"
TASK_PLUGIN_DIR="$HOME/.local/share/fcitx5/www/plugin/deepcolor-typing"
mkdir -p "$TASK_THEME_DIR" "$TASK_PLUGIN_DIR/assets" "$TASK_PLUGIN_DIR/dist"
cp "$TASK_ART_DIR/deepcolor.css" "$TASK_THEME_DIR/skin.css"
cp -R "$TASK_ART_DIR/assets" "$TASK_THEME_DIR/"
cp "$TASK_ART_DIR/plugin/deepcolor-typing/dist/index.js" "$TASK_PLUGIN_DIR/dist/index.js"
cp "$TASK_ART_DIR/plugin/deepcolor-typing/assets/deepcolor-atlas.png" "$TASK_PLUGIN_DIR/assets/deepcolor-atlas.png"
"/Library/Input Methods/Fcitx5.app/Contents/bin/fcitx5-curl" /config/addon/webpanel -X POST --data-binary "@$TASK_ART_DIR/fcitx-config-patch.json"
echo "已应用人物联动角饰，玻璃效果已关闭。"
