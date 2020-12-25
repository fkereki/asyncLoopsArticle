Array.prototype.findAsync = function (fn) {
  return this.reduce(
    (prom, val, idx, arr) =>
      prom.then((acc) =>
        acc.found
          ? acc
          : fn(val, idx, arr)
              .then((res) => (res ? { found: true, value: val } : acc))
              .catch(() => acc)
      ),
    Promise.resolve({ found: false, value: undefined })
  ).then((result) => result.value);
};

/*
    ALTERNATIVE VERSION USING FUNCTIONS
*/
export const findAsync = (arr, fn) =>
  arr
    .reduce(
      (prom, val, idx, arr) =>
        prom.then((acc) =>
          acc.found
            ? acc
            : fn(val, idx, arr)
                .then((res) => (res ? { found: true, value: val } : acc))
                .catch(() => acc)
        ),
      Promise.resolve({ found: false, value: undefined })
    )
    .then((result) => result.value);
