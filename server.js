const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

// Enable CORS for all requests
app.use(cors());

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Proxy endpoint
app.get("/proxy", async (req, res) => {
  const url = req.query.url;
  try {
    const fetch = (await import("node-fetch")).default; // Dynamic import
    const response = await fetch(url);
    const data = await response.text(); // Get raw text response
    res.json({ contents: data }); // Send back the response
  } catch (error) {
    console.error("Error fetching the URL:", error);
    res.status(500).send("Error fetching the URL");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
