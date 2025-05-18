import { Request, Response } from "express";

import { errorResponse, successResponse } from "../utils/responses";
import { AuthService } from "../services/auth.service";
import { CustomError } from "../utils/customError";
import { generateToken } from "../utils/jwt";

export const SignIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await AuthService.SignIn(email, password);

    const token = generateToken({
      _id: user._id.toString(),
      email: user.email,
    });

    res.cookie("slack_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
      sameSite: "strict",
    });

    successResponse(res, user, "sign In successfully");
  } catch (error) {
    if (error instanceof CustomError) {
      return errorResponse(res, error.status, error.message);
    }
    errorResponse(res, 500, "Something went wrong. Please try again later.");
  }
};

export const SignUp = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await AuthService.SignUp(email, password);

    const token = generateToken({
      _id: user._id.toString(),
      email: user.email,
    });

    res.cookie("slack_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
      sameSite: "strict",
    });

    successResponse(res, user, "Sign up successfully");
  } catch (error) {
    if (error instanceof CustomError) {
      return errorResponse(res, error.status, error.message);
    }
    errorResponse(res, 500, "Something went wrong. Please try again later.");
  }
};
