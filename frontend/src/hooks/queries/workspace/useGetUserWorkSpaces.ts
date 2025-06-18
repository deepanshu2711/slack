import { WorkspaceService } from '@/services/workspaceService';
import { Workspace } from '@/types';
import { useQuery } from '@tanstack/react-query';

interface ResultInterface {
  data: Workspace[];
}

export const useGetUserWorkspaces = () => {
  return useQuery<ResultInterface>({
    queryKey: ['workspaces:user'],
    queryFn: () => WorkspaceService.getUserWorkspaces(),
    staleTime: 6 * 60 * 1000,
  });
};
