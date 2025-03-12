"use client";

import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { mockInterviews, Interview } from "@/lib/mock-data";

export default function InterviewsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredInterviews = mockInterviews.filter((interview) => {
    const matchesSearch = interview.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (interview.candidateName?.toLowerCase().includes(searchTerm.toLowerCase()) || false);
    const matchesStatus = statusFilter === "all" || interview.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="flex-1 p-6 bg-gray-50">
      <header className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Interviews</h1>
          <p className="text-sm text-muted-foreground">Manage and review all your interview sessions</p>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
          <Button asChild className="bg-green-600 text-white px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base w-full md:w-auto">
            <Link href="/">
              <LayoutDashboard className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Dashboard
            </Link>
          </Button>
          <Button asChild className="px-4 py-2 text-sm sm:px-6 sm:py-2.5 sm:text-base w-full md:w-auto">
            <Link href="#">Create Interview</Link>
          </Button>
        </div>
      </header>

      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Input
            type="text"
            placeholder="Search interviews..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="scheduled">Scheduled</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="rounded-lg border bg-white shadow-sm">
        <Table className="w-full">
          <TableHeader>
            <TableRow className="">
              <TableHead className="text-left p-4 sm:p-3 md:p-4 whitespace-normal">Title</TableHead>
              <TableHead className="text-left p-4 sm:p-3 md:p-4 whitespace-normal">Status</TableHead>
              <TableHead className="text-left p-4 sm:p-3 md:p-4 whitespace-normal">Date Created</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInterviews.map((interview: Interview) => (
              <TableRow key={interview.id} className="hover:bg-muted/30">
                <TableCell className="p-4 sm:p-3 md:p-2.5 whitespace-normal break-words">
                  {interview.title}
                  {interview.candidateName && (
                    <p className="text-sm text-muted-foreground">{interview.candidateName}</p>
                  )}
                </TableCell>
                <TableCell className="p-4 sm:p-3 md:p-2.5 whitespace-normal break-words">
                  <Badge
                    variant={
                      interview.status === "scheduled"
                        ? "outline"
                        : interview.status === "active"
                        ? "default"
                        : interview.status === "completed"
                        ? "secondary"
                        : "destructive"
                    }
                    className="text-xs"
                  >
                    {interview.status}
                  </Badge>
                </TableCell>
                <TableCell className="p-4 sm:p-3 md:p-2.5 whitespace-normal break-words">
                  {interview.dateCreated.toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}