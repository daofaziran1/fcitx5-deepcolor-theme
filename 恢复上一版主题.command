#!/bin/zsh
set -eu
TASK_ART_DIR="$(cd -- "$(dirname -- "$0")" && pwd)"
"/Library/Input Methods/Fcitx5.app/Contents/bin/fcitx5-curl" /config/addon/webpanel -X POST --data-binary "@$TASK_ART_DIR/恢复上一版配置.json"
echo "已恢复上一版内侧角饰。"
