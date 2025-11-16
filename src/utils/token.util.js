import jwt from "jsonwebtoken";
import { ENV } from "../config/env.config.js";

const JWT_SECRET = ENV.JWT_SECRET;
const JWT_EXPIRES = ENV.JWT_EXPIRES;

export const generateToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES });
};
