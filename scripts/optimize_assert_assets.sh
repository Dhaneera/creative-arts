#!/bin/zsh
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
SRC_DIR="$ROOT_DIR/public/assert"
OUT_DIR="$SRC_DIR/optimized"

mkdir -p "$OUT_DIR"

for input in "$SRC_DIR"/*.png; do
  base="$(basename "$input" .png)"
  output="$OUT_DIR/$base.jpg"
  sips -s format jpeg -s formatOptions 82 "$input" --out "$output" >/dev/null
done

for input in "$SRC_DIR"/*.mp4; do
  base="$(basename "$input")"
  output="$OUT_DIR/$base"
  ffmpeg -y -loglevel error -i "$input" \
    -an \
    -c:v libx264 \
    -preset slow \
    -crf 28 \
    -pix_fmt yuv420p \
    -movflags +faststart \
    "$output"
done
