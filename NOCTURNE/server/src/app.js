import express from "express";
import cors from "cors";

import uploadRoutes from "./routes/uploadRoutes.js";

import productRoutes from "./routes/productRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Nocturne API Running");
});

app.use("/api/products", productRoutes);
app.use("/api/upload", uploadRoutes);

export default app;