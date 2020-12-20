/*
  PROTOTYPE VERSION
  Calls go out in parallel
  Failure is ignored
*/

Array.prototype.reduceAsync = function (fn, initValue) {
  return this.reduce(
    (promise, value, index, array) =>
      promise.then((acc) => fn(acc, value, index, array)).catch(() => acc),
    Promise.resolve(initValue)
  );
};

/*
    ALTERNATIVE VERSION USING FUNCTIONS
*/
export const reduceAsync = (arr, fn, initValue) =>
  arr.reduce(
    (promise, value, index, array) =>
      promise.then((acc) => fn(acc, value, index, array)).catch(() => acc),
    Promise.resolve(initValue)
  );
