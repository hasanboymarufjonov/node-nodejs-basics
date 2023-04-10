import fs from "fs";
import zlib from "zlib";

const decompress = () => {
  const gzip = fs.createReadStream("./src/zip/files/archive.gz");
  const output = fs.createWriteStream("./src/zip/files/fileToCompress2.txt");

  const decompressStream = zlib.createGunzip();

  gzip.pipe(decompressStream).pipe(output);

  output.on("finish", () => {
    console.log("File decompressed successfully.");
  });
};

decompress();
