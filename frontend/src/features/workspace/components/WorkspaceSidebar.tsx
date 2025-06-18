"use client"
import { useParams } from "next/navigation"
import { AlertTriangle, Loader } from "lucide-react"

import { useGetCurrentMember } from "@/hooks/queries/member/useGetCurrentMember"
import { useGetWorkspaceDetials } from "@/hooks/queries/workspace/useGetWorkspaceDetials"
import { WorkspaceHeader } from "./WorkspaceHeader"
import { ROLES } from "@/types"

export const WorkspaceSidebar = () => {
  const { workspaceId } = useParams()
  const { data: member, isLoading: memberLoading } = useGetCurrentMember(workspaceId as string)
  const { data: workspace, isLoading: workspaceLoading } = useGetWorkspaceDetials(workspaceId as string)

  if (memberLoading || workspaceLoading) {
    return (
      <div className="flex flex-col bg-[#5e2c5f] h-full  items-center justify-center">
        <Loader className="size-5 animate-spin text-white" />
      </div>
    )
  }

  if (!member || !workspace) {
    return (
      <div className="flex flex-col gap-y-2 bg-[#5e2c5f] h-full  items-center justify-center">
        <AlertTriangle className="size-5 text-sm text-white" />
        <p className="text-white">Workspace not found</p>
      </div>
    )
  }


  return (
    <div className="flex flex-col bg-[#5e2c5f] h-full">
      <WorkspaceHeader workspace={workspace.data} isAdmin={member.data.role === ROLES.ADMIN} />
    </div>
  )
}
