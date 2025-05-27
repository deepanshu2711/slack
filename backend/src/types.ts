import { Request } from "express";
import { Model, Types } from "mongoose";
import { ROLES } from "./model/members.model";

export interface IUser extends Document {
  _id: Types.ObjectId;
  email: string;
  password: string;
  comparePassword(userPassword: string): Promise<boolean>;
}

export interface IMember extends Document {
  _id: Types.ObjectId;
  userId: Types.ObjectId;
  workspaceId: Types.ObjectId;
  role: (typeof ROLES)[keyof typeof ROLES];
  isAdmin(): boolean;
}

export interface IMemberModel extends Model<IMember> {
  findByUserAndWorkspace(
    userId: Types.ObjectId,
    workspaceId: Types.ObjectId,
  ): Promise<IMember | null>;

  ROLES: typeof ROLES;
}

export type RoleType = (typeof ROLES)[keyof typeof ROLES];

export interface CustomRequest extends Request {
  cookies: { [key: string]: string };
  user: { _id: string; email: string };
}
