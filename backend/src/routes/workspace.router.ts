import express from "express";

import { validateToken } from "../middlewares/validateToken";
import {
  createWorkspace,
  getAllWorkspaces,
  getUserWorkspaces,
  getWorkspaceById,
} from "../controllers/workspace.controller";

export const workspaceRouter = express.Router();

workspaceRouter.get("/", validateToken, getAllWorkspaces);
workspaceRouter.get("/user", validateToken, getUserWorkspaces);

workspaceRouter.get("/:id", validateToken, getWorkspaceById);
workspaceRouter.post("/", validateToken, createWorkspace);
