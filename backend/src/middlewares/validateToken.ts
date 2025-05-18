import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

import { CustomRequest } from "../types";
import { errorResponse } from "../utils/responses";

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.cookies.slack_token;
    if (!token) errorResponse(res, 404, "Unauthorized: no token found");

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

    (req as CustomRequest).user = {
      _id: decoded._id,
      email: decoded.email,
    };

    next();
  } catch (error) {
    errorResponse(res, 401, "Unauthorized: invalid token");
  }
};
