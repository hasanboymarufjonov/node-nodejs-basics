import fs from "fs";

const read = async () => {
  const fileToRead = "./src/fs/files/fileToRead.txt";

  fs.readFile(fileToRead, "utf-8", (err, content) => {
    if (err) {
      throw Error("FS operation failed");
    } else {
      console.log(content);
    }
  });
};

await read();
