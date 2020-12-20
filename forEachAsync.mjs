/*
  PROTOTYPE VERSION
  Calls go out serially, in sequence
  Failure is ignored; process goes on
*/

Array.prototype.forEachAsync = function (fn) {
  return this.reduce(
    (promise, value, index, array) =>
      promise.finally(() => fn(value, index, array)),
    Promise.resolve()
  );
};

/*
    ALTERNATIVE VERSION USING FUNCTIONS
*/

export const forEachAsync = (arr, fn) =>
  arr.reduce(
    (promise, value, index, array) =>
      promise.finally(() => fn(value, index, array)),
    Promise.resolve()
  );
