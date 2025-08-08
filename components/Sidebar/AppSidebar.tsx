import React, { Suspense } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarSeparator,
} from "../ui/sidebar";
import NavHeader from "./NavHeader";
import MainNav from "./MainNav";
import NavFooter from "./NavFooter";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import DirectionButtons from "./DirectionButtons";

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon" variant="sidebar" side="left">
      {/* Header */}
      <SidebarHeader>
        <NavHeader />
      </SidebarHeader>

      <SidebarSeparator className="!p-0 !m-0" />

      {/* navigation Content */}
      <SidebarContent>

        <SignedIn>
          <MainNav />
        </SignedIn>

        <SignedOut>
          <DirectionButtons />
        </SignedOut>
      </SidebarContent>
      <SignedIn>
        {/* Footer */}
        <SidebarFooter>
          <Suspense fallback={<div className="flex justify-center items-center w-full mb-2">Loading...</div>}>
            <NavFooter />
          </Suspense>
        </SidebarFooter>
      </SignedIn>
    </Sidebar>
  );
};

export default AppSidebar;
