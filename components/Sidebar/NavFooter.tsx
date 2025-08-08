"use server";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { GetUser } from "@/lib/data/user.data";

import Image from "next/image";
import { redirect } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { SignOutButton } from "@clerk/nextjs";

const NavFooter = async () => {
  const user = await GetUser();
  if (!user) redirect("/");

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger className="nav-footer__trigger" asChild>
            <SidebarMenuButton size="lg">
              <div className="flex gap-2 items-center">
                <div className="relative w-[2.05rem] h-[2.05rem] rounded-full overflow-hidden">
                  <Image
                    src={user?.photo}
                    alt={user?.username}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div>
                  <p className="line-clamp-1 text-dark-200 font-semibold">
                    {user?.email}
                  </p>
                  <p className="line-clamp-1 text-dark-200 font-semibold">
                    {user?.username}
                  </p>
                </div>
              </div>
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent side="right" collisionPadding={14}>
            <SignOutButton>
              <DropdownMenuItem className="cursor-pointer">
                <LogOut className="text-destructive" />
                <span>Logout</span>
              </DropdownMenuItem>
            </SignOutButton>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default NavFooter;
