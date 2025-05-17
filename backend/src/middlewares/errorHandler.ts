import { NextFunction, Request, Response } from "express";
import { errorResponse } from "../utils/responses";

export const errorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(error);
  errorResponse(res, 500, error);
};
