import { Button } from '@/components/ui/button';
import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { Workspace } from '@/types';
import { ChevronDownIcon, ListFilter, SquarePen } from 'lucide-react';

interface WorkspaceHeaderProps {
  workspace: Workspace;
  isAdmin: boolean;
}

export const WorkspaceHeader = ({ workspace, isAdmin }: WorkspaceHeaderProps) => {
  return (
    <div className="flex items-center justify-between px-4 h-[49px] gap-0.5">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="font-semibold bg-accent/10 hover:bg-accent/20 text-lg w-auto p-1.5 overflow-hidden "
            size={'sm'}
          >
            <span className="truncate "> {workspace.name}</span>
            <ChevronDownIcon className="size-4 ml-1 shrink-0" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="start" className="w-64">
          <DropdownMenuItem className="cursor-pointer capitalize">
            <div className=" size-9 relative overflow-hidden bg-[#616061] text-white font-semibold text-xl rounded-md flex items-center justify-center mr-2">
              {workspace.name.charAt(0).toUpperCase()}
            </div>
            <div className="flex flex-col items-start">
              <p className="font-bold">{workspace.name}</p>
              <p className="text-xs text-muted-foreground">Active workspace</p>
            </div>
          </DropdownMenuItem>
          {isAdmin && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer py-2" onClick={() => {}}>
                Invite people to {workspace.name}
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer py-2" onClick={() => {}}>
                Preferences
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex items-center gap-0.5">
        <Button variant="default" size="sm" className="text-sm bg-accent/10 hover:bg-accent/20">
          <ListFilter className="size-4" />
        </Button>
        <Button variant="default" size="sm" className="text-sm bg-accent/10 hover:bg-accent/20">
          <SquarePen className="size-4" />
        </Button>
      </div>
    </div>
  );
};
