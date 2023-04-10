import fs, { unlink } from "fs";

const remove = async () => {
  const fileToDelete = "./src/fs/files/fileToRemove.txt";
  if (!fs.existsSync(fileToDelete)) {
    throw Error("FS operation failed");
  } else {
    fs.unlink(fileToDelete, (err) => {
      if (err) throw err;
      console.log(`${fileToDelete} was deleted`);
    });
  }
};

await remove();
