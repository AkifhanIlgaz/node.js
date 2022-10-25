const waitTime = 5000;
const waitInterval = 500;
let currentTime = 0;

const incrementtime = () => {
  currentTime += waitInterval;
  const percentage = Math.floor((currentTime / waitTime) * 100);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`waiting ... ${percentage}%`);
};

console.log(`Setting a ${waitTime / 1000} seconds delay`);

const timerFinished = () => {
  clearInterval(interval);
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  console.log("Done");
};

const interval = setInterval(incrementtime, waitInterval);
setTimeout(timerFinished, waitTime);
