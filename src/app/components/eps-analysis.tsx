import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Calendar, TrendingUp, Network } from 'lucide-react';

export function EPSAnalysis() {
  return (
    <section id="eps-analysis" className="bg-slate-50 py-16">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            EPS Analysis
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Events – Patterns – Structures: Understanding the layers of system behavior
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle>Iceberg Model</CardTitle>
              <CardDescription>
                Exploring the visible and invisible elements of the system
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="events">
                  <AccordionTrigger className="flex items-center gap-2 text-lg font-medium">
                    <Calendar className="h-5 w-5 text-orange-500" />
                    Events (What happened?)
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 px-4 pt-2">
                    <p>
                      The visible occurrences that we can readily observe in the system:
                    </p>
                    <ul className="ml-6 list-disc space-y-2">
                      <li>
                        <span className="font-medium">NEP 2020 Adoption:</span> The formal introduction of the National Education Policy in 2020, emphasizing interdisciplinary education.
                      </li>
                      <li>
                        <span className="font-medium">Institutional Restructuring:</span> Universities creating new interdisciplinary centers or programs in response to NEP guidelines.
                      </li>
                      <li>
                        <span className="font-medium">Rising Student Interest:</span> Increased enrollment in interdisciplinary programs where available.
                      </li>
                      <li>
                        <span className="font-medium">Faculty Development Programs:</span> Workshops and training sessions to prepare faculty for interdisciplinary teaching.
                      </li>
                      <li>
                        <span className="font-medium">Industry Partnerships:</span> Collaborations with industry seeking graduates with interdisciplinary skills.
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground">
                      Events are the most visible part of the system but represent only the tip of the iceberg.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="patterns">
                  <AccordionTrigger className="flex items-center gap-2 text-lg font-medium">
                    <TrendingUp className="h-5 w-5 text-blue-500" />
                    Patterns (What trends are occurring?)
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 px-4 pt-2">
                    <p>
                      The recurring behaviors and trends that emerge over time:
                    </p>
                    <ul className="ml-6 list-disc space-y-2">
                      <li>
                        <span className="font-medium">Inconsistent Implementation:</span> Varying levels of adoption of interdisciplinary approaches across institutions.
                      </li>
                      <li>
                        <span className="font-medium">Fluctuating Support:</span> Administrative enthusiasm that rises with regulatory pressure but wanes when other priorities emerge.
                      </li>
                      <li>
                        <span className="font-medium">Disciplinary Resistance:</span> Persistent patterns of faculty preferring to stay within established disciplinary boundaries.
                      </li>
                      <li>
                        <span className="font-medium">Resource Allocation Patterns:</span> Tendency to fund traditional departments over interdisciplinary initiatives.
                      </li>
                      <li>
                        <span className="font-medium">Student Career Concerns:</span> Recurring student hesitation about interdisciplinary degrees and their market value.
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground">
                      Patterns reveal the trends that connect individual events and point to deeper structures.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="structures">
                  <AccordionTrigger className="flex items-center gap-2 text-lg font-medium">
                    <Network className="h-5 w-5 text-green-500" />
                    Structures (What's causing the patterns?)
                  </AccordionTrigger>
                  <AccordionContent className="space-y-4 px-4 pt-2">
                    <p>
                      The underlying systems, relationships, and mental models that generate the patterns:
                    </p>
                    <ul className="ml-6 list-disc space-y-2">
                      <li>
                        <span className="font-medium">Hierarchical Administration:</span> Organizational structures that reinforce departmental silos and complicate cross-disciplinary collaboration.
                      </li>
                      <li>
                        <span className="font-medium">Faculty Incentive Systems:</span> Promotion and tenure criteria that reward disciplinary specialization over interdisciplinary work.
                      </li>
                      <li>
                        <span className="font-medium">Outdated Curricula Frameworks:</span> Rigid curriculum structures that make integration of multiple disciplines difficult.
                      </li>
                      <li>
                        <span className="font-medium">Funding Mechanisms:</span> Budget allocation processes that distribute resources along traditional departmental lines.
                      </li>
                      <li>
                        <span className="font-medium">Mental Models:</span> Deeply held beliefs about the superiority of specialized knowledge and traditional career paths.
                      </li>
                      <li>
                        <span className="font-medium">Regulatory Frameworks:</span> Accreditation requirements that reinforce disciplinary boundaries.
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground">
                      Structures represent the deepest level of the system and are the most powerful places for intervention.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <div className="mt-8 rounded-lg bg-slate-100 p-4">
                <h4 className="mb-2 font-medium">Systems Thinking Insight</h4>
                <p className="text-sm">
                  The EPS analysis reveals that while events like NEP 2020 adoption are important triggers, 
                  sustainable change in interdisciplinary education requires addressing the deeper patterns 
                  and structures. Focusing solely on policy changes without transforming underlying structures 
                  like faculty incentives and administrative hierarchies will likely result in temporary or 
                  superficial changes rather than systemic transformation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
