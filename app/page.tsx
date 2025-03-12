// app/page.tsx
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { DashboardCard } from "@/components/dashboard-card";
import { DashboardTable } from "@/components/dashboard-table";
import { dashboardSummary } from "@/lib/mock-data";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="p-5 border-b bg-white shadow-sm flex items-center justify-between">
          <div className="flex">
          <SidebarTrigger/> {/* Removed md:hidden for always-visible toggle */}
            <div>
                <h1 className="font-extrabold text-green-600 text-2xl">Dashboard</h1>
                <p className="text-sm text-gray-500">
                   Welcome to your interview management dashboard. Total interviews: {dashboardSummary.totalInterviews}.
                </p>
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-6 bg-gray-50">
          <div className="grid auto-rows-min gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
            <DashboardCard type="active" />
            <DashboardCard type="scheduled" />
            <DashboardCard type="completed" />
            <DashboardCard type="cancelled" />
          </div>
          <div className="flex-1 rounded-xl bg-white p-4 shadow-sm">
            <DashboardTable />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}