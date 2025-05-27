import express from "express";
import { addMember, removeMember } from "../controllers/member.controller";
import { validateToken } from "../middlewares/validateToken";
import { isAdminMiddleware } from "../middlewares/isAdmin.middleware";

export const memberRouter = express.Router();

memberRouter.post("/", validateToken, isAdminMiddleware, addMember);
memberRouter.delete("/", validateToken, isAdminMiddleware, removeMember);
