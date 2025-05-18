import { Request } from "express";
import { Types } from "mongoose";

export interface IUser extends Document {
  _id: Types.ObjectId;
  email: string;
  password: string;
  comparePassword(userPassword: string): Promise<boolean>;
}

export interface CustomRequest extends Request {
  cookies: { [key: string]: string };
  user: { _id: string; email: string };
}
