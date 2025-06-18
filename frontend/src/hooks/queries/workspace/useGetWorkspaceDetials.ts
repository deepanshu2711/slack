import { WorkspaceService } from '@/services/workspaceService';
import { useQuery } from '@tanstack/react-query';

export const useGetWorkspaceDetials = (workspaceId: string) => {
  return useQuery({
    queryKey: ['workspace', workspaceId],
    queryFn: () => WorkspaceService.getById(workspaceId),
    enabled: !!workspaceId,
    staleTime: 6 * 60 * 1000,
  });
};
