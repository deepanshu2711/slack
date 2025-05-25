import express from "express";

import { validateToken } from "../middlewares/validateToken";
import {
  createWorkspace,
  getAllWorkspaces,
  getWorkspaceById,
} from "../controllers/workspace.controller";

export const workspaceRouter = express.Router();

workspaceRouter.get("/", validateToken, getAllWorkspaces);
workspaceRouter.get("/:id", validateToken, getWorkspaceById);

workspaceRouter.post("/", validateToken, createWorkspace);
