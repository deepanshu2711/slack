"use client";

import { useEffect } from "react";

import { useModal } from "@/hooks/custom/useModal";
import { CreateWorkspaceModal } from "@/features/workspace/components/CreateWorkspaceModel";

interface WorkspaceModalManagerProps {
  workspaceId: string;
}

export const WorkspaceModalManager = ({
  workspaceId,
}: WorkspaceModalManagerProps) => {
  const { open, setOpen } = useModal();

  useEffect(() => {
    if (workspaceId) {
      console.log("Workspace id exists");
    } else if (!open) {
      console.log("Open workspace model");

      setOpen(true);
    }
  }, [workspaceId, open, setOpen]);

  return <CreateWorkspaceModal open={open} setOpen={setOpen} />;
};
