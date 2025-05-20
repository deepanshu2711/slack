import axiosInstance from "@/lib/axios";

export const WorkspaceService = {
  //NOTE: GET all workspaces
  getAll: async (token?: string) => {
    try {
      const res = await axiosInstance.get("/workspace", {
        headers: {
          Cookie: `slack_token=${token}`,
        },
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
};
