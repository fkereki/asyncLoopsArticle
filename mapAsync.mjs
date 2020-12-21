/*
  PROTOTYPE VERSION
  Calls go out in parallel
  Failure is ignored
*/

Array.prototype.mapAsync = function (fn) {
  return Promise.allSettled(this.map(fn)).then((x) => x.map((y) => y.val));
};

/*
    ALTERNATIVE VERSION USING FUNCTIONS
*/

export const mapAsync = (arr, fn) =>
  Promise.allSettled(arr.map(fn)).then((x) => x.map((y) => y.val));
