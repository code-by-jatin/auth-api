import app from "./app.js";
import { connectDB } from "./config/db.js";
import { ENV } from "./config/env.config.js";

const startServer = async () => {
  try {
    await connectDB(); // Wait for DB connection before starting server

    const PORT = ENV.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error("❌ Failed to start server:", err.message);
    process.exit(1); // Exit if DB fails
  }
};

startServer();
