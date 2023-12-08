// Simulate fetching data asynchronously with a Promise
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "Data from Promises";
        resolve(data);
      }, 2000);
    });
  }
  
  // Usage: Handle the resolved and rejected states of the Promise
  fetchData()
    .then((data) => {
      console.log("Processing Promises Data:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  