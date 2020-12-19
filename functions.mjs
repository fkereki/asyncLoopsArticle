export const getAsyncData = (dataToReturn, timeToWait, fail = false) =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => (fail ? reject("FAILED") : resolve(dataToReturn)),
      timeToWait
    )
  );

export const getReducedData = (value1, value2, timeToWait, fail = false) =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => (fail ? reject("FAILED") : resolve(value1 + value2)),
      timeToWait
    )
  );

export const logWithTime = (value) => console.log(new Date(), value);
