import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

const calculateHash = async () => {
  const filePath = "./src/hash/files/fileToCalculateHashFor.txt";
  const fileContent = readFileSync(filePath);
  const hex = createHash("sha256").update(fileContent).digest("hex");
  console.log(hex);
};

await calculateHash();
