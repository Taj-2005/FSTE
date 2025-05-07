"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownRight, RefreshCw, RotateCcw } from 'lucide-react';

export function CausalLoopDiagram() {
  const [activeLoop, setActiveLoop] = useState<string>("all");
  const [showSubLoops, setShowSubLoops] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Draw the CLD diagram based on the active loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height);
    
    // Define colors
    const colors = {
      r1: "#ef4444", // Administrative Barrier Loop (red)
      r2: "#3b82f6", // Student Demand Loop (blue)
      b1: "#10b981", // Regulatory Push Loop (green)
      background: "#f8fafc",
      text: "#1e293b",
      subLoop: "#9333ea", // Sub-loops (purple)
    };
    
    // Set background
    ctx.fillStyle = colors.background;
    ctx.fillRect(0, 0, rect.width, rect.height);
    
    // Draw nodes and connections based on active loop
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const radius = Math.min(centerX, centerY) * 0.7;
    
    // Draw the main nodes
    const nodes = [
      { id: "interdisciplinary", label: "Interdisciplinary Learning", x: centerX, y: centerY - radius },
      { id: "admin", label: "Administrative Support", x: centerX - radius, y: centerY },
      { id: "student", label: "Student Demand", x: centerX, y: centerY + radius },
      { id: "regulatory", label: "Regulatory Push (NEP 2020)", x: centerX + radius, y: centerY },
    ];
    
    // Draw sub-loop nodes if enabled
    const subLoopNodes = showSubLoops ? [
      { id: "curriculum", label: "Curriculum Flexibility", x: centerX - radius * 0.5, y: centerY - radius * 0.5 },
      { id: "faculty", label: "Faculty Resistance", x: centerX + radius * 0.5, y: centerY - radius * 0.5 },
      { id: "resources", label: "Resource Allocation", x: centerX - radius * 0.5, y: centerY + radius * 0.5 },
    ] : [];
    
    // Combine all nodes
    const allNodes = [...nodes, ...subLoopNodes];
    
    // Draw connections based on active loop
    const drawArrow = (fromX: number, fromY: number, toX: number, toY: number, color: string, isPositive: boolean) => {
      const headLength = 10;
      const dx = toX - fromX;
      const dy = toY - fromY;
      const angle = Math.atan2(dy, dx);
      
      // Draw line
      ctx.beginPath();
      ctx.moveTo(fromX, fromY);
      ctx.lineTo(toX, toY);
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Draw arrowhead
      ctx.beginPath();
      ctx.moveTo(toX, toY);
      ctx.lineTo(toX - headLength * Math.cos(angle - Math.PI / 6), toY - headLength * Math.sin(angle - Math.PI / 6));
      ctx.lineTo(toX - headLength * Math.cos(angle + Math.PI / 6), toY - headLength * Math.sin(angle + Math.PI / 6));
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
      
      // Draw + or - sign
      const signX = (fromX + toX) / 2;
      const signY = (fromY + toY) / 2;
      ctx.font = "bold 16px Arial";
      ctx.fillStyle = color;
      ctx.fillText(isPositive ? "+" : "−", signX, signY);
    };
    
    // Draw connections based on active loop
    if (activeLoop === "all" || activeLoop === "r1") {
      // R1: Administrative Barrier Loop
      drawArrow(nodes[0].x, nodes[0].y + 15, nodes[1].x + 30, nodes[1].y - 15, colors.r1, true);
      drawArrow(nodes[1].x + 15, nodes[1].y + 30, nodes[2].x - 15, nodes[2].y - 15, colors.r1, true);
      drawArrow(nodes[2].x, nodes[2].y - 15, nodes[0].x, nodes[0].y + 15, colors.r1, true);
    }
    
    if (activeLoop === "all" || activeLoop === "r2") {
      // R2: Student Demand Loop
      drawArrow(nodes[0].x + 15, nodes[0].y + 15, nodes[2].x + 15, nodes[2].y - 15, colors.r2, true);
      drawArrow(nodes[2].x + 15, nodes[2].y, nodes[3].x - 15, nodes[3].y, colors.r2, true);
      drawArrow(nodes[3].x - 15, nodes[3].y - 15, nodes[0].x + 15, nodes[0].y + 15, colors.r2, true);
    }
    
    if (activeLoop === "all" || activeLoop === "b1") {
      // B1: Regulatory Push Loop
      drawArrow(nodes[3].x - 15, nodes[3].y - 15, nodes[0].x + 15, nodes[0].y + 15, colors.b1, true);
      drawArrow(nodes[0].x + 15, nodes[0].y + 15, nodes[1].x + 30, nodes[1].y - 15, colors.b1, true);
      drawArrow(nodes[1].x + 15, nodes[1].y - 15, nodes[3].x - 15, nodes[3].y - 15, colors.b1, false);
    }
    
    // Draw sub-loops if enabled
    if (showSubLoops) {
      // Curriculum inertia sub-loop
      drawArrow(nodes[0].x - 15, nodes[0].y + 15, subLoopNodes[0].x + 15, subLoopNodes[0].y - 15, colors.subLoop, true);
      drawArrow(subLoopNodes[0].x + 15, subLoopNodes[0].y + 15, nodes[0].x - 15, nodes[0].y - 15, colors.subLoop, true);
      
      // Faculty resistance sub-loop
      drawArrow(nodes[0].x + 15, nodes[0].y + 15, subLoopNodes[1].x - 15, subLoopNodes[1].y - 15, colors.subLoop, false);
      drawArrow(subLoopNodes[1].x - 15, subLoopNodes[1].y + 15, nodes[0].x + 15, nodes[0].y - 15, colors.subLoop, false);
      
      // Resource allocation sub-loop
      drawArrow(nodes[1].x + 15, nodes[1].y + 15, subLoopNodes[2].x - 15, subLoopNodes[2].y - 15, colors.subLoop, true);
      drawArrow(subLoopNodes[2].x, subLoopNodes[2].y + 15, nodes[2].x, nodes[2].y - 15, colors.subLoop, true);
    }
    
    // Draw nodes
    allNodes.forEach(node => {
      // Draw node circle
      ctx.beginPath();
      ctx.arc(node.x, node.y, 30, 0, 2 * Math.PI);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.strokeStyle = colors.text;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Draw node label
      ctx.font = "12px Arial";
      ctx.fillStyle = colors.text;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      
      // Split label into multiple lines if needed
      const words = node.label.split(" ");
      let line = "";
      let lineHeight = 14;
      let y = node.y - ((words.length - 1) * lineHeight) / 2;
      
      for (let i = 0; i < words.length; i++) {
        const testLine = line + words[i] + " ";
        if (testLine.length > 15 && i > 0) {
          ctx.fillText(line, node.x, y);
          line = words[i] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }
      ctx.fillText(line, node.x, y);
    });
    
    // Draw loop labels
    if (activeLoop === "r1" || activeLoop === "all") {
      ctx.font = "bold 16px Arial";
      ctx.fillStyle = colors.r1;
      ctx.fillText("R1: Administrative Barrier Loop", centerX - radius * 0.8, centerY + radius * 0.4);
    }
    
    if (activeLoop === "r2" || activeLoop === "all") {
      ctx.font = "bold 16px Arial";
      ctx.fillStyle = colors.r2;
      ctx.fillText("R2: Student Demand Loop", centerX + radius * 0.5, centerY + radius * 0.7);
    }
    
    if (activeLoop === "b1" || activeLoop === "all") {
      ctx.font = "bold 16px Arial";
      ctx.fillStyle = colors.b1;
      ctx.fillText("B1: Regulatory Push Loop", centerX + radius * 0.5, centerY - radius * 0.7);
    }
  }, [activeLoop, showSubLoops]);

  return (
    <section id="cld-diagram" className="py-16">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Causal Loop Diagram
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Visualizing the systemic relationships in interdisciplinary education
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Interactive CLD Diagram</CardTitle>
                <CardDescription>
                  Click on a loop to see details and narratives
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="mb-4 flex items-center gap-2">
                  <Button
                    variant={activeLoop === "all" ? "default" : "outline"}
                    onClick={() => setActiveLoop("all")}
                  >
                    All Loops
                  </Button>
                  <Button
                    variant={activeLoop === "r1" ? "default" : "outline"}
                    onClick={() => setActiveLoop("r1")}
                    className="border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600"
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    R1
                  </Button>
                  <Button
                    variant={activeLoop === "r2" ? "default" : "outline"}
                    onClick={() => setActiveLoop("r2")}
                    className="border-blue-500 text-blue-500 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    R2
                  </Button>
                  <Button
                    variant={activeLoop === "b1" ? "default" : "outline"}
                    onClick={() => setActiveLoop("b1")}
                    className="border-green-500 text-green-500 hover:bg-green-50 hover:text-green-600"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    B1
                  </Button>
                </div>
                
                <div className="relative w-full">
                  <canvas 
                    ref={canvasRef} 
                    className="h-[400px] w-full rounded-md border"
                  />
                  
                  <div className="mt-4 flex items-center justify-center">
                    <Button
                      variant="outline"
                      onClick={() => setShowSubLoops(!showSubLoops)}
                      className="text-sm"
                    >
                      {showSubLoops ? "Hide Sub-Loops" : "Show Sub-Loops"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Loop Details</CardTitle>
                <CardDescription>
                  Understanding the system dynamics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue={activeLoop} value={activeLoop} onValueChange={setActiveLoop}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="r1" className="flex items-center gap-1">
                      <RefreshCw className="h-4 w-4 text-red-500" />
                      R1
                    </TabsTrigger>
                    <TabsTrigger value="r2" className="flex items-center gap-1">
                      <RefreshCw className="h-4 w-4 text-blue-500" />
                      R2
                    </TabsTrigger>
                    <TabsTrigger value="b1" className="flex items-center gap-1">
                      <RotateCcw className="h-4 w-4 text-green-500" />
                      B1
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="r1" className="mt-4 space-y-4">
                    <h4 className="font-medium">Administrative Barrier Loop (R1)</h4>
                    <p className="text-sm">
                      This reinforcing loop shows how administrative barriers can limit interdisciplinary learning:
                    </p>
                    <ul className="ml-6 list-disc space-y-2 text-sm">
                      <li>
                        <span className="font-medium">Interdisciplinary Learning</span> requires 
                        <span className="font-medium"> Administrative Support</span> <ArrowUpRight className="inline h-4 w-4 text-red-500" />
                      </li>
                      <li>
                        <span className="font-medium">Administrative Support</span> influences 
                        <span className="font-medium"> Student Demand</span> <ArrowUpRight className="inline h-4 w-4 text-red-500" />
                      </li>
                      <li>
                        <span className="font-medium">Student Demand</span> drives more 
                        <span className="font-medium"> Interdisciplinary Learning</span> <ArrowUpRight className="inline h-4 w-4 text-red-500" />
                      </li>
                    </ul>
                    <p className="text-sm italic">
                      This loop can either amplify growth or decline in interdisciplinary education depending on initial conditions.
                    </p>
                  </TabsContent>
                  
                  <TabsContent value="r2" className="mt-4 space-y-4">
                    <h4 className="font-medium">Student Demand Loop (R2)</h4>
                    <p className="text-sm">
                      This reinforcing loop demonstrates how student interest drives interdisciplinary education:
                    </p>
                    <ul className="ml-6 list-disc space-y-2 text-sm">
                      <li>
                        <span className="font-medium">Interdisciplinary Learning</span> increases 
                        <span className="font-medium"> Student Demand</span> <ArrowUpRight className="inline h-4 w-4 text-blue-500" />
                      </li>
                      <li>
                        <span className="font-medium">Student Demand</span> influences 
                        <span className="font-medium"> Regulatory Push</span> <ArrowUpRight className="inline h-4 w-4 text-blue-500" />
                      </li>
                      <li>
                        <span className="font-medium">Regulatory Push</span> supports more 
                        <span className="font-medium"> Interdisciplinary Learning</span> <ArrowUpRight className="inline h-4 w-4 text-blue-500" />
                      </li>
                    </ul>
                    <p className="text-sm italic">
                      This loop shows how student interest can create momentum for interdisciplinary programs when properly supported.
                    </p>
                  </TabsContent>
                  
                  <TabsContent value="b1" className="mt-4 space-y-4">
                    <h4 className="font-medium">Regulatory Push Loop (B1)</h4>
                    <p className="text-sm">
                      This balancing loop shows how regulatory policies like NEP 2020 influence the system:
                    </p>
                    <ul className="ml-6 list-disc space-y-2 text-sm">
                      <li>
                        <span className="font-medium">Regulatory Push</span> promotes 
                        <span className="font-medium"> Interdisciplinary Learning</span> <ArrowUpRight className="inline h-4 w-4 text-green-500" />
                      </li>
                      <li>
                        <span className="font-medium">Interdisciplinary Learning</span> requires 
                        <span className="font-medium"> Administrative Support</span> <ArrowUpRight className="inline h-4 w-4 text-green-500" />
                      </li>
                      <li>
                        <span className="font-medium">Administrative Support</span> reduces need for 
                        <span className="font-medium"> Regulatory Push</span> <ArrowDownRight className="inline h-4 w-4 text-green-500" />
                      </li>
                    </ul>
                    <p className="text-sm italic">
                      This loop helps stabilize the system by balancing regulatory intervention with institutional adoption.
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
