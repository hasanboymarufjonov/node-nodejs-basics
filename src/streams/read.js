import fs from "fs";

const read = async () => {
  const readableStream = new fs.ReadStream(
    "./src/streams/files/fileToRead.txt",
    "utf8"
  );

  readableStream.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  readableStream.on("error", (err) => {
    console.error(err);
  });
};

await read();
