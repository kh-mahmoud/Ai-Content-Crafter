'use client'

import React from "react";
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../ui/sidebar";
import { navigations } from "@/constants";
import { usePathname } from "next/navigation";

const MainNav = () => {
  const path = usePathname()
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {navigations.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton className={`hover:bg-primary active:bg-primary  p-5 ${path === item.link &&"bg-primary" }`} asChild>
                <a href={item.link} className={`hover:text-white active:text-white ${path === item.link &&"text-white" } flex gap-3`}>
                  <item.icon className="scale-125"  />
                  <span className="font-semibold text-[1rem]">{item.label}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

export default MainNav;
