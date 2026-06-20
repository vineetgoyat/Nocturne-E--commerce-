import express from "express";
import cors from "cors";

import uploadRoutes from "./routes/uploadRoutes.js";

import productRoutes from "./routes/productRoutes.js";

import authRoutes from "./routes/authRoutes.js";

import orderRoutes from "./routes/orderRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Nocturne API Running");
});

app.use("/api/products", productRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

export default app;