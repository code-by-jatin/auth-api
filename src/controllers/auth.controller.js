import * as AuthService from "../services/auth.service.js";
import { success, fail } from "../utils/response.util.js";

export const registerUser = async (req, res, next) => {
  try {
    const result = await AuthService.registerUser(req.body);
    return success(res, { data: result }, 201);
  } catch (err) {
    return next(err);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const result = await AuthService.loginUser(req.body);
    return success(res, { data: result }, 200);
  } catch (err) {
    return next(err);
  }
};
