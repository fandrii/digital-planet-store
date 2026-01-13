import express from "express";
import cors from "cors";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";
import orderRoutes from "./routes/orders.js";

import Order from "./models/Order.js";
import OrderItem from "./models/OrderItem.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Підключення маршрутів
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

// Встановлюємо асоціації
Order.hasMany(OrderItem, { foreignKey: "orderId", onDelete: "CASCADE" });
OrderItem.belongsTo(Order, { foreignKey: "orderId" });

// Підключення до БД та синхронізація таблиць
try {
  await db.authenticate();
  console.log("Database connected...");

  await db.sync({ alter: true }); // оновлює таблиці, додає поля
  console.log("Tables synchronized");
} catch (error) {
  console.error("Connection error:", error);
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// import db from "./config/database.js";
// import productRoutes from "./routes/index.js";
// import ordersRoutes from "./routes/orders.js";

// import express from "express";
// import cors from "cors";
// // const fs = require("fs");
// // const path = require("path");

// const app = express();
// const PORT = 5000;

// try {
//   await db.authenticate();
//   console.log("Database connected...");
// } catch (error) {
//   console.error("Connection error:", error);
// }

// app.use(cors());
// app.use(express.json());
// app.use("/products", productRoutes);
// app.use("/orders", ordersRoutes);

// ----------------------------------------------------------------------

// const productsFilePath = path.join(__dirname, "data", "products.json");

// app.get("/api/products", (req, res) => {
//   fs.readFile(productsFilePath, "utf-8", (err, data) => {
//     if (err) {
//       return res.status(500).json({ message: "Cannot read products file" });
//     }
//     const products = JSON.parse(data);
//     res.json(products);
//   });
// });

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
