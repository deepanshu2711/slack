"use client";

import { useEffect, useState } from "react";
import { CreateWorkspaceModal } from "./CreateWorkspaceModel";

interface WorkspaceModalManagerProps {
  workspaceId: string;
}

export const WorkspaceModalManager = ({
  workspaceId,
}: WorkspaceModalManagerProps) => {
  const [open, setOpen] = useState(false);

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
