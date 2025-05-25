import axiosInstance from "@/lib/axios";
import { ApiResponse, Workspace } from "@/types";

export const WorkspaceService = {
  //NOTE: GET all workspaces

  getAll: async (token?: string): Promise<ApiResponse<Workspace[]>> => {
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

  getById: async (
    workspaceid: string,
    token?: string,
  ): Promise<ApiResponse<Workspace> | null> => {
    try {
      const headers: Record<string, string> = {};
      if (token) headers.Cookie = `slack_token=${token}`;

      const res = await axiosInstance.get(`/workspace/${workspaceid}`, {
        headers,
      });
      return res.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  create: async (name: string): Promise<ApiResponse<Workspace> | null> => {
    try {
      const res = await axiosInstance.post("/workspace", { name });
      return res.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
