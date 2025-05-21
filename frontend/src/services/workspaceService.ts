import axiosInstance from "@/lib/axios";
import { Workspace } from "@/types";

interface GetAllWorkspace {
  data: Workspace[];
}

export const WorkspaceService = {
  //NOTE: GET all workspaces

  getAll: async (token?: string): Promise<GetAllWorkspace> => {
    try {
      const headers: Record<string, string> = {};
      if (token) headers.Cookie = `slack_token=${token}`;

      const res = await axiosInstance.get("/workspace", {
        headers,
      });
      return res.data;
    } catch (error) {
      console.log(error);
      return { data: [] };
    }
  },
};
