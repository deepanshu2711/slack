import { Response } from "express";

export const successResponse = (
  res: Response,
  data: any,
  message: string = "Success",
) => {
  res.status(200).json({ success: true, data, message });
  return;
};

export const errorResponse = (res: Response, status: number, error: string) => {
  res.status(status).json({ success: false, error });
  return;
};
