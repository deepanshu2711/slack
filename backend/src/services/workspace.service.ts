import { Workspace } from "../model/workspace.model";
import { CustomError } from "../utils/customError";

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
    if (existingWorkspace)
      throw new CustomError(400, "Workspace with this name already exists");
    const workspace = await Workspace.create({ name, userId, joinCode });
    return workspace;
  },

  //NOTE: GET By ID

  getById: async (workspaceId: string) => {
    const workspace = await Workspace.findById(workspaceId);
    if (!workspace) throw new CustomError(404, "Workspace not found");
    return workspace;
  },
};
