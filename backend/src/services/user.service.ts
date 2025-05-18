import { User } from "../model/user.model";
import { CustomError } from "../utils/customError";

export const UserService = {
  getUser: async (userId: string) => {
    const user = await User.findById(userId);
    if (!user) throw new CustomError(404, "user not fount!");
    return user;
  },
};
