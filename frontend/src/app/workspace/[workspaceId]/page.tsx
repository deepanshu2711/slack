import { cookies } from 'next/headers';

import { WorkspaceService } from '@/services/workspaceService';

interface PageProps {
  params: {
    workspaceId: string;
  };
}
const Page = async ({ params }: PageProps) => {
  const { workspaceId } = await params;
  const cookieStore = await cookies();
  const token = cookieStore.get('slack_token');

  const workspace = await WorkspaceService.getById(workspaceId, token?.value);

  return (
    <>
      <p>Workspace Details: {workspace?.data.name}</p>
    </>
  );
};

export default Page;
