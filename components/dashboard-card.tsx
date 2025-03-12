import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { dashboardSummary, InterviewStatus } from "@/lib/mock-data";

export function DashboardCard({ type }: { type: InterviewStatus }) {
  const data = {
    active: {
      title: "Active Interviews",
      count: dashboardSummary.pendingInterviews,
      description: "Interviews currently in progress.",
      action: "View Active",
      link: "/interviews?status=active",
    },
    scheduled: {
      title: "Scheduled Interviews",
      count: dashboardSummary.scheduledInterviews,
      description: "Upcoming interviews scheduled.",
      action: "View Scheduled",
      link: "/interviews?status=scheduled",
    },
    completed: {
      title: "Completed Interviews",
      count: dashboardSummary.completedInterviews,
      description: "Interviews finalized recently.",
      action: "View Completed",
      link: "/interviews?status=completed",
    },
    cancelled: {
      title: "Cancelled Interviews",
      count: dashboardSummary.cancelledInterviews,
      description: "Interviews cancelled recently.",
      action: "View Cancelled",
      link: "/interviews?status=cancelled",
    },
  };

  const { title, count, description, action, link } = data[type];

  return (
    <Card className="hover:shadow-md transition-shadow w-full flex flex-col">
      <CardHeader className="pb-2 flex-1">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <CardTitle className="text-lg font-semibold text-gray-800">{title}</CardTitle>
          <Badge
            variant={
              type === "active"
                ? "default"
                : type === "scheduled"
                ? "outline"
                : type === "completed"
                ? "secondary"
                : "destructive"
            }
            className="shrink-0"
          >
            {count}
          </Badge>
        </div>
        <CardDescription className="text-sm text-gray-500 line-clamp-2">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-2">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="w-full px-2 py-1 text-sm sm:text-base truncate"
        >
          <Link href={link}>{action}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}