import { Request, Response } from "express";

import { CustomError } from "../utils/customError";
import { errorResponse, successResponse } from "../utils/responses";
import { WorkspaceService } from "../services/workspace.service";

export const getAllWorkspaces = async (req: Request, res: Response) => {
  try {
    const workspace = await WorkspaceService.getAll();
    successResponse(res, workspace, "all workspaces fetched successfuly");
  } catch (error) {
    if (error instanceof CustomError) {
      errorResponse(res, error.status, error.message);
    }
    errorResponse(res, 500, "something went wrong please try again later");
  }
};
