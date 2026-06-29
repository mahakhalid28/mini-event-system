import { CreateUserDto } from "./user.types";
import * as userRepository from "./user.repository";

export const createUser = async (
  data: CreateUserDto
) => {

  const existingUser = await userRepository.findUserByEmail(
    data.email
  );

  if (existingUser) {
    throw new Error("Email already exists");
  }
  

  const user = await userRepository.createUser(data);

  return {
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
  };
};