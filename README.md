# ⚡ Digital Planet — Modern Electronics Store

A modern, responsive **e-commerce app** built with **React, TypeScript, Redux Toolkit, and Material UI**.  
It allows users to browse products, add them to a cart, and simulate checkout with form validation.

---

## 🛍️ Features

- 🧭 **Product Listing** — displays a list of electronic items
- 🛒 **Cart Management** — add, remove, and clear products in real time
- 💳 **Checkout Page** — form validation with `react-hook-form` and `zod`
- 💾 **Redux State Management** — central store for cart and products
- ⚙️ **Scalable Architecture** — easily extendable to connect with a backend API
- 🎨 **Material UI Design** — responsive and modern interface

---

## 🧱 Tech Stack

| Category             | Technology             |
| -------------------- | ---------------------- |
| **Frontend**         | React 18, TypeScript   |
| **State Management** | Redux Toolkit          |
| **Styling**          | Material UI (MUI)      |
| **Form Validation**  | react-hook-form + zod  |
| **Routing**          | React Router DOM       |
| **Build Tool**       | Create React App (CRA) |

---

## 📂 Folder Structure

```
digital-planet/
│
├── server               # backend folder (Node.js / Express)
├── src/
│   ├── components/      # Page components (Home, Cart, CartButton, etc.)
│   ├── pages/           # Page components (Checkout)
│   ├── store/           # Redux Toolkit slices
│   ├── styles/          # MUI theme overrides
│   ├── types/           # TypeScript types/interfaces
│   ├── App.tsx          # Main app component
│   └── index.tsx        # Entry point
│
├── package.json
├── tsconfig.json
└── README.md

```

---

## 🚀 How to Run the Project Locally

The project consists of **two parts**:

- **Frontend** (React)
- **Backend** (Express)

You must run both servers.

---

### 🖥️ 1. Run the Backend (Server)

1. Open a terminal and navigate to the backend folder:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Open a terminal and navigate to the backend folder:
   ```bash
   npm run server
   ```
   🟢 The backend will run on http://localhost:5000

### 🖥️ 2. Run the Frontend (React App)

1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd digital-planet
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
