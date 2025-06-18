'use client';
import { Info, Search } from 'lucide-react';
import { useParams } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { useGetWorkspaceDetials } from '@/hooks/queries/workspace/useGetWorkspaceDetials';

export const Toolbar = () => {
  const params = useParams();
  const { data } = useGetWorkspaceDetials(params.workspaceId as string);

  return (
    <nav className="bg-[#481349] flex items-center justify-between h-10 p-1.5  ">
      <div className="flex-1" />
      <div className="min-w-[280px] max-w-[640px] grow-[2] shrink">
        <Button
          size={'sm'}
          className="bg-accent/25 hover:bg-accent/25 w-full justify-start h-7 px-2 "
        >
          <Search className="size-4 text-white mr-2" />
          <span className="text-white text-xs">Search {data?.data.name}</span>
        </Button>
      </div>
      <div className="ml-auto flex-1 flex items-center justify-end">
        <Button variant={'ghost'} className="hover:bg-accent/10 bg-transparent">
          <Info className="size-5 text-white" />
        </Button>
      </div>
    </nav>
  );
};
