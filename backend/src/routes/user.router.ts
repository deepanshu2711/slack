import express from 'express';
import { getCurrentUser } from '../controllers/user.controller';
import { validateToken } from '../middlewares/validateToken';

export const userRouter = express.Router();

userRouter.get('/', validateToken, getCurrentUser);
