# http-server

Hybrid HTTP server: the QuickJS island runs `http.createServer`, the AOT entry provides native API access.

## Build and run

```bash
npm install                   # in this directory (if needed)
./blue -build examples/http-server -o /tmp/http
/tmp/http
```

Then visit:

- `http://127.0.0.1:48311/` - plain text response
- `http://127.0.0.1:48311/api/blue` - `Blue.System` memory and CPU info

## What it demonstrates

- Hybrid mode: AOT entry + QuickJS island in one binary
- `http.createServer` in the island
- `Blue.System.getMemoryInfo()` and `Blue.System.getCPU()` from the island
- `Blue.Clipboard` read/write via `/api/clipboard-demo`
