import { logWithTime, getAsyncData } from "./functions.mjs";

Array.prototype.forEachAsync = function (fn) {
  return this.reduce(
    (promise, acc) => promise.then(() => fn(acc)),
    Promise.resolve()
  );
};

logWithTime("START -- using .forEachAsync(...) method");
await [1, 2, 3].forEachAsync(async (i) => {
  const result = await getAsyncData(`data #${i}`, 1000 * i);
  logWithTime(result);
});
logWithTime("END");

/*
    ALTERNATIVE VERSION USING FUNCTIONS
*/

const forEachAsync = (arr, fn) =>
  arr.reduce(
    (promise, value) => promise.then(() => fn(value)),
    Promise.resolve()
  );

logWithTime("START -- using forEachAsync(...) function");
await forEachAsync([1, 2, 3], async (i) => {
  const result = await getAsyncData(`data #${i}`, 1000 * i);
  logWithTime(result);
});
logWithTime("END");
