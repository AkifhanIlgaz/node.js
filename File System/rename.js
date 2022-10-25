const fs = require("fs");

fs.renameSync("./assets/colors.json", "./assets/colorData.json");

fs.rename("./assets/notes.md", "./storage-files/noted.md", (err) => {
  if (err) throw err;

  console.log("Name changed");
});
