import dotenv from "dotenv";

// Load .env file
dotenv.config();


// Export all env vars from one place
export const ENV = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRES: process.env.JWT_EXPIRES || "7d",
  SALT_ROUNDS: Number(process.env.SALT_ROUNDS) || 10,
};
