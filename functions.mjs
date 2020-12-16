export const getAsyncData = (dataToReturn, timeToWait) =>
  new Promise((resolve) => setTimeout(() => resolve(dataToReturn), timeToWait));

export const logWithTime = (value) => console.log(new Date(), value);
