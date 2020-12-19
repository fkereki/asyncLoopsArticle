import { mapAsync } from "./mapAsync.mjs";

/*
  PROTOTYPE VERSION
  Calls go out in parallel
  Failure is ignored -- is processed as "false"
*/

Array.prototype.filterAsync = function (fn) {
  return this.mapAsync(fn).then((arr2) => this.filter((v, i) => !!arr2[i]));
};

/*
    ALTERNATIVE VERSION USING FUNCTIONS
*/

export const filterAsync = (arr, fn) =>
  mapAsync(arr, fn).then((arr2) => arr.filter((v, i) => !!arr2[i]));
