import { cookies } from "next/headers";

import { WorkspaceService } from "@/services/workspaceService";
import { WorkspaceModalManager } from "@/features/workspace/components/WorkspaceManager";

export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get("slack_token");
  const allWorkspaces = await WorkspaceService.getAll(token?.value);
  const workspaceId = allWorkspaces.data?.[0]?._id;

  return (
    <>
      <WorkspaceModalManager workspaceId={workspaceId} />
    </>
  );
}
