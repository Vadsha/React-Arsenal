import {
  BetweenHorizontalEnd,
  FileCheck,
  Home,
  Swords,
  Webhook
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from "@/components/ui/sidebar";
import { NavLink } from "react-router";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home
  },
  {
    title: "React Hook Form Zod",
    url: "/react-hook-form-zod",
    icon: FileCheck
  },
  {
    title: "Redux Toolkit",
    url: "/redux-toolkit",
    icon: BetweenHorizontalEnd
  },
  {
    title: "Axios Instance",
    url: "/axios-instance",
    icon: Webhook
  }
];

export function AppSidebar() {
  const { state } = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-background dark:bg-slate-800 py-4">
        <SidebarGroup>
          <h3 className="flex font-semibold justify-center items-center gap-2 text-xl">
            <Swords size={24} />
            {state == "expanded" ? <span>React Arsenal</span> : null}
          </h3>
          <SidebarGroupContent className="mt-8">
            <SidebarMenu className="space-y-2">
              {items.map((item) => (
                <SidebarMenuItem
                  className="bg-transparent rounded-xl"
                  key={item.title}
                >
                  <SidebarMenuButton
                    className="w-full p-4 h-full hover:bg-primary transition-all duration-300 hover:scale-95 rounded-xl hover:text-white"
                    asChild
                  >
                    <NavLink
                      className="sidebar-items"
                      to={item.url}
                      viewTransition
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
