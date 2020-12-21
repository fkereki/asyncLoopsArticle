import { logWithTime, getReducedData } from "./functions.mjs";
import { reduceAsync } from "./reduceAsync.mjs";

const reduceData = async (acc, v, i, a) => {
  logWithTime(`Calling - v=${v} i=${i} a=[${a}]`);
  try {
    const result = await getReducedData(acc, v, 1000 * v, v === 2);
    logWithTime(`Success - ${result}`);
    return result;
  } catch (e) {
    logWithTime(`Failure - error`);
    return acc;
  }
};

logWithTime("START -- using .reduceAsync(...) method");
const result1 = await [1, 2, 3, 5, 8].reduceAsync(reduceData, 0);
logWithTime(`END -- ${result1}`);

console.log();

logWithTime("START -- using reduceAsync(...) function");
const result2 = await reduceAsync([1, 2, 3, 5, 8], reduceData, 0);
logWithTime(`END -- ${result2}`);
