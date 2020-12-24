/*
  PROTOTYPE VERSION
  Calls go out in parallel
  Failure is ignored
*/

Array.prototype.everyAsync = function (fn, init) {
  return this.reduce(
    (prom, val, idx, arr) =>
      prom.then((acc) => acc && fn(val, idx, arr)).catch(() => false),
    Promise.resolve(true)
  );
};

/*
    ALTERNATIVE VERSION USING FUNCTIONS
*/
export const everyAsync = (arr, fn, init) =>
  arr.reduce(
    (prom, val, idx, arr) =>
      prom.then((acc) => acc && fn(val, idx, arr)).catch(() => false),
    Promise.resolve(true)
  );
