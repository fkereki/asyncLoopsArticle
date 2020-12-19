export const getAsyncData = (dataToReturn, timeToWait, fail = false) =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => (fail ? reject("FAILED") : resolve(dataToReturn)),
      timeToWait
    )
  );

export const logWithTime = (value) => console.log(new Date(), value);
