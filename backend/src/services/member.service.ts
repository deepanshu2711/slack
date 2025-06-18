import { Types } from 'mongoose';
import { Member } from '../model/members.model';
import { RoleType } from '../types';
import { CustomError } from '../utils/customError';

export const MemberService = {
  addMember: async (userId: string, workspaceId: string, role: RoleType) => {
    const member = await Member.create({ userId, workspaceId, role });
    return member;
  },

  removeMember: async (userId: string, workspaceId: string) => {
    await Member.findOneAndDelete({ userId, workspaceId });
    return;
  },

  checkMemberExists: async (userId: string, workspaceId: string) => {
    const member = await Member.findByUserAndWorkspace(
      new Types.ObjectId(userId),
      new Types.ObjectId(workspaceId)
    );
    if (!member) throw new CustomError(404, 'You are not a member of this workspace');
    return member;
  },
};
