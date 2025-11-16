import { User } from "../models/user.model.js";
import { AppError } from "../utils/error.util.js";
import { hashPassword, matchPassword } from "../utils/password.util.js";
import { generateToken } from "../utils/token.util.js";



export const registerUser = async (payload) => {
  const { name, email, password } = payload;

  // Basic checks
  const existing = await User.findOne({ email });
  if (existing) throw new AppError("Email already registered", 409, "ConflictError");

  const hashed = await hashPassword(password);

  const user = await User.create({
    name,
    email,
    password: hashed,
  });

  // Remove sensitive data from returned object
  const userSafe = {
    id: user._id,
    name: user.name,
    email: user.email,
    createdAt: user.createdAt,
  };

  const token = generateToken({ id: user._id, email: user.email });

  return { user: userSafe, token };
};


export const loginUser = async (payload) => {
  const { email, password } = payload;

  const user = await User.findOne({ email });
  if (!user) throw new AppError("Invalid credentials", 401, "AuthError");

  const isValid = await matchPassword(password, user.password);
  if (!isValid) throw new AppError("Invalid credentials", 401, "AuthError");

  const userSafe = {
    id: user._id,
    name: user.name,
    email: user.email,
  };

  const token = generateToken({ id: user._id, email: user.email });

  return { user: userSafe, token };
};
