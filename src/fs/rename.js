import fs from "fs";

const rename = async (old) => {
  if (
    !fs.existsSync(old) ||
    fs.existsSync("./src/fs/files/properFilename.md")
  ) {
    throw Error("FS operation failed");
  } else {
    fs.rename(old, "./src/fs/files/properFilename.md", (err) => {
      if (err) console.log(err);
    });
  }
};

await rename("./src/fs/files/wrongFilename.txt");
