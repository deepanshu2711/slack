"use client";
import { useParams, useRouter } from "next/navigation";
import { Loader, Plus } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useGetWorkspaceDetials } from "@/hooks/queries/workspace/useGetWorkspaceDetials";
import { useModal } from "@/hooks/custom/useModal";
import { CreateWorkspaceModal } from "@/features/workspace/components/CreateWorkspaceModel";
import { useGetUserWorkspaces } from "@/hooks/queries/workspace/useGetUserWorkSpaces";

export const WorkspaceSwitcher = () => {
  const router = useRouter();
  const { open, setOpen } = useModal();
  const { workspaceId } = useParams();
  const { data: workspace, isLoading: workspaceLoading } =
    useGetWorkspaceDetials(workspaceId as string);
  const { data: allWorkspaces } = useGetUserWorkspaces();

  const filteredWorkspaces = allWorkspaces?.data.filter(
    (item) => item._id !== workspaceId,
  );

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="size-9 relative overflow-hidden bg-[#ababab] hover:bg-[#ababab]/80 text-slate-800 font-semibold text-xl">
            {workspaceLoading ? (
              <Loader className="size-5 animate-spin shrink-0" />
            ) : (
              workspace?.data.name.charAt(0).toUpperCase()
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64" align="start" side="bottom">
          <DropdownMenuItem
            onClick={() => router.push(`/workspace/${workspaceId}`)}
            className="cursor-pointer flex flex-col justify-start items-start capitalize"
          >
            {workspace?.data.name}
            <span className="text-xs text-muted-foreground">
              Active Workspace
            </span>
          </DropdownMenuItem>

          {filteredWorkspaces?.map((item) => (
            <DropdownMenuItem
              key={item._id}
              className="cursor-pointer capitalize"
              onClick={() => router.push(`/workspace/${item._id}`)}
            >
              <div className="size-9 relative overflow-hidden bg-[#616061] text-white font-semibold text-xl rounded-md flex items-center justify-center mr-2">
                {item.name.charAt(0).toUpperCase()}
              </div>
              {item.name}
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <div className="size-9 relative overflow-hidden bg-[#f2f2f2] text-slate-800 font-semibold text-xl rounded-md flex items-center justify-center mr-2">
              <Plus />
            </div>
            Create a new workspace
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <CreateWorkspaceModal open={open} setOpen={setOpen} />
    </>
  );
};
