import axiosInstance from "@/lib/axios";

export const AuthService = {
  //NOTE: Sign in

  signIn: async (credentials: { email: string; password: string }) => {
    try {
      const res = await axiosInstance.post("/auth/login", credentials);
      return res.data;
    } catch (error) {
      throw error;
    }
  },

  //NOTE: Sign up

  signUp: async (credentials: { email: string; password: string }) => {
    try {
      const res = await axiosInstance.post("/auth/signup", credentials);
      return res.data;
    } catch (error) {
      throw error;
    }
  },
};
