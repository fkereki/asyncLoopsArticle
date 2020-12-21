import { logWithTime, getAsyncData } from "./functions.mjs";
import { forEachAsync } from "./forEachAsync.mjs";

const getForEachData = async (v, i, a) => {
  logWithTime(`Calling - v=${v} i=${i} a=[${a}]`);
  try {
    const result = await getAsyncData(`data #${v}`, 1000 * v, v === 2);
    logWithTime(`Success - ${result}`);
    return result;
  } catch (e) {
    logWithTime(`Failure - error`);
    return undefined;
  }
};

logWithTime("START -- using .forEachAsync(...) method");
await [1, 2, 3, 5, 8].forEachAsync(getForEachData);
logWithTime("END");

console.log();

logWithTime("START -- using forEachAsync(...) function");
await forEachAsync([1, 2, 3, 5, 8], getForEachData);
logWithTime("END");
