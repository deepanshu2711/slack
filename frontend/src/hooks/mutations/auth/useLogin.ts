import { AuthService } from "@/services/authService";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

export const useLogin = () => {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      AuthService.signIn({ email, password }),

    onSuccess: () => {
      toast.success("Sign in successfully");
    },

    onError: (error) => {
      const err = error as AxiosError<{ error: string }>;
      const message =
        err.response?.data?.error || err.message || "Login failed";
      toast.error(message);
    },
  });
};
