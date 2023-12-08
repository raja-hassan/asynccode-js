// Simulate fetching data asynchronously with a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "Data from Async/Await";
        resolve(data);
      }, 2000);
    });
  }
  
  // Process the data using async/await syntax
  async function processData() {
    try {
      const data = await fetchData();
      console.log("Processing Async/Await Data:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  // Usage: Invoke processData to handle the asynchronous operation
  processData();
  