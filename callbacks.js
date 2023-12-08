// Simulate fetching data asynchronously with a callback function
function fetchData(callback) {
    setTimeout(() => {
      const data = "Data from Callbacks";
      callback(data);
    }, 2000);
  }
  
  // Process the data received from the callback
  function processCallbackData(data) {
    console.log("Processing Callback Data:", data);
  }
  
  // Usage: Invoke fetchData with processCallbackData as the callback
  fetchData(processCallbackData);
  