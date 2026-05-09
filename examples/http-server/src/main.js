"use strict";

/**
 * Hybrid builds have two JS worlds:
 * - This file is **AOT** (compiled ahead of time).
 * - **`src/island.js`** is QuickJS + **`http`** (I/O and routing live there).
 *
 * This entry stays tiny on purpose: there is no performance need for OS work here.
 */
console.log("http-server: compiled core started (HTTP is in the island)");
