const express = require("express");
const path = require("path");

const app = express();
const port = 5000;

// Serve static assets
app.use(express.static(path.join(__dirname, "../build")));

// Serve the React application
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

// Error handling for 404 (Not Found) status code
app.use((req, res, next) => {
  res.status(404).send("404 - Not Found");
});

// Error handling for 500 (Internal Server Error) status code
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("500 - Internal Server Error");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
