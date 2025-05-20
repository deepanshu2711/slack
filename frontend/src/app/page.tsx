import { WorkspaceService } from "@/services/workspaceService";
import { cookies } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get("slack_token");
  const allWorkspaces = await WorkspaceService.getAll(token?.value);

  console.log(allWorkspaces, "data");

  return (
    <>
      <p>Landing</p>
    </>
  );
}
