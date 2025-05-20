import { WorkspaceService } from "@/services/workspaceService";
import { Workspace } from "@/types";
import { useQuery } from "@tanstack/react-query";

interface ResultInterface {
  data: Workspace[];
}

export const useGetAllWorkspace = () => {
  return useQuery<ResultInterface>({
    queryKey: ["workspaces"],
    queryFn: () => WorkspaceService.getAll(),
    staleTime: 6 * 60 * 1000,
  });
};
