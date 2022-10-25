const fs = require("fs");

const text = fs.readFileSync("./assets/Readme.md");

console.log(text);

fs.readFile("./assets/alex.jpg", "utf-8", (error, text) => {
  if (error) {
    throw error;
  }

  console.log(text);
});
