const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const productsFilePath = path.join(__dirname, "data", "products.json");

app.get("/api/products", (req, res) => {
  fs.readFile(productsFilePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Cannot read products file" });
    }
    const products = JSON.parse(data);
    res.json(products);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
