import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Outlet } from "react-router";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function IndexLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full p-1 overflow-hidden bg-white dark:bg-slate-700">
        <nav className="flex justify-between w-full items-center p-2">
          <div className="flex items-center gap-2 w-fit">
            <SidebarTrigger className="cursor-pointer" />
          </div>
          <div className="flex gap-2 items-center">
            <Button
              size={"icon"}
              variant="secondary"
              className="rounded-full p-5 "
            >
              <Search />
            </Button>
          </div>
        </nav>
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
