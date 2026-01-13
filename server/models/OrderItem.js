import { DataTypes } from "sequelize";
import db from "../config/database.js";

const OrderItem = db.define("order_items", {
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default OrderItem;

// import { DataTypes } from "sequelize";
// import db from "../config/database.js";

// const OrderItem = db.define("order_items", {
//   productId: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
//   price: {
//     type: DataTypes.DECIMAL(10, 2),
//     allowNull: false,
//   },
//   quantity: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//   },
// });

// export default OrderItem;
