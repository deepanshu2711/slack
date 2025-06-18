import { Member, ROLES } from '../model/members.model';
import { Workspace } from '../model/workspace.model';
import { CustomError } from '../utils/customError';
import { MemberService } from './member.service';

export const WorkspaceService = {
  //NOTE: GET ALL WORKSPACE
  getAll: async () => {
    const workspaces = await Workspace.find({});
    return workspaces;
  },

  //NOTE: CREATE WORKSPACE
  create: async ({
    name,
    userId,
    joinCode,
  }: {
    name: string;
    userId: string;
    joinCode: string;
  }) => {
    const existingWorkspace = await Workspace.findOne({ userId, name });
    if (existingWorkspace) throw new CustomError(400, 'Workspace with this name already exists');

    const workspace = await Workspace.create({ name, userId, joinCode });
    await MemberService.addMember(userId, workspace._id.toString(), ROLES.ADMIN);
    return workspace;
  },

  //NOTE: GET ALL WORKSPACES OF A USER
  getAllUserWorkspaces: async (userId: string) => {
    const workspaceIds = await Member.distinct('workspaceId', { userId });
    const workspaces = await Workspace.find({ _id: { $in: workspaceIds } });
    return workspaces;
  },

  //NOTE: GET BY ID
  getById: async (workspaceId: string) => {
    const workspace = await Workspace.findById(workspaceId);
    if (!workspace) throw new CustomError(404, 'Workspace not found');
    return workspace;
  },
};
