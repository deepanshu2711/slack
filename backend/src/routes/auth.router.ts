import express from "express";
import { SignIn, SignUp } from "../controllers/auth.controller";

export const authRouter = express.Router();

authRouter.post("/signup", SignUp);
authRouter.post("/login", SignIn);
