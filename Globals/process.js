const grab = (flag) => {
  const indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
};

const user = grab("--user");
const message = grab("--message");

console.log(`${message} from ${user}.`);
