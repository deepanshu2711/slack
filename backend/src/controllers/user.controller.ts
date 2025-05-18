import { Response } from "express";

import { CustomError } from "../utils/customError";
import { errorResponse } from "../utils/responses";
import { UserService } from "../services/user.service";
import { CustomRequest } from "../types";

export const getUser = async (req: CustomRequest, res: Response) => {
  const userId = req.user._id;
  try {
    const user = await UserService.getUser(userId);
    return user;
  } catch (error) {
    if (error instanceof CustomError) {
      return errorResponse(res, error.status, error.message);
    }
    errorResponse(res, 500, "Something went wrong. Please try again later.");
  }
};
