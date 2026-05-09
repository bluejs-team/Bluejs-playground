"use strict";

const http = require("http");

const HOST = "127.0.0.1";
const PORT = 48311;

function sendJson(res, obj) {
  res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(obj));
}

function sendText(res, code, body) {
  res.writeHead(code, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(body);
}

function pathOnly(url) {
  return String(url || "/").split("?")[0];
}

http
  .createServer(function onRequest(req, res) {
    const path = pathOnly(req.url);

    try {
      if (path === "/api/blue") {
        sendJson(res, {
          memory: String(Blue.System.getMemoryInfo()),
          cpu: String(Blue.System.getCPU()),
        });
        return;
      }

      if (path === "/api/clipboard-demo") {
        try {
          Blue.Clipboard.writeText("blue-http-server-clip");
          const readBack = Blue.Clipboard.readText();
          sendJson(res, { ok: true, sample: String(readBack || "") });
        } catch (err) {
          sendJson(res, { ok: false, error: String(err) });
        }
        return;
      }
    } catch (err) {
      sendText(res, 500, String(err));
      return;
    }

    sendText(res, 200, "ok\n");
  })
  .listen(PORT, HOST);
