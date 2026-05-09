# Bluejs Playground

Try Bluejs in GitHub Codespaces without installing anything locally.

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/YOUR_GITHUB_USERNAME/bluejs-playground)

Replace `YOUR_GITHUB_USERNAME` with your GitHub username or organization.

## Quick Start

```bash
blue --version

blue -compile examples/aot-math/main.js -o math
./math
```

## HTTP Server Example

```bash
blue -build examples/http-server -o http-demo
./http-demo
```

Open the forwarded port `48311`.

## React Hybrid Example

```bash
cd examples/react-init-hybrid
npm install
cd ../..

blue -build examples/react-init-hybrid -o react-demo
./react-demo
```

Open the forwarded port `38420`.

## Notes

Codespaces is best for console, HTTP, and React hybrid examples. Native WebView
desktop windows need a real desktop session, so test those locally on Linux,
Windows, or macOS.

The devcontainer installs:

- C++ build tools
- Node.js
- libuv headers
- GTK/WebKitGTK headers for compiling WebView examples
- Bluejs from `https://bluejs.dev/install.sh`
