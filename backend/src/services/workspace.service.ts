import { Workspace } from "../model/workspace.model";

export const WorkspaceService = {
  getAll: async () => {
    const workspaces = await Workspace.find({});
    return workspaces;
  },
};
