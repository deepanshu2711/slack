import { NextFunction, Request, Response } from "express";
import { MemberService } from "../services/member.service";
import { ROLES } from "../model/members.model";
import { CustomError } from "../utils/customError";
import { errorResponse, successResponse } from "../utils/responses";

export const addMember = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { userId, workspaceId } = req.body;
  try {
    await MemberService.addMember(userId, workspaceId, ROLES.MEMBER);
    successResponse(res, null, "user added successfully");
  } catch (error) {
    if (error instanceof CustomError) {
      errorResponse(res, error.status, error.message);
    }
    next(error);
  }
};

export const removeMember = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { userId, workspaceId } = req.body;
  try {
    await MemberService.removeMember(userId, workspaceId);
    successResponse(res, null, "user remved successfully");
  } catch (error) {
    if (error instanceof CustomError) {
      errorResponse(res, error.status, error.message);
    }
    next(error);
  }
};
