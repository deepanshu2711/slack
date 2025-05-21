"use client";
import { useEffect } from "react";

interface WorkspaceModalManagerProps {
  workspaceId: string;
}

export const WorkspaceModalManager = ({
  workspaceId,
}: WorkspaceModalManagerProps) => {
  useEffect(() => {
    if (!workspaceId) {
      console.log("Open workspace model");
    } else {
      console.log("Workspace id exists");
    }
  }, [workspaceId]);

  return null;
};
