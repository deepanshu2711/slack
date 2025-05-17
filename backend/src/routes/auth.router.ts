import express from "express";
import { SignIn } from "../controllers/auth.controller";

export const authRouter = express.Router();

authRouter.post("/login", SignIn);
