import { UserService } from "@/services/userService";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: () => UserService.getCurrentUser(),
    staleTime: 5 * 60 * 1000,
  });
};
