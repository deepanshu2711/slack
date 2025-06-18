import { NextFunction, Request, Response } from 'express';
import { CustomRequest } from '../types';
import { Member } from '../model/members.model';
import { Types } from 'mongoose';
import { errorResponse } from '../utils/responses';

export const isAdminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { workspaceId } = req.body;
    const currentUserId = (req as CustomRequest).user._id;

    const member = await Member.findByUserAndWorkspace(
      new Types.ObjectId(currentUserId),
      workspaceId
    );

    const isAdmin = member?.isAdmin();
    if (isAdmin) next();
  } catch (error) {
    errorResponse(res, 401, 'Unauthorized: only admin can perform this action');
  }
};
