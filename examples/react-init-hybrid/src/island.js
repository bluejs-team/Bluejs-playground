"use strict";

const fs = require("fs");
const http = require("http");
const path = require("path");

const HOST = "127.0.0.1";
const PORT = 38420;

function resolvePublicDir() {
  if (process.env.BLUE_SITE_ROOT) {
    var ep = path.join(process.env.BLUE_SITE_ROOT, "public");
    try {
      fs.readFileSync(path.join(ep, "app.bundle.js"));
      return ep;
    } catch (_e) {}
  }
  var c = [
    path.join(process.cwd(), "examples", "react-init-hybrid", "public"),
    path.join(process.cwd(), "public"),
  ];
  var i = 0;
  for (i = 0; i < c.length; i++) {
    try {
      fs.readFileSync(path.join(c[i], "app.bundle.js"));
      return c[i];
    } catch (_e2) {}
  }
  return path.join(process.cwd(), "public");
}

function pathname(url) {
  return String(url || "/").split("?")[0];
}

function reply(res, status, body, mime) {
  res.statusCode = status;
  res.setHeader("content-type", mime);
  res.end(body);
}

function json(res, status, obj) {
  reply(res, status, JSON.stringify(obj), "application/json; charset=utf-8");
}

http
  .createServer(function handle(req, res) {
    const method = String(req.method || "GET").toUpperCase();
    const url = pathname(req.url);

    if (method !== "GET") {
      reply(res, 405, "Method Not Allowed", "text/plain; charset=utf-8");
      return;
    }

    if (url === "/") {
      const html = Blue.callAot("getBundledHtml", "");
      reply(res, 200, String(html || ""), "text/html; charset=utf-8");
      return;
    }

    if (url === "/app.bundle.js") {
      try {
        reply(
          res,
          200,
          fs.readFileSync(path.join(resolvePublicDir(), "app.bundle.js")),
          "application/javascript; charset=utf-8"
        );
      } catch (_e3) {
        reply(res, 404, "app.bundle.js not found", "text/plain; charset=utf-8");
      }
      return;
    }

    if (url === "/style.css") {
      try {
        reply(res, 200, fs.readFileSync(path.join(resolvePublicDir(), "style.css")), "text/css; charset=utf-8");
      } catch (_e4) {
        reply(res, 404, "style.css not found", "text/plain; charset=utf-8");
      }
      return;
    }

    if (url === "/api/health") {
      json(res, 200, { ok: true });
      return;
    }

    if (url === "/api/status") {
      try {
        json(res, 200, {
          memory: String(Blue.System.getMemoryInfo()),
          cpu: String(Blue.System.getCPU()),
        });
      } catch (err) {
        reply(res, 500, String(err), "text/plain; charset=utf-8");
      }
      return;
    }

    /** Island calls into compiled code: `Blue.callAot("aotHello", …)`. */
    if (url === "/api/aot") {
      const message = Blue.callAot("aotHello", "");
      json(res, 200, {
        ok: true,
        message: String(message || ""),
      });
      return;
    }

    reply(res, 404, "Not Found", "text/plain; charset=utf-8");
  })
  .listen(PORT, HOST, function ready() {
    console.log("Island ready at http://" + HOST + ":" + PORT + "/");
  });
