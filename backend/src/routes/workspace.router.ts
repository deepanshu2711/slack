import express from "express";

import { validateToken } from "../middlewares/validateToken";
import {
  createWorkspace,
  getAllWorkspaces,
} from "../controllers/workspace.controller";

export const workspaceRouter = express.Router();

workspaceRouter.get("/", validateToken, getAllWorkspaces);
workspaceRouter.post("/", validateToken, createWorkspace);
