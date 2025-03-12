import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { mockInterviews, Interview } from "@/lib/mock-data";

export function DashboardTable() {
  // Sort interviews by dateCreated (most recent first) and take the top 5
  const recentInterviews = [...mockInterviews]
    .sort((a, b) => b.dateCreated.getTime() - a.dateCreated.getTime())
    .slice(0, 5);

  return (
    <div className="rounded-lg border bg-white shadow-sm">
      <div className="p-4 border-b bg-muted/50">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-700">Recent Interviews</h3>
            <p className="text-xs text-muted-foreground">Latest interview sessions</p>
          </div>
          <Button
            variant="link"
            size="sm"
            className="text-blue-600 hover:text-blue-800 p-0 h-auto"
            asChild
          >
            <Link href="/interviews">View all</Link>
          </Button>
        </div>
      </div>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="text-left sm:table-cell p-4 sm:p-3 md:p-4">Title</TableHead>
            <TableHead className="text-left sm:table-cell p-4 sm:p-3 md:p-2.5 whitespace-normal">
              Status
            </TableHead>
            <TableHead className="text-left sm:table-cell p-4 sm:p-3 md:p-2.5 whitespace-normal">
              Date
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentInterviews.map((interview: Interview) => (
            <TableRow key={interview.id} className="hover:bg-muted/30">
              <TableCell className="sm:table-cell p-6 sm:p-6 md:p-4 whitespace-normal break-words">
                {interview.title}
              </TableCell>
              <TableCell className="sm:table-cell p-4 sm:p-3 md:p-2.5 whitespace-normal break-words">
                <Badge
                  variant={
                    interview.status === "active"
                      ? "default"
                      : interview.status === "scheduled"
                      ? "outline"
                      : interview.status === "completed"
                      ? "secondary"
                      : "destructive"
                  }
                  className="text-xs"
                >
                  {interview.status}
                </Badge>
              </TableCell>
              <TableCell className="sm:table-cell p-6 sm:p-6 md:p-4 whitespace-normal break-words">
                {interview.dateCreated.toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}