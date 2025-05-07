import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, School, Building2, BarChart3 } from 'lucide-react';

export function LeveragePoints() {
  return (
    <section id="leverage-points" className="py-16">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Leverage Points
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Strategic interventions to transform the system
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="flex flex-col">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-orange-100 p-2">
                  <BookOpen className="h-5 w-5 text-orange-600" />
                </div>
                <CardTitle>Curriculum Flexibility</CardTitle>
              </div>
              <CardDescription>
                Redesigning curriculum structures
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <p className="text-sm">
                  Transforming rigid curriculum frameworks to allow for more interdisciplinary pathways and student choice.
                </p>
                <div className="space-y-2">
                  <h4 className="text-xs font-medium uppercase text-muted-foreground">Impact on Loops</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-red-500 text-red-500">R1 Loop</Badge>
                    <Badge variant="outline" className="border-blue-500 text-blue-500">R2 Loop</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-medium uppercase text-muted-foreground">Key Actions</h4>
                  <ul className="ml-5 list-disc text-sm">
                    <li>Modular course design with interdisciplinary components</li>
                    <li>Credit recognition across departments</li>
                    <li>Problem-based learning approaches</li>
                    <li>Flexible degree pathways</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-purple-100 p-2">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <CardTitle>Faculty Incentives</CardTitle>
              </div>
              <CardDescription>
                Rewarding interdisciplinary teaching and research
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <p className="text-sm">
                  Restructuring promotion, tenure, and recognition systems to value interdisciplinary contributions.
                </p>
                <div className="space-y-2">
                  <h4 className="text-xs font-medium uppercase text-muted-foreground">Impact on Loops</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-red-500 text-red-500">R1 Loop</Badge>
                    <Badge variant="outline" className="border-green-500 text-green-500">B1 Loop</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-medium uppercase text-muted-foreground">Key Actions</h4>
                  <ul className="ml-5 list-disc text-sm">
                    <li>Revised promotion criteria</li>
                    <li>Interdisciplinary teaching grants</li>
                    <li>Collaborative research incentives</li>
                    <li>Recognition programs for innovation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-blue-100 p-2">
                  <School className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle>Student Engagement</CardTitle>
              </div>
              <CardDescription>
                Enhancing student participation and feedback
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <p className="text-sm">
                  Creating mechanisms for students to drive interdisciplinary initiatives and provide feedback on programs.
                </p>
                <div className="space-y-2">
                  <h4 className="text-xs font-medium uppercase text-muted-foreground">Impact on Loops</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-blue-500 text-blue-500">R2 Loop</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-medium uppercase text-muted-foreground">Key Actions</h4>
                  <ul className="ml-5 list-disc text-sm">
                    <li>Student-led interdisciplinary projects</li>
                    <li>Curriculum co-creation opportunities</li>
                    <li>Industry-connected capstone experiences</li>
                    <li>Peer learning communities</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-green-100 p-2">
                  <Building2 className="h-5 w-5 text-green-600" />
                </div>
                <CardTitle>Administrative Support</CardTitle>
              </div>
              <CardDescription>
                Restructuring organizational frameworks
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <p className="text-sm">
                  Redesigning administrative structures to facilitate rather than hinder cross-departmental collaboration.
                </p>
                <div className="space-y-2">
                  <h4 className="text-xs font-medium uppercase text-muted-foreground">Impact on Loops</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-red-500 text-red-500">R1 Loop</Badge>
                    <Badge variant="outline" className="border-green-500 text-green-500">B1 Loop</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-medium uppercase text-muted-foreground">Key Actions</h4>
                  <ul className="ml-5 list-disc text-sm">
                    <li>Cross-departmental coordination offices</li>
                    <li>Simplified approval processes</li>
                    <li>Joint appointment mechanisms</li>
                    <li>Interdisciplinary space allocation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-red-100 p-2">
                  <BarChart3 className="h-5 w-5 text-red-600" />
                </div>
                <CardTitle>Resource Allocation</CardTitle>
              </div>
              <CardDescription>
                Targeted funding and resource distribution
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <div className="space-y-4">
                <p className="text-sm">
                  Developing new funding models that prioritize interdisciplinary initiatives and collaborative projects.
                </p>
                <div className="space-y-2">
                  <h4 className="text-xs font-medium uppercase text-muted-foreground">Impact on Loops</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-red-500 text-red-500">R1 Loop</Badge>
                    <Badge variant="outline" className="border-blue-500 text-blue-500">R2 Loop</Badge>
                    <Badge variant="outline" className="border-green-500 text-green-500">B1 Loop</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xs font-medium uppercase text-muted-foreground">Key Actions</h4>
                  <ul className="ml-5 list-disc text-sm">
                    <li>Interdisciplinary research funds</li>
                    <li>Shared facilities and equipment</li>
                    <li>Cross-departmental budget allocations</li>
                    <li>Seed funding for innovative programs</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex flex-col md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle>Leverage Point Analysis</CardTitle>
              <CardDescription>
                Understanding intervention effectiveness
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-sm">
                  Systems thinking identifies leverage points as places in a system where small changes can lead to large shifts in behavior. 
                  The most effective interventions target deeper system structures rather than surface-level events.
                </p>
                <div className="rounded-lg bg-slate-100 p-4">
                  <h4 className="mb-2 font-medium">High-Leverage vs. Low-Leverage Actions</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-medium">High-Leverage:</span> Changing faculty incentive structures, redesigning administrative frameworks
                    </p>
                    <p>
                      <span className="font-medium">Medium-Leverage:</span> Curriculum redesign, resource reallocation
                    </p>
                    <p>
                      <span className="font-medium">Low-Leverage:</span> One-time events, isolated policy changes without structural support
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
