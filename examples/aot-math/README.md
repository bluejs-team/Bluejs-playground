# aot-math

AOT-only example: tight loops compiled to native code. No npm, no QuickJS island, no WebView.

## Build and run

```bash
./blue -compile examples/aot-math/main.js -o /tmp/math
/tmp/math
```

Output:

```
5999995
50005000
[Blue.System] {"supported":true, ...}
```

## What it demonstrates

- Single-file AOT compilation
- `while` loops as native machine code
- `Blue.System.getMemoryInfo()` (try/catch for builds without native support)
