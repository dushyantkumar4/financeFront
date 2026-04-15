"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Info, LayoutDashboard, CircleUser, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon" className="border-r">
      {/* Header */}
      <SidebarHeader className="font-bold px-4 py-2">
        <div className="flex items-center gap-2">
          <CircleUser />
          <NavLink to="/me">Profile</NavLink>
        </div>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="flex flex-col gap-3">
            <SidebarMenuItem className="flex items-center gap-2">
              <LayoutDashboard />
              <NavLink to="/dashboard">Dashboard</NavLink>
            </SidebarMenuItem>

            <SidebarMenuItem className="flex items-center  gap-2">
              <Info />
              <NavLink to="/about">About</NavLink>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="flex items-center gap-2">
          <LogOut /> <span>LogOut</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
