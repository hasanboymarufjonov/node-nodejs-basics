import fs from "fs";
import zlib from "zlib";

const compress = () => {
  const readStream = fs.createReadStream("./src/zip/files/fileToCompress.txt");
  const writeStream = fs.createWriteStream("./src/zip/files/archive.gz");
  const gzipStream = zlib.createGzip();

  readStream.pipe(gzipStream).pipe(writeStream);

  writeStream.on("close", () => {
    console.log("File compressed successfully!");
  });
};

compress();
