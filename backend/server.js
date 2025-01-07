const express = require("express");
const cors = require("cors");
const data = require("./data.json");

const app = express();
const PORT = 5000;

app.use(cors());

app.get("/api/companies", (req, res) => {
    try {
        res.json(data.items);
      } catch (error) {
        console.error("Error reading or parsing JSON:", error);
        res.status(500).json({ error: 'Failed to fetch data' });
      }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
