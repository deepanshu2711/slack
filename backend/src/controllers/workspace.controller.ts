import { NextFunction, Request, Response } from "express";

import { CustomError } from "../utils/customError";
import { errorResponse, successResponse } from "../utils/responses";
import { WorkspaceService } from "../services/workspace.service";
import { CustomRequest } from "../types";
import { MemberService } from "../services/member.service";
import { generateJoinCode } from "../utils/helpers";
import { WorkspaceSchemaZ } from "../model/zodSchemas";

export const getAllWorkspaces = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const workspace = await WorkspaceService.getAll();
    successResponse(res, workspace, "all workspaces fetched successfuly");
  } catch (error) {
    if (error instanceof CustomError) {
      errorResponse(res, error.status, error.message);
    }
    next(error);
  }
};

export const getUserWorkspaces = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = (req as CustomRequest).user._id;
    const workspace = await WorkspaceService.getAllUserWorkspaces(userId);
    successResponse(res, workspace, "User workspaces fetched successfully");
  } catch (error) {
    if (error instanceof CustomError) {
      errorResponse(res, error.status, error.message);
    }
    next(error);
  }
};

export const createWorkspace = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = (req as CustomRequest).user._id;
    const { name } = req.body;
    const joinCode = generateJoinCode();

    const validationResult = WorkspaceSchemaZ.safeParse({
      name,
      userId,
      joinCode,
    });

    if (!validationResult.success) {
      const errorMessages = validationResult.error.errors
        .map((err) => `${err.path.join(".")}: ${err.message}`)
        .join(", ");

      return errorResponse(res, 400, `Validation failed: ${errorMessages}`);
    }

    const workspace = await WorkspaceService.create({ name, userId, joinCode });
    successResponse(res, workspace, "workspace created successfully");
  } catch (error) {
    if (error instanceof CustomError) {
      errorResponse(res, error.status, error.message);
    }
    next(error);
  }
};

export const getWorkspaceById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userId = (req as CustomRequest).user._id;

    await MemberService.checkMemberExists(userId, req.params.id);
    const workspace = await WorkspaceService.getById(req.params.id);
    successResponse(res, workspace, "workspace detials fetched successfully");
  } catch (error) {
    if (error instanceof CustomError) {
      errorResponse(res, error.status, error.message);
    }
    next(error);
  }
};
