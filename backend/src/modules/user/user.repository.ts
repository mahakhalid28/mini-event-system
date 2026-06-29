import prisma from "../../config/prisma";
import { CreateUserDto } from "./user.types";

export const findUserByEmail = async (email: string) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
};

export const createUser = async (data: CreateUserDto) => {
  return await prisma.user.create({
    data: {
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    },
  });
};