"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

// Sample data - in a real implementation, this would come from an API
const enrollmentData = [
  { name: "Engineering", value: 35, color: "#3b82f6" },
  { name: "Sciences", value: 25, color: "#10b981" },
  { name: "Humanities", value: 15, color: "#ef4444" },
  { name: "Business", value: 20, color: "#f59e0b" },
  { name: "Interdisciplinary", value: 5, color: "#8b5cf6" },
];

const budgetData = [
  { name: "Engineering", traditional: 40, interdisciplinary: 10 },
  { name: "Sciences", traditional: 30, interdisciplinary: 8 },
  { name: "Humanities", traditional: 15, interdisciplinary: 5 },
  { name: "Business", traditional: 25, interdisciplinary: 7 },
];

const nepImplementationData = [
  { name: "Curriculum Reform", completed: 35, inProgress: 45, notStarted: 20 },
  { name: "Faculty Development", completed: 20, inProgress: 30, notStarted: 50 },
  { name: "Administrative Changes", completed: 15, inProgress: 25, notStarted: 60 },
  { name: "Resource Allocation", completed: 10, inProgress: 30, notStarted: 60 },
  { name: "Student Engagement", completed: 25, inProgress: 35, notStarted: 40 },
];

export function DataDashboard() {
  const [yearFilter, setYearFilter] = useState("2023");
  
  return (
    <section id="data-dashboard" className="py-16">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Data Dashboard
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Real-time metrics on interdisciplinary education implementation
          </p>
        </div>

        <div className="mb-6 flex items-center justify-end">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Year:</span>
            <Select value={yearFilter} onValueChange={setYearFilter}>
              <SelectTrigger className="w-[100px]">
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2021">2021</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="enrollment">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="enrollment">Enrollment</TabsTrigger>
            <TabsTrigger value="budget">Budget Allocation</TabsTrigger>
            <TabsTrigger value="implementation">NEP Implementation</TabsTrigger>
          </TabsList>
          
          <TabsContent value="enrollment" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Student Enrollment by Discipline</CardTitle>
                <CardDescription>
                  Distribution of students across traditional and interdisciplinary programs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={enrollmentData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {enrollmentData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => [`${value}%`, 'Enrollment']} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-4 rounded-lg bg-slate-100 p-4">
                  <h4 className="mb-2 font-medium">Key Insight</h4>
                  <p className="text-sm">
                    Despite NEP 2020's emphasis on interdisciplinary education, enrollment in dedicated 
                    interdisciplinary programs remains low at just 5%. This highlights the gap between 
                    policy intentions and current implementation, suggesting that more effective leverage 
                    points need to be activated.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="budget" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Budget Allocation by Department</CardTitle>
                <CardDescription>
                  Comparison of funding for traditional vs. interdisciplinary initiatives
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={budgetData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis label={{ value: 'Budget Percentage', angle: -90, position: 'insideLeft' }} />
                      <Tooltip formatter={(value) => [`${value}%`, 'Budget Allocation']} />
                      <Legend />
                      <Bar dataKey="traditional" name="Traditional Programs" fill="#3b82f6" />
                      <Bar dataKey="interdisciplinary" name="Interdisciplinary Initiatives" fill="#8b5cf6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-4 rounded-lg bg-slate-100 p-4">
                  <h4 className="mb-2 font-medium">Key Insight</h4>
                  <p className="text-sm">
                    Budget allocation shows a significant disparity between traditional departmental 
                    funding and resources dedicated to interdisciplinary initiatives. This resource 
                    allocation pattern reinforces existing structures and limits the potential growth 
                    of interdisciplinary programs, demonstrating the "Limits to Growth" archetype in action.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="implementation" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>NEP 2020 Implementation Progress</CardTitle>
                <CardDescription>
                  Status of interdisciplinary education initiatives across key areas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={nepImplementationData}
                      layout="vertical"
                      margin={{
                        top: 20,
                        right: 30,
                        left: 100,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 100]} />
                      <YAxis type="category" dataKey="name" />
                      <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                      <Legend />
                      <Bar dataKey="completed" name="Completed" stackId="a" fill="#10b981" />
                      <Bar dataKey="inProgress" name="In Progress" stackId="a" fill="#f59e0b" />
                      <Bar dataKey="notStarted" name="Not Started" stackId="a" fill="#ef4444" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-4 rounded-lg bg-slate-100 p-4">
                  <h4 className="mb-2 font-medium">Key Insight</h4>
                  <p className="text-sm">
                    Implementation of NEP 2020's interdisciplinary education components shows significant 
                    variation across different areas. Administrative changes and resource allocation show 
                    the least progress, highlighting how structural elements of the system are more resistant 
                    to change than surface-level modifications like curriculum adjustments.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
