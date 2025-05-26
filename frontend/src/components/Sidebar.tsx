import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { WorkspaceSwitcher } from "./WorkspaceSwitcher";
import { SidebarButton } from "./SidebarButton";
import {
  BellIcon,
  Home,
  MessagesSquareIcon,
  MoreHorizontal,
} from "lucide-react";

export const Sidebar = () => {
  return (
    <aside className="w-[70px] h-full bg-[#481349] flex flex-col gap-y-4 items-center pt-[9px] pb-[4px]">
      <WorkspaceSwitcher />
      <SidebarButton icon={Home} label="Home" isActive />
      <SidebarButton icon={MessagesSquareIcon} label="DMs" />
      <SidebarButton icon={BellIcon} label="Activity" />
      <SidebarButton icon={MoreHorizontal} label="More" />
      <div className="flex flex-col  items-center justify-center gap-y-1 mt-auto">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </aside>
  );
};
