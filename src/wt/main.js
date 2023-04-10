const { Worker } = require("worker_threads");

const performCalculations = async () => {
  const numCores = require("os").cpus().length; // Get the number of logical CPU cores

  // Create an array to hold the promises for each worker
  const promises = [];

  // Create a function to handle messages from worker threads
  const handleMessage = (worker, resolve) => (message) => {
    if (message.status === "resolved") {
      // Resolve the promise with the result from the worker
      resolve({ status: "resolved", data: message.data });
    } else {
      // Reject the promise with an error object
      resolve({ status: "error", data: null });
    }
  };

  // Loop through the number of cores and create a worker for each core
  for (let i = 0; i < numCores; i++) {
    const worker = new Worker("./worker.js", { workerData: i + 10 });

    // Create a promise for each worker
    const promise = new Promise((resolve) => {
      // Listen for the 'message' event on the worker
      worker.on("message", handleMessage(worker, resolve));
    });

    // Push the promise into the array
    promises.push(promise);
  }

  // Wait for all promises to resolve and collect the results
  const results = await Promise.all(promises);

  // Log the results into the console
  console.log(results);
};

performCalculations();
