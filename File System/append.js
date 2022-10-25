// You don't need to use "fs" module to read a JSON file
// You can access it by "require"
const colorData = require("./assets/colors.json");

const fs = require("fs");

colorData.colorList.forEach((color) => {
  const data = `${color.color}: ${color.hex} \n`;
  fs.appendFile("./storage-files/colors.md", data, (err) => {
    if (err) {
      throw err;
    }
  });
});
