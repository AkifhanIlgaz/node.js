const fs = require("fs");

// Rename
if (fs.existsSync("./assets/colors.json")) {
  fs.renameSync("./assets/colors.json", "./assets/colorData.json");
}

// Move
if (fs.existsSync("./assets/notes.md")) {
  fs.rename("./assets/notes.md", "./storage-files/notes.md", (err) => {
    if (err) throw err;

    console.log("Name changed");
  });
}

// Wait 4 seconds and delete file
setTimeout(() => {
  fs.unlinkSync("./assets/alex.jpg");
}, 4000);
