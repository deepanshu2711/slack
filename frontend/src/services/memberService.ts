import axiosInstance from "@/lib/axios";
import { ApiResponse, Member } from "@/types";

export const memberService = {
  getCurrentMember: async (workspaceId: string, token?: string): Promise<ApiResponse<Member> | null> => {
    try {
      const headers: Record<string, string> = {};
      if (token) headers.Cookie = `slack_token=${token}`;

      const res = await axiosInstance.get(`/member/${workspaceId}`, {
        headers,
      });
      return res.data;
    } catch (error) {
      console.error("Error fetching current member:", error);
      return null;
    }
  }
}
