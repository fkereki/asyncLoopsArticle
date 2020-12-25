Array.prototype.findIndexAsync = function (fn) {
  return this.reduce(
    (prom, val, idx, arr) =>
      prom.then((acc) =>
        acc.found
          ? acc
          : fn(val, idx, arr)
              .then((res) => (res ? { found: true, index: idx } : acc))
              .catch(() => acc)
      ),
    Promise.resolve({ found: false, index: -1 })
  ).then((result) => result.index);
};

/*
    ALTERNATIVE VERSION USING FUNCTIONS
*/
export const findIndexAsync = (arr, fn) =>
  arr
    .reduce(
      (prom, val, idx, arr) =>
        prom.then((acc) =>
          acc.found
            ? acc
            : fn(val, idx, arr)
                .then((res) => (res ? { found: true, index: idx } : acc))
                .catch(() => acc)
        ),
      Promise.resolve({ found: false, index: -1 })
    )
    .then((result) => result.index);
