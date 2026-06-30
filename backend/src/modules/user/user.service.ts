import bcrypt from "bcrypt";
import { CreateUserDto } from "./user.types";
import * as userRepository from "./user.repository";
import { AppError } from "../../errors/AppError";
const SALT_ROUNDS = 10;
export const createUser = async (
  data: CreateUserDto
) => {

  const existingUser = await userRepository.findUserByEmail(
    data.email
  );

  if (existingUser) {
    throw new AppError(
    409,
    "Email already exists"
);
  }

  
  const hashedPassword = await bcrypt.hash(
    data.password,
    SALT_ROUNDS
  );
  console.log("Original Password:", data.password);
console.log("Hashed Password:", hashedPassword);



  

 const user = await userRepository.createUser({
  ...data,
  password: hashedPassword,
});

  return {
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
  };
};