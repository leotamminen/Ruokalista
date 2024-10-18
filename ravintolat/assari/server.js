const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/menu", async (req, res) => {
  const date = req.query.date || new Date().toISOString().split("T")[0]; // Default to today if no date provided
  const url = `https://www.unica.fi/api/restaurant/menu/day?date=${date}&language=fi&onlyPublishedMenu=true&restaurantPageId=297238`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

app.listen(PORT, () => {
  console.log(`CORS proxy running on http://localhost:${PORT}`);
});
