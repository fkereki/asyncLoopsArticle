import { logWithTime, getAsyncData } from "./functions.mjs";
import { mapAsync } from "./mapAsync.mjs";

const getMapData = async (v, i, a) => {
  console.log("Calling", v, i, a);
  try {
    const result = await getAsyncData(`data #${v}`, 1000 * i, v === 2);
    logWithTime("success " + result);
    return result;
  } catch (e) {
    logWithTime("failure");
    return undefined;
  }
};

logWithTime("START -- using .mapAsync(...) method");
const result1 = await [1, 2, 3, 5, 8].mapAsync(getMapData);
logWithTime(result1);
logWithTime("END");

console.log();

logWithTime("START -- using mapAsync(...) function");
const result2 = await mapAsync([1, 2, 3, 5, 8], getMapData);
logWithTime(result2);
logWithTime("END");
