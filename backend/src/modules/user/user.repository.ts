import prisma from "../../config/prisma";
import { CreateUserDto } from "./user.types";

export const createUser = async (data: CreateUserDto) => {
  return await prisma.user.create({
    data: {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    },
  });
};