import { logWithTime, getAsyncData } from "./functions.mjs";
import { findIndexAsync } from "./findIndexAsync.mjs";

const getFilterData = async (v, i, a) => {
  logWithTime(`Calling - v=${v} i=${i} a=[${a}]`);
  try {
    const result = await getAsyncData(v * v === 9, 1000 * v, v === 2);
    logWithTime(`Success - ${result}`);
    return result;
  } catch (e) {
    logWithTime(`Failure - error`);
    return false;
  }
};

logWithTime("START -- using .findIndexAsync(...) method");
const result1 = await [1, 2, 3, 5, 8].findIndexAsync(getFilterData);
logWithTime(`END -- ${result1}`);

console.log();

logWithTime("START -- using findIndexAsync(...) function");
const result2 = await findIndexAsync([1, 2, 3, 5, 8], getFilterData);
logWithTime(`END -- ${result2}`);
