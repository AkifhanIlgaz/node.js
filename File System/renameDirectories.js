const fs = require("fs");

if (fs.existsSync("./storage-files")) {
  fs.renameSync("./storage-files", "./storage");
}

fs.rmdir("./newFolder", (err) => {
  if (err) throw err;
  console.log("./newFolder directory removed");
});

// Emptying the storage directory
fs.readdirSync("./storage").forEach((fileName) => {
  fs.unlinkSync(`./storage/${fileName}`);
});

// Only if the directory IS NOT EMPTY
// We need to empty the directory before removing it
fs.rmdir("./storage", (err) => {
  if (err) throw err;

  console.log("Storage directory removed");
});
