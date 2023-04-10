import { Transform, pipeline } from "stream";

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const reversed =
        chunk.toString().trim().split("").reverse().join("") + "\n";
      callback(null, reversed);
    },
  });

  pipeline(process.stdin, transformStream, process.stdout, (err) => {
    if (err) {
      console.error("Pipeline error:", err);
    } else {
      console.log("Pipeline finished");
    }
  });
};

await transform();
