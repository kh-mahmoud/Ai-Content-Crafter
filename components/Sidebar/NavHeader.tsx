import React from "react";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import Logo from "../Logo";

const NavHeader = () => {
  return (
  <SidebarMenu>
      <SidebarMenuItem>
            <SidebarMenuButton size="lg">
                <Logo/>
            </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default NavHeader;
