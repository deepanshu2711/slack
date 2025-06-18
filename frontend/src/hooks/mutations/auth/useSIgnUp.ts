import { AxiosError } from 'axios';
import { toast } from 'sonner';

import { AuthService } from '@/services/authService';
import { useMutation } from '@tanstack/react-query';
import { useAppDispatch } from '@/redux/hooks';
import { setCurrentUser } from '@/redux/slices/UserSlice';
import { useRouter } from 'next/navigation';

export const useSignUp = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      AuthService.signUp({ email, password }),

    onSuccess: (data) => {
      dispatch(setCurrentUser(data.data));
      router.push('/');
      toast.success('Sign up successfully');
    },

    onError: (error) => {
      const err = error as AxiosError<{ error: string }>;
      const message = err.response?.data?.error || err.message || 'Login failed';
      toast.error(message);
    },
  });
};
