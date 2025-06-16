import { memberService } from "@/services/memberService"
import { useQuery } from "@tanstack/react-query"

export const useGetCurrentMember = (workspaceId: string, token?: string) => {
  return useQuery({
    queryKey: ["currentMember", workspaceId],
    queryFn: () => memberService.getCurrentMember(workspaceId, token),
    staleTime: 5 * 60 * 1000,
  })
}
