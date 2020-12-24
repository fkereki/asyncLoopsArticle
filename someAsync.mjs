/*
  PROTOTYPE VERSION
  Calls go out in parallel
  Failure is ignored
*/

Array.prototype.someAsync = function (fn, init) {
  return this.reduce(
    (prom, val, idx, arr) =>
      prom.then((acc) => acc || fn(val, idx, arr)).catch(() => false),
    Promise.resolve(false)
  );
};

/*
    ALTERNATIVE VERSION USING FUNCTIONS
*/
export const someAsync = (arr, fn, init) =>
  arr.reduce(
    (prom, val, idx, arr) =>
      prom.then((acc) => acc || fn(val, idx, arr)).catch(() => false),
    Promise.resolve(false)
  );
