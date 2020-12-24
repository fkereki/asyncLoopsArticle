import { logWithTime, getAsyncData } from "./functions.mjs";
import { everyAsync } from "./everyAsync.mjs";

const getFilterData = async (v, i, a) => {
  logWithTime(`Calling - v=${v} i=${i} a=[${a}]`);
  try {
    const result = await getAsyncData(v > 0, 1000 * v, v === 2);
    logWithTime(`Success - ${result}`);
    return result;
  } catch (e) {
    logWithTime(`Failure - error`);
    return false;
  }
};

logWithTime("START -- using .everyAsync(...) method");
const result1 = await [1, 2, 3, 5, 8].everyAsync(getFilterData);
logWithTime(`END -- ${result1}`);

console.log();

logWithTime("START -- using everyAsync(...) function");
const result2 = await everyAsync([1, 2, 3, 5, 8], getFilterData);
logWithTime(`END -- ${result2}`);
