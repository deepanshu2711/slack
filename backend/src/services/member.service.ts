import { Member } from "../model/members.model";
import { RoleType } from "../types";

export const MemberService = {
  addMember: async (userId: string, workspaceId: string, role: RoleType) => {
    const member = await Member.create({ userId, workspaceId, role });
    return member;
  },

  removeMember: async (userId: string, workspaceId: string) => {
    await Member.findOneAndDelete({ userId, workspaceId });
    return;
  },
};
