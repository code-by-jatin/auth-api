import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

// 404
app.use((req, res) =>
  res
    .status(404)
    .json({ success: false, error: "NotFound", message: "Route not found" })
);

// Error handler (after routes)
app.use(errorHandler);

export default app;
