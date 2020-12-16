import { logWithTime, getAsyncData } from "./functions.mjs";

logWithTime("START #1 -- sequential calls");
logWithTime(await getAsyncData("data #1", 1000));
logWithTime(await getAsyncData("data #2", 2000));
logWithTime(await getAsyncData("data #3", 3000));
logWithTime("END #1");

console.log();

logWithTime("START #2 -- using a common for(...)");
for (let i = 1; i <= 3; i++) {
  const result = await getAsyncData(`data #${i}`, 1000 * i);
  logWithTime(result);
}
logWithTime("END #2");

console.log();

logWithTime("START #3 -- using forEach(...)");
[1, 2, 3].forEach(async (i) => {
  const result = await getAsyncData(`data #${i}`, 1000 * i);
  logWithTime(result);
});
logWithTime("END #3");
