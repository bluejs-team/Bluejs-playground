#!/usr/bin/env bash
set -euo pipefail

sudo apt-get update
sudo apt-get install -y \
  build-essential \
  pkg-config \
  curl \
  unzip \
  git \
  libuv1-dev \
  libgtk-3-dev \
  libwebkit2gtk-4.1-dev


echo "Installing Bluejs..."
curl -fsSL https://bluejs.dev/install.sh | bash

if ! grep -q 'HOME/.local/bin' "$HOME/.bashrc" 2>/dev/null; then
  echo 'export PATH="$HOME/.local/bin:$PATH"' >> "$HOME/.bashrc"
fi
export PATH="$HOME/.local/bin:$PATH"

blue --version

echo ""
echo "Codespace ready."
echo "Try:"
echo "  blue -compile examples/aot-math/main.js -o math && ./math"
echo "  blue -build examples/http-server -o http-demo && ./http-demo"
