import bcrypt from "bcrypt";
import { ENV } from "../config/env.config.js";

const SALT_ROUNDS = ENV.SALT_ROUNDS

export const hashPassword = async (plain) => {
  if (!plain) throw new Error("Password missing for hashing");
  return bcrypt.hash(plain, SALT_ROUNDS);
};

export const matchPassword = async (plain, hash) => {
  if (!plain || !hash) return false;
  return bcrypt.compare(plain, hash);
};
