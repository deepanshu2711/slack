import express from "express";

import { validateToken } from "../middlewares/validateToken";
import { getAllWorkspaces } from "../controllers/workspace.controller";

export const workspaceRouter = express.Router();

workspaceRouter.get("/", validateToken, getAllWorkspaces);
