import { forEachAsync } from "./forEachAsync.mjs";

/*
  PROTOTYPE VERSION
  Calls go out in parallel
  Failure is ignored
*/
Array.prototype.reduceAsyncOLD = function (fn, initValue) {
  return Promise.resolve(initValue).then((accum) =>
    this.forEachAsync(async (v, i) => {
      accum = await fn(accum, v, i);
    }).then(() => accum)
  );
};

/*
    ALTERNATIVE VERSION USING FUNCTIONS
*/

export const reduceAsyncOld = (arr, fn, initValue) =>
  Promise.resolve(initValue).then((accum) =>
    forEachAsync(arr, async (v, i) => {
      accum = await fn(accum, v, i);
    }).then(() => accum)
  );
