/*
  PROTOTYPE VERSION
  Calls go out serially, in sequence
  Failure is ignored; process goes on
*/

Array.prototype.forEachAsync = function (fn) {
  return this.reduce(
    (prom, val, idx, arr) => prom.finally(() => fn(val, idx, arr)),
    Promise.resolve()
  );
};

/*
    ALTERNATIVE VERSION USING FUNCTIONS
*/

export const forEachAsync = (arr, fn) =>
  arr.reduce(
    (prom, val, idx, arr) => prom.finally(() => fn(val, idx, arr)),
    Promise.resolve()
  );
