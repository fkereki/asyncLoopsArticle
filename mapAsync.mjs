import { logWithTime, getAsyncData } from "./functions.mjs";

Array.prototype.mapAsync = function (fn) {
  return Promise.all(this.map(fn));
};

logWithTime("START -- using .mapAsync(...) method");
const result1 = await [1, 2, 3].mapAsync(async (i) => {
  const result = await getAsyncData(`data #${i}`, 1000 * i);
  logWithTime(result);
  return result;
});
logWithTime(result1);
logWithTime("END");

/*
    ALTERNATIVE VERSION USING FUNCTIONS
*/

const mapAsync = (arr, fn) => Promise.all(arr.map(fn));

logWithTime("START -- using mapAsync(...) function");
const result2 = await mapAsync([1, 2, 3], async (i) => {
  const result = await getAsyncData(`data #${i}`, 1000 * i);
  logWithTime(result);
  return result;
});
logWithTime(result2);
logWithTime("END");
