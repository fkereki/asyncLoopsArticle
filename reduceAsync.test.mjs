import { logWithTime, getReducedData } from "./functions.mjs";
import { reduceAsync } from "./reduceAsync.mjs";

const reduceData = async (acc, v, i, a) => {
  console.log("Calling", acc, v);
  let accum;
  try {
    accum = await acc;
    const result = await getReducedData(acc, v, 1000 * i, v === 2);
    logWithTime("success " + result);
    return result;
  } catch (e) {
    logWithTime("failure");
    return accum;
  }
};

logWithTime("START -- using .reduceAsync(...) method");
const result1 = await [1, 2, 3, 5, 8].reduceAsync(reduceData, 0);
logWithTime(result1);
logWithTime("END");

console.log();

logWithTime("START -- using reduceAsync(...) function");
const result2 = await reduceAsync([1, 2, 3, 5, 8], reduceData, 0);
logWithTime(result2);
logWithTime("END");
