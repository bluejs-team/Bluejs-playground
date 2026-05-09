"use strict";

/**
 * AOT (compiled) piece of a hybrid app - keep it small.
 *
 * - **`getBundledHtml`** - returns the inlined SPA shell (bundle HTML placeholder in source).
 * - **`aotHello`** - one string from **`Blue.callAot`** (island → compiled code).
 *
 * **`Blue.System`** in the UI comes from the island (`GET /api/status`).
 */

function getBundledHtml(_payload) {
  return __BLUE_BUNDLE_HTML__;
}

function aotHello(_payload) {
  return "hello from AOT core";
}
