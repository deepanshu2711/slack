import { User } from '../model/user.model';
import { IUser } from '../types';
import { CustomError } from '../utils/customError';

export const AuthService = {
  SignIn: async (email: string, password: string) => {
    const user = (await User.findOne({ email }).select('+password')) as IUser | null;
    if (!user) throw new CustomError(404, 'user not found!');

    const isCorrect = await user.comparePassword(password);
    if (!isCorrect) throw new CustomError(400, 'Invalid credentials');

    user.password = undefined as unknown as string;
    return user;
  },

  SignUp: async (email: string, password: string) => {
    const existingUser = await User.findOne({ email });
    if (existingUser) throw new CustomError(400, 'Email already registered');

    const user = await User.create({ email, password });
    return user;
  },
};
