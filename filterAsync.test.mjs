import { logWithTime, getAsyncData } from "./functions.mjs";
import { filterAsync } from "./filterAsync.mjs";

const getFilterData = async (v, i, a) => {
  console.log("Calling", v, i, a);
  try {
    const result = await getAsyncData(v % 2 === 1, 1000 * i, i === 1);
    logWithTime("success " + result);
    return result;
  } catch (e) {
    logWithTime("failure");
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
