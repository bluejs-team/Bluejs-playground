"use strict";

/*
 * AOT-only example: hot loops run as compiled code (no npm, no QuickJS island).
 * The first two printed numbers are pinned for `make test` (do not change loops).
 */
var acc = 0;
var i = 0;
while (i < 2000000) {
  acc = acc + (i % 7);
  i = i + 1;
}
var tri = 0;
var j = 1;
while (j <= 10000) {
  tri = tri + j;
  j = j + 1;
}

console.log(acc);
console.log(tri);
