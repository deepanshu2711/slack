import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import { WorkspaceService } from "@/services/workspaceService";
import { ApiResponse, Workspace } from "@/types";
import { toast } from "sonner";
import { AxiosError } from "axios";

export const useCreateWorkspace = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: ({ name }: { name: string }) => WorkspaceService.create(name),
    onSuccess: (data: ApiResponse<Workspace>) => {
      router.push(`/workspace/${data.data._id}`);
      toast.success("Workspace created successfully ");
    },
    onError: (error) => {
      const err = error as AxiosError<{ error: string }>;
      const message =
        err.response?.data?.error || err.message || "Login failed";
      toast.error(message);
    },
  });
};
