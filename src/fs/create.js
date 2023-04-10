import fs, { existsSync } from "fs";

const create = async () => {
  if (!fs.existsSync("./src/fs/files/fresh.txt")) {
    fs.writeFile("./src/fs/files/fresh.txt", "I am fresh and young", (err) => {
      if (err) throw err;
    });
  } else {
    throw Error("FS operation failed");
  }
};

await create();
