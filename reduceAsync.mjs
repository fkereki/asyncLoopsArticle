/*
  PROTOTYPE VERSION
  Calls go out in parallel
  Failure is ignored
*/

Array.prototype.reduceAsync = function (fn, init) {
  return this.reduce(
    (prom, val, idx, arr) =>
      prom.then((acc) => fn(acc, val, idx, arr)).catch((acc) => acc),
    Promise.resolve(init)
  );
};

/*
    ALTERNATIVE VERSION USING FUNCTIONS
*/
export const reduceAsync = (arr, fn, init) =>
  arr.reduce(
    (prom, val, idx, arr) =>
      prom.then((acc) => fn(acc, val, idx, arr)).catch(() => acc),
    Promise.resolve(init)
  );
