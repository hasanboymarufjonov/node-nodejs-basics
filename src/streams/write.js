import fs from "fs";

const write = async () => {
  const writableStream = fs.createWriteStream(
    "./src/streams/files/fileToWrite.txt"
  );
  writableStream.write("data", () => {
    console.log("File created!");
  });
};

await write();
