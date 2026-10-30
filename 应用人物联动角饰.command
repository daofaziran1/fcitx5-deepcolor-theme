#!/bin/zsh
set -eu
TASK_ART_DIR="$(cd -- "$(dirname -- "$0")" && pwd)"
TASK_THEME_DIR="$HOME/.local/share/fcitx5/www/css/deepcolor-character-v211"
mkdir -p "$TASK_THEME_DIR"
cp "$TASK_ART_DIR/deepcolor.css" "$TASK_THEME_DIR/skin.css"
cp -R "$TASK_ART_DIR/assets" "$TASK_THEME_DIR/"
"/Library/Input Methods/Fcitx5.app/Contents/bin/fcitx5-curl" /config/addon/webpanel -X POST --data-binary "@$TASK_ART_DIR/fcitx-config-patch.json"
echo "已应用人物联动角饰，玻璃效果已关闭。"
