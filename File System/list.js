const fs = require("fs");

console.log("Starting reading files");
const files = fs.readdirSync("./assets"); // Asynchoronous
console.log("Completed");

console.log(files);

console.log("Starting reading files");
fs.readdir("./assets", (err, files) => {
  if (err) {
    throw err;
  }
  console.log("Completed");
  console.log(files);
});
