import { logWithTime, getAsyncData } from "./functions.mjs";
import { someAsync } from "./someAsync.mjs";

const getFilterData = async (v, i, a) => {
  logWithTime(`Calling - v=${v} i=${i} a=[${a}]`);
  try {
    const result = await getAsyncData(v > 4, 1000 * v, v === 2);
    logWithTime(`Success - ${result}`);
    return result;
  } catch (e) {
    logWithTime(`Failure - error`);
    return false;
  }
};

logWithTime("START -- using .someAsync(...) method");
const result1 = await [1, 2, 3, 5, 8].someAsync(getFilterData);
logWithTime(`END -- ${result1}`);

console.log();

logWithTime("START -- using someAsync(...) function");
const result2 = await someAsync([1, 2, 3, 5, 8], getFilterData);
logWithTime(`END -- ${result2}`);
