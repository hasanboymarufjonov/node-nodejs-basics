import fs from "fs";

const list = async () => {
  fs.readdir("./src/fs/files", (err, files) => {
    const arr = [];
    files.forEach((file) => {
      arr.push(file);
    });
    console.log(arr);
  });

  if (!fs.existsSync("./src/fs/files")) {
    throw Error("FS operation failed");
  }
};

await list();
