import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';

import { Sidebar } from '@/components/Sidebar';
import { Toolbar } from '@/components/toolbar';
import { WorkspaceSidebar } from '@/features/workspace/components/WorkspaceSidebar';

interface WorkspaceIdLayoutProps {
  children: React.ReactNode;
}
const WorkspaceIdLayout = ({ children }: WorkspaceIdLayoutProps) => {
  return (
    <div>
      <Toolbar />
      <div className=" flex h-[calc(100vh-40px)]">
        <Sidebar />
        <ResizablePanelGroup autoSaveId="ca-workspace-layout" direction="horizontal">
          <ResizablePanel minSize={11} className="bg-[#5e2c5f]" defaultSize={20}>
            <WorkspaceSidebar />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel minSize={20}>{children}</ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default WorkspaceIdLayout;
