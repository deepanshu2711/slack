import axiosInstance from "@/lib/axios";

export const AuthService = {
  signIn: async (credentials: { email: string; password: string }) => {
    try {
      const res = await axiosInstance.post("/auth/login", credentials);
      return res.data;
    } catch (error) {
      throw error;
    }
  },
};
