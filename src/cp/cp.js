import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
  // Create child process
  const childProcess = spawn("node", ["./src/cp/files/script.js", ...args]);

  // Set up IPC channel between master process and child process
  process.stdin.pipe(childProcess.stdin); // Pipe stdin of master process to stdin of child process
  childProcess.stdout.pipe(process.stdout); // Pipe stdout of child process to stdout of master process

  // Listen for 'exit' event on the child process
  childProcess.on("exit", (code) => {
    console.log(`Child process exited with code ${code}`);
  });

  // Listen for 'error' event on the child process
  childProcess.on("error", (err) => {
    console.error(`Error in child process: ${err}`);
  });
};

// Call the function with arguments to test the functionality
spawnChildProcess(["arg1", "arg2", "arg3"]);

export default spawnChildProcess;
