import { logWithTime, getAsyncData } from "./functions.mjs";
import { mapAsync } from "./mapAsync.mjs";

const getMapData = async (v, i, a) => {
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

logWithTime("START -- using .mapAsync(...) method");
const result1 = await [1, 2, 3, 5, 8].mapAsync(getMapData);
logWithTime(`END -- [${result1}]`);

console.log();

logWithTime("START -- using mapAsync(...) function");
const result2 = await mapAsync([1, 2, 3, 5, 8], getMapData);
logWithTime(`END -- [${result2}]`);
