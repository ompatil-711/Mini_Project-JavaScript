// 1. Create a function that returns a Promise
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    console.log("⏳ Fetching data...");

    // Simulate a 1-second network delay
    setTimeout(() => {
      const dbConnected = true; // Change to false to test the error path

      if (dbConnected) {
        // Successful Scenario
        resolve({ id: userId, name: "John Doe", role: "Admin" });
      } else {
        // Failure Scenario
        reject("❌ Error: Could not connect to database.");
      }
    }, 1000);
  });
}

// 2. Consume the Promise
fetchUserData(42)
  .then((data) => {
    console.log("✅ Success:", data); // Runs if resolved
  })
  .catch((error) => {
    console.log(error); // Runs if rejected
  })
  .finally(() => {
    console.log("--- Request finished ---"); // Runs regardless of outcome
  });