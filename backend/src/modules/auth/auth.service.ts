import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import * as authRepository from "./auth.repository";
import { AppError } from "../../errors/AppError";
import { env } from "../../config/env";

export const login = async (
  email: string,
  password: string
) => {
  // Find user
  const user = await authRepository.findUserByEmail(email);

  if (!user) {
    throw new AppError(401, "Invalid email or password");
  }

  // Compare password
  const isPasswordValid = await bcrypt.compare(
    password,
    user.password
  );

  if (!isPasswordValid) {
    throw new AppError(401, "Invalid email or password");
  }

  // Generate JWT
  const accessToken = jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    env.JWT_SECRET,
    {
      expiresIn: env.JWT_EXPIRES_IN,
    }
  );

  return {
    accessToken,
    user: {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    },
  };
};