import { logWithTime, getAsyncData } from "./functions.mjs";
import { filterAsync } from "./filterAsync.mjs";

const getFilterData = async (v, i, a) => {
  logWithTime(`Calling - v=${v} i=${i} a=[${a}]`);
  try {
    const result = await getAsyncData(
      v % 2 === 1,
      1000 * v,
      v === 2 || v === 3
    );
    logWithTime(`Success - ${result}`);
    return result;
  } catch (e) {
    logWithTime(`Failure - error`);
    return undefined;
  }
};

logWithTime("START -- using .filterAsync(...) method");
const result1 = await [1, 2, 3, 5, 8].filterAsync(getFilterData);
logWithTime(`END -- [${result1}]`);

console.log();

logWithTime("START -- using filterAsync(...) function");
const result2 = await filterAsync([1, 2, 3, 5, 8], getFilterData);
logWithTime(`END --[${result2}]`);
