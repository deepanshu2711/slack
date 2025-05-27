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

export const getUserWorkspaces = async (
  req: Request,
  res: Response,
  next: NextFunction,
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

export const getWorkspaceById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const workspace = await WorkspaceService.getById(req.params.id);
    successResponse(res, workspace, "workspace detials fetched successfully");
  } catch (error) {
    if (error instanceof CustomError) {
      errorResponse(res, error.status, error.message);
    }
    next(error);
  }
};
