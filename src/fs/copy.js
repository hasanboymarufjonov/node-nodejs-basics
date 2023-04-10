import fs from "fs";
import path from "path";

const copy = async (src, dest) => {
  const srcExists = fs.existsSync(src);
  const destExists = fs.existsSync(dest);

  if (!srcExists) {
    throw new Error("FS operation failed");
  }

  if (destExists) {
    throw new Error("FS operation failed");
  }

  fs.mkdirSync(dest);

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copy(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }

  console.log(`Directory "${src}" copied to "${dest}" successfully.`);
};

await copy("./src/fs/files", "./src/fs/files_copy");
