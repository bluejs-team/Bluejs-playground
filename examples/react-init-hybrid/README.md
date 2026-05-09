# react-init-hybrid

Hybrid app with a React frontend served by the QuickJS island and AOT functions accessible via `Blue.callAot`.

## Build and run

Linux / macOS:

```bash
cd examples/react-init-hybrid
npm install
cd ../..
./blue -build examples/react-init-hybrid -o /tmp/react
/tmp/react
```

Windows:

```bat
cd examples\react-init-hybrid
npm install
cd ..\..
blue -build examples\react-init-hybrid -o react-demo.exe
react-demo.exe
```

Then visit `http://127.0.0.1:38420/`.

React and React DOM are build-time npm dependencies for this example. If Windows
reports that `esbuild` is missing, rerun the Bluejs installer or run
`npm install` once in `C:\Program Files\Bluejs\tools\jsc-npm-bundle` from an
administrator terminal.

## What it demonstrates

- React auto-bundling (`src/frontend.jsx` → `public/app.bundle.js`)
- Hybrid FFI: `Blue.callAot("aotHello", "")` from island to AOT
- `Blue.System` info exposed via `/api/status`
- HTML embedding with `__BLUE_BUNDLE_HTML__`
