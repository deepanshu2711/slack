import express from "express";

import { addMember, getCurrentMember, removeMember } from "../controllers/member.controller";
import { validateToken } from "../middlewares/validateToken";
import { isAdminMiddleware } from "../middlewares/isAdmin.middleware";

export const memberRouter = express.Router();


memberRouter.get("/:workspaceId", validateToken, getCurrentMember);
memberRouter.post("/", validateToken, isAdminMiddleware, addMember);
memberRouter.delete("/", validateToken, isAdminMiddleware, removeMember);
