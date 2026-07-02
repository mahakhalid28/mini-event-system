import { Request, Response } from "express";

import * as authService from "./auth.service";

import { asyncHandler } from "../../common/helpers/asyncHandler";
import { sendResponse } from "../../common/utils/apiResponse";

export const login = asyncHandler(
  async (req: Request, res: Response) => {

    const { email, password } = req.body;

    const result = await authService.login(
      email,
      password
    );

    sendResponse(
      res,
      200,
      "Login successful",
      result
    );
  }
);