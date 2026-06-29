import { CreateUserDto } from "./user.types";

export const createUser = async (
  data: CreateUserDto
) => {

  console.log("Business Logic Started");

  console.log(data);

  return {
    id: "temporary-id",
    fullName: data.fullName,
    email: data.email,
  };

};