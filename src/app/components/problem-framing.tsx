import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { School, BookOpen, Users, Building2, FileText } from 'lucide-react';

export function ProblemFraming() {
  return (
    <section id="problem-framing" className="bg-slate-50 py-16">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Problem Framing and Research
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Understanding the current state of interdisciplinary learning in Indian universities
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Current State</CardTitle>
              <CardDescription>
                Interdisciplinary learning in Indian higher education
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Despite the National Education Policy (NEP) 2020's emphasis on interdisciplinary education, 
                implementation remains fragmented across Indian higher education institutions. Most universities 
                continue to operate in disciplinary silos, with limited cross-departmental collaboration.
              </p>
              <p>
                The NEP 2020 envisions a holistic and multidisciplinary education that develops all capacities 
                of human beings—intellectual, aesthetic, social, physical, emotional, and moral—in an integrated manner.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Systemic Challenges</CardTitle>
              <CardDescription>
                Barriers limiting interdisciplinary education
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="curricula">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="curricula" className="flex flex-col items-center gap-1 py-2">
                    <BookOpen className="h-4 w-4" />
                    <span className="text-xs">Curricula</span>
                  </TabsTrigger>
                  <TabsTrigger value="faculty" className="flex flex-col items-center gap-1 py-2">
                    <Users className="h-4 w-4" />
                    <span className="text-xs">Faculty</span>
                  </TabsTrigger>
                  <TabsTrigger value="resources" className="flex flex-col items-center gap-1 py-2">
                    <FileText className="h-4 w-4" />
                    <span className="text-xs">Resources</span>
                  </TabsTrigger>
                  <TabsTrigger value="demand" className="flex flex-col items-center gap-1 py-2">
                    <School className="h-4 w-4" />
                    <span className="text-xs">Students</span>
                  </TabsTrigger>
                  <TabsTrigger value="admin" className="flex flex-col items-center gap-1 py-2">
                    <Building2 className="h-4 w-4" />
                    <span className="text-xs">Admin</span>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="curricula" className="mt-4 space-y-4">
                  <h4 className="font-medium">Rigid Curricula</h4>
                  <p>
                    Highly structured, discipline-specific curricula with limited flexibility for 
                    cross-disciplinary courses. Accreditation requirements often reinforce disciplinary boundaries.
                  </p>
                </TabsContent>
                <TabsContent value="faculty" className="mt-4 space-y-4">
                  <h4 className="font-medium">Faculty Resistance</h4>
                  <p>
                    Faculty trained in single disciplines often lack expertise or incentives to develop 
                    interdisciplinary courses. Promotion criteria typically reward disciplinary specialization.
                  </p>
                </TabsContent>
                <TabsContent value="resources" className="mt-4 space-y-4">
                  <h4 className="font-medium">Resource Constraints</h4>
                  <p>
                    Limited funding, facilities, and time allocation for developing and implementing 
                    interdisciplinary programs. Existing resources are often tied to specific departments.
                  </p>
                </TabsContent>
                <TabsContent value="demand" className="mt-4 space-y-4">
                  <h4 className="font-medium">Student Demand</h4>
                  <p>
                    Varying levels of student interest in interdisciplinary programs, often influenced by 
                    perceived job market demands and traditional career paths in India.
                  </p>
                </TabsContent>
                <TabsContent value="admin" className="mt-4 space-y-4">
                  <h4 className="font-medium">Administrative Barriers</h4>
                  <p>
                    Departmental structures, budget allocations, and administrative processes that 
                    reinforce disciplinary silos and complicate cross-departmental collaboration.
                  </p>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
