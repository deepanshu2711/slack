import { Request, Response } from "express";

import { CustomError } from "../utils/customError";
import { errorResponse, successResponse } from "../utils/responses";
import { UserService } from "../services/user.service";
import { CustomRequest } from "../types";

export const getCurrentUser = async (req: Request, res: Response) => {
  const userId = (req as CustomRequest).user._id;
  try {
    const user = await UserService.getUser(userId);
    successResponse(res, user, "current user fetched successfully");
  } catch (error) {
    if (error instanceof CustomError) {
      errorResponse(res, error.status, error.message);
    }
    errorResponse(res, 501, "Something went wrong. Please try again later.");
  }
};
