import axiosInstance from '@/lib/axios';

export const UserService = {
  //NOTE: get current user
  getCurrentUser: async () => {
    try {
      const res = await axiosInstance.get(`/user`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
};
