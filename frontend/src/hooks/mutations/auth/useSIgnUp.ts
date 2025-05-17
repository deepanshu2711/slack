import { AxiosError } from "axios";
import { toast } from "sonner";

import { AuthService } from "@/services/authService";
import { useMutation } from "@tanstack/react-query";

export const useSignUp = () => {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      AuthService.signUp({ email, password }),

    onSuccess: () => {
      toast.success("Sign up successfully");
    },

    onError: (error) => {
      const err = error as AxiosError<{ error: string }>;
      const message =
        err.response?.data?.error || err.message || "Login failed";
      toast.error(message);
    },
  });
};
