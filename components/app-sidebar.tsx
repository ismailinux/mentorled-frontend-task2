import { CalendarClock, StickyNote } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  //SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import Link from "next/link";

const items = [
  {
    title: "Interviews",
    url: "/interviews",
    icon: CalendarClock,
  },
  {
    title: "Some Other Page 1",
    url: "/#",
    icon: StickyNote,
  },
  {
    title: "Some Other Page 2",
    url: "/#",
    icon: StickyNote,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
      <SidebarGroupLabel className="p-8 font-extrabold text-green-600 text-xl border-b">
        Vector Interview
      </SidebarGroupLabel>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url}>
                  <item.icon className="h-5 w-5" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}