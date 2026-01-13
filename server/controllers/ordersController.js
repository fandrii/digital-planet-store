import Order from "../models/Order.js";
import OrderItem from "../models/OrderItem.js";

export const createOrder = async (req, res) => {
  try {
    const { customer, items } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    // Рахуємо загальну суму
    const totalPrice = items.reduce((sum, item) => sum + item.totalPrice, 0);

    // Створюємо замовлення
    const order = await Order.create({
      name: customer.name,
      email: customer.email,
      address: customer.address,
      totalPrice,
    });

    // Створюємо товари замовлення
    const orderItems = items.map((item) => ({
      orderId: order.id,
      productId: item.id,
      price: item.price,
      quantity: item.quantity,
    }));

    await OrderItem.bulkCreate(orderItems);

    res.json({ message: "Order created", orderId: order.id });
  } catch (error) {
    console.error(error); // Логування помилки на сервері
    res.status(500).json({ message: error.message });
  }
};

// import Order from "../models/Order.js";
// import OrderItem from "../models/OrderItem.js";

// export const createOrder = async (req, res) => {
//   try {
//     const { customer, items } = req.body;

//     // 1. рахуємо загальну суму
//     const totalPrice = items.reduce((sum, item) => sum + item.totalPrice, 0);

//     // 2. створюємо замовлення
//     const order = await Order.create({
//       name: customer.name,
//       email: customer.email,
//       address: customer.address,
//       totalPrice,
//     });

//     // 3. створюємо товари замовлення
//     const orderItems = items.map((item) => ({
//       orderId: order.id,
//       productId: item.id,
//       price: item.price,
//       quantity: item.quantity,
//     }));

//     await OrderItem.bulkCreate(orderItems);

//     res.json({ message: "Order created", orderId: order.id });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
