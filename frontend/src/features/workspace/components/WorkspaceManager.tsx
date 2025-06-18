'use client';

import { useEffect } from 'react';

import { useModal } from '@/hooks/custom/useModal';
import { CreateWorkspaceModal } from '@/features/workspace/components/CreateWorkspaceModel';
import { useRouter } from 'next/navigation';

interface WorkspaceModalManagerProps {
  workspaceId: string;
}

export const WorkspaceModalManager = ({ workspaceId }: WorkspaceModalManagerProps) => {
  const { open, setOpen } = useModal();
  const router = useRouter();

  useEffect(() => {
    if (workspaceId) {
      router.push(`/workspace/${workspaceId}`);
    } else if (!open) {
      setOpen(true);
    }
  }, [workspaceId, router, open, setOpen]);

  return <CreateWorkspaceModal open={open} setOpen={setOpen} />;
};
