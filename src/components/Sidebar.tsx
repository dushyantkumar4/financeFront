"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarFooter,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { BadgeInfo, LayoutDashboard, CircleUser, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useMyContext } from "@/hooks/useMyContext";

const AppSidebar = () => {
  const { logout, user } = useMyContext();
  return (
    <Sidebar collapsible="icon" variant="floating" className="">
      {/* Header */}
      <SidebarHeader className="font-bold bg-green-50 rounded-lg">
        <SidebarMenuButton asChild>
          <NavLink to="/me" className="text-green-500">
            <CircleUser /> <span>Profile</span>{" "}
          </NavLink>
        </SidebarMenuButton>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent className="bg-green-50">
        <SidebarGroup>
          <SidebarMenu className="flex flex-col gap-3">
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <NavLink to="/dashboard" className="text-green-500">
                  <LayoutDashboard /> <span>Dashboard</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <NavLink to="/about" className="text-green-500">
                  <BadgeInfo /> <span>About</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      {/* logout  */}
      <SidebarFooter className="bg-green-50 rounded-lg">
        {user && (
          <SidebarMenuButton asChild>
            <div
              className="text-red-500 cursor-pointer"
              onClick={() => logout()}
            >
              <LogOut /> <span>LogOut</span>
            </div>
          </SidebarMenuButton>
        )}
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
