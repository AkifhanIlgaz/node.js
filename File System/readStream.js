const fs = require("fs");

const readStream = fs.createReadStream("./assets/Readme.md", "utf-8");

let fileText = "";

readStream.on("data", (data) => {
  console.log(`I have read ${data.length - 2} characters of text`);
  fileText += data;
});

// readStream.once("data", (data) => {
//   console.log(data);
// });

readStream.on("end", () => {
  console.log("Reading completed");
  console.log(`In total I read ${fileText.length - 2} characters of text`);
});
