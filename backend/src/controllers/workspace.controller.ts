import { NextFunction, Request, Response } from "express";

import { CustomError } from "../utils/customError";
import { errorResponse, successResponse } from "../utils/responses";
import { WorkspaceService } from "../services/workspace.service";
import { CustomRequest } from "../types";

export const getAllWorkspaces = async (
  req: Request,
  res: Response,
  next: NextFunction,
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

export const createWorkspace = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = (req as CustomRequest).user._id;
    const { name, joinCode } = req.body;

    const workspace = await WorkspaceService.create({ name, userId, joinCode });
    successResponse(res, workspace, "workspace created successfully");
  } catch (error) {
    if (error instanceof CustomError) {
      errorResponse(res, error.status, error.message);
    }
    next(error);
  }
};
