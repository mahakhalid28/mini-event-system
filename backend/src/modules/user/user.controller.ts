import { Request, Response } from "express";
import * as userService from "./user.service";
import { sendResponse } from "../../common/utils/apiResponse";
import { asyncHandler } from "../../common/helpers/asyncHandler";

export const createUser = asyncHandler(
  async (req: Request, res: Response) => {

    const result = await userService.createUser(req.body);

    sendResponse(
      res,
      201,
      "User created successfully",
      result
    );
  }
);