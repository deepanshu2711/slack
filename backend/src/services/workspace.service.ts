import { Workspace } from "../model/workspace.model";

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
    const workspace = await Workspace.create({ name, userId, joinCode });
    return workspace;
  },
};
