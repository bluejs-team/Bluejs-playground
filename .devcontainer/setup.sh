#!/usr/bin/env bash
set -euo pipefail

sudo apt-get update
sudo apt-get install -y \
  build-essential \
  pkg-config \
  curl \
  unzip \
  git \
  libuv1-dev

echo "Installing Bluejs..."
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
sudo dpkg -i "${SCRIPT_DIR}/blue.deb"

blue --version

echo ""
echo "Codespace ready."
echo "Try:"
echo "  blue -compile examples/aot-math/main.js -o math && ./math"
echo "  blue -build examples/http-server -o http-demo && ./http-demo"
echo "  cd examples/react-init-hybrid && npm install && cd ../.."
echo "  blue -build examples/react-init-hybrid -o react-demo && ./react-demo"
