import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

async function getJson(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(String(r.status));
  return r.json();
}

function Panel({ title, children }) {
  return (
    <section className="card">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function App() {
  const [status, setStatus] = useState(null);
  const [fromAot, setFromAot] = useState(null);

  useEffect(() => {
    getJson("/api/status")
      .then(setStatus)
      .catch(() => setStatus({ error: true }));

    getJson("/api/aot")
      .then(setFromAot)
      .catch(() => setFromAot({ ok: false, message: "fetch failed" }));
  }, []);

  return (
    <main className="wrap">
      <h1>Blue hybrid - React</h1>
      <p className="lede">
        The page is served from the <strong>QuickJS island</strong>. One panel reads{" "}
        <code>Blue.System</code> inside the island; the other calls{" "}
        <code>Blue.callAot(&quot;aotHello&quot;, …)</code> so you can see the compiled (AOT) side
        answer with a plain string.
      </p>

      <Panel title="Island - Blue.System (`GET /api/status`)">
        <pre>{status ? JSON.stringify(status, null, 2) : "Loading…"}</pre>
      </Panel>

      <Panel title="Island → AOT (`GET /api/aot`)">
        <pre>{fromAot ? JSON.stringify(fromAot, null, 2) : "Loading…"}</pre>
      </Panel>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
