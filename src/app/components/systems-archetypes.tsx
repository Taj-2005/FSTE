import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowDownToLine, ArrowUpToLine, ArrowRightToLine } from 'lucide-react';

export function SystemsArchetypes() {
  return (
    <section id="systems-archetypes" className="bg-slate-50 py-16">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Systems Archetypes
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Common patterns of system behavior in interdisciplinary education
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle>Common Archetypes in Higher Education</CardTitle>
              <CardDescription>
                Recognizing recurring system patterns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="fixes-that-fail">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="fixes-that-fail">Fixes That Fail</TabsTrigger>
                  <TabsTrigger value="limits-to-growth">Limits to Growth</TabsTrigger>
                  <TabsTrigger value="shifting-burden">Shifting the Burden</TabsTrigger>
                </TabsList>
                
                <TabsContent value="fixes-that-fail" className="mt-6 space-y-6">
                  <div className="flex flex-col items-center gap-4 md:flex-row">
                    <div className="flex-1 space-y-4">
                      <h3 className="text-xl font-bold">Fixes That Fail</h3>
                      <p className="text-sm">
                        A solution is applied to a problem, providing short-term relief, but creating unintended consequences 
                        that make the problem worse in the long run.
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium">In Interdisciplinary Education:</h4>
                        <div className="rounded-lg bg-orange-50 p-4">
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-orange-100 p-2">
                              <ArrowDownToLine className="h-5 w-5 text-orange-600" />
                            </div>
                            <div>
                              <p className="font-medium">Problem</p>
                              <p className="text-sm">Low interdisciplinary program enrollment</p>
                            </div>
                          </div>
                          
                          <div className="my-2 border-l-2 border-dashed border-orange-300 pl-10">
                            <ArrowDownToLine className="h-5 w-5 text-orange-600" />
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-orange-100 p-2">
                              <ArrowRightToLine className="h-5 w-5 text-orange-600" />
                            </div>
                            <div>
                              <p className="font-medium">Quick Fix</p>
                              <p className="text-sm">Mandatory interdisciplinary course requirements</p>
                            </div>
                          </div>
                          
                          <div className="my-2 border-l-2 border-dashed border-orange-300 pl-10">
                            <ArrowDownToLine className="h-5 w-5 text-orange-600" />
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-orange-100 p-2">
                              <ArrowUpToLine className="h-5 w-5 text-orange-600" />
                            </div>
                            <div>
                              <p className="font-medium">Unintended Consequence</p>
                              <p className="text-sm">Student and faculty resistance to forced integration</p>
                            </div>
                          </div>
                          
                          <div className="my-2 border-l-2 border-dashed border-orange-300 pl-10">
                            <ArrowDownToLine className="h-5 w-5 text-orange-600" />
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-orange-100 p-2">
                              <ArrowUpToLine className="h-5 w-5 text-orange-600" />
                            </div>
                            <div>
                              <p className="font-medium">Long-term Result</p>
                              <p className="text-sm">Negative perception of interdisciplinary programs</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-4 rounded-lg border p-4">
                      <h4 className="font-medium">Real-World Example</h4>
                      <p className="text-sm">
                        A university mandates that all students take at least two interdisciplinary courses to 
                        boost enrollment in these programs. Without proper faculty training or curriculum integration, 
                        these courses are poorly executed. Students view them as burdensome requirements rather than 
                        valuable learning experiences, creating resistance to future interdisciplinary initiatives.
                      </p>
                      
                      <h4 className="font-medium">Systems Solution</h4>
                      <p className="text-sm">
                        Instead of mandating participation, focus on improving the quality and relevance of 
                        interdisciplinary offerings. Invest in faculty development, create meaningful connections 
                        to career outcomes, and build student interest organically through demonstration of value.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="limits-to-growth" className="mt-6 space-y-6">
                  <div className="flex flex-col items-center gap-4 md:flex-row">
                    <div className="flex-1 space-y-4">
                      <h3 className="text-xl font-bold">Limits to Growth</h3>
                      <p className="text-sm">
                        A process feeds on itself to produce growth, but also creates secondary effects that eventually 
                        limit growth. The system reaches a balancing state well below its potential.
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium">In Interdisciplinary Education:</h4>
                        <div className="rounded-lg bg-blue-50 p-4">
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-blue-100 p-2">
                              <ArrowUpToLine className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium">Growth Process</p>
                              <p className="text-sm">Successful interdisciplinary programs attract more students</p>
                            </div>
                          </div>
                          
                          <div className="my-2 border-l-2 border-dashed border-blue-300 pl-10">
                            <ArrowUpToLine className="h-5 w-5 text-blue-600" />
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-blue-100 p-2">
                              <ArrowUpToLine className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium">Reinforcing Loop</p>
                              <p className="text-sm">More students → more resources → better programs → more students</p>
                            </div>
                          </div>
                          
                          <div className="my-2 border-l-2 border-dashed border-blue-300 pl-10">
                            <ArrowDownToLine className="h-5 w-5 text-blue-600" />
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-blue-100 p-2">
                              <ArrowDownToLine className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium">Limiting Condition</p>
                              <p className="text-sm">Faculty capacity and administrative structures cannot support growth</p>
                            </div>
                          </div>
                          
                          <div className="my-2 border-l-2 border-dashed border-blue-300 pl-10">
                            <ArrowDownToLine className="h-5 w-5 text-blue-600" />
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-blue-100 p-2">
                              <ArrowDownToLine className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium">Balancing Loop</p>
                              <p className="text-sm">Growth slows and stabilizes below potential</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-4 rounded-lg border p-4">
                      <h4 className="font-medium">Real-World Example</h4>
                      <p className="text-sm">
                        A university launches a successful interdisciplinary program in sustainable development that 
                        attracts growing student interest. However, as enrollment increases, the program faces constraints: 
                        limited qualified faculty, inadequate physical space for collaborative work, and administrative 
                        systems designed for traditional departments. Growth plateaus well below market demand.
                      </p>
                      
                      <h4 className="font-medium">Systems Solution</h4>
                      <p className="text-sm">
                        Identify and address the limiting factors before they constrain growth. Develop faculty capacity 
                        through hiring and training, create flexible administrative structures, and allocate resources 
                        to support scaling. Plan for growth by addressing potential constraints proactively.
                      </p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="shifting-burden" className="mt-6 space-y-6">
                  <div className="flex flex-col items-center gap-4 md:flex-row">
                    <div className="flex-1 space-y-4">
                      <h3 className="text-xl font-bold">Shifting the Burden</h3>
                      <p className="text-sm">
                        A problem symptom is addressed with a quick fix solution that alleviates the symptom but does nothing 
                        to solve the underlying problem, leading to dependency on the symptomatic solution.
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="font-medium">In Interdisciplinary Education:</h4>
                        <div className="rounded-lg bg-green-50 p-4">
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-green-100 p-2">
                              <ArrowDownToLine className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium">Problem</p>
                              <p className="text-sm">Lack of interdisciplinary teaching expertise</p>
                            </div>
                          </div>
                          
                          <div className="my-2 border-l-2 border-dashed border-green-300 pl-10">
                            <ArrowDownToLine className="h-5 w-5 text-green-600" />
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-green-100 p-2">
                              <ArrowRightToLine className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium">Symptomatic Solution</p>
                              <p className="text-sm">Hiring external adjuncts for interdisciplinary courses</p>
                            </div>
                          </div>
                          
                          <div className="my-2 border-l-2 border-dashed border-green-300 pl-10">
                            <ArrowDownToLine className="h-5 w-5 text-green-600" />
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-green-100 p-2">
                              <ArrowDownToLine className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium">Fundamental Solution (Neglected)</p>
                              <p className="text-sm">Developing internal faculty capacity for interdisciplinary teaching</p>
                            </div>
                          </div>
                          
                          <div className="my-2 border-l-2 border-dashed border-green-300 pl-10">
                            <ArrowDownToLine className="h-5 w-5 text-green-600" />
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <div className="rounded-full bg-green-100 p-2">
                              <ArrowUpToLine className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium">Side Effect</p>
                              <p className="text-sm">Permanent dependency on external expertise</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 space-y-4 rounded-lg border p-4">
                      <h4 className="font-medium">Real-World Example</h4>
                      <p className="text-sm">
                        A university needs to offer interdisciplinary courses to comply with NEP 2020 but lacks faculty 
                        with appropriate expertise. Instead of investing in faculty development, they hire adjunct 
                        professors to teach these courses. This creates a quick solution but fails to build internal 
                        capacity. The institution becomes dependent on external experts, and interdisciplinary approaches 
                        never become integrated into the core faculty's teaching methods.
                      </p>
                      
                      <h4 className="font-medium">Systems Solution</h4>
                      <p className="text-sm">
                        While using some external expertise initially, simultaneously invest in developing internal 
                        faculty capacity through training, team teaching, and incentives for interdisciplinary skill 
                        development. Create a transition plan that gradually shifts responsibility to internal faculty 
                        while building institutional knowledge.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="mt-8 rounded-lg bg-slate-100 p-4">
                <h4 className="mb-2 font-medium">Archetype Analysis</h4>
                <p className="text-sm">
                  Recognizing these common system archetypes helps stakeholders identify problematic patterns 
                  before they become entrenched. By understanding these dynamics, universities can design 
                  interventions that address fundamental issues rather than symptoms, creating sustainable 
                  approaches to interdisciplinary education that avoid common pitfalls.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
