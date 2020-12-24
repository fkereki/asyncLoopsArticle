import { logWithTime, getAsyncData } from "./functions.mjs";

logWithTime("START #1 -- sequential calls");
logWithTime(await getAsyncData("data #1", 1000));
logWithTime(await getAsyncData("data #2", 2000));
logWithTime(await getAsyncData("data #3", 3000));
logWithTime(await getAsyncData("data #5", 5000));
logWithTime(await getAsyncData("data #8", 8000));
logWithTime("END #1");

console.log();

const data = [1, 2, 3, 5, 8];

logWithTime("START #2 -- using a common for(...)");
for (let i = 0; i < data.length; i++) {
  const val = data[i];
  const result = await getAsyncData(`data #${val}`, 1000 * val);
  logWithTime(result);
}
logWithTime("END #2");

console.log();

logWithTime("START #3 -- using forEach(...)");
data.forEach(async (val) => {
  const result = await getAsyncData(`data #${val}`, 1000 * val);
  logWithTime(result);
});
logWithTime("END #3");

logWithTime("START -- using map(...)");
const mapResult = data.map(async (val) => {
  const result = await getAsyncData(`data #${val}`, 1000 * val, val === 2);
  logWithTime(result);
  return result;
});
logWithTime("END");
console.log("Result of map:  ", mapResult);

const awaitedResult = await Promise.allSettled(mapResult);
console.log("After awaiting: ", awaitedResult);

const finalResult = awaitedResult.map((x) => x.value);
console.log("Final: ", finalResult);
