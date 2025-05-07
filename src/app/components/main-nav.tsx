"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BookOpen, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMobile } from "@/hooks/use-mobile";

export function MainNav() {
  const isMobile = useMobile();
  const [isOpen, setIsOpen] = React.useState(false);

  const items = [
    { href: "#problem-framing", label: "Problem Framing" },
    { href: "#cld-diagram", label: "CLD Diagram" },
    { href: "#eps-analysis", label: "EPS Analysis" },
    { href: "#leverage-points", label: "Leverage Points" },
    { href: "#systems-archetypes", label: "Systems Archetypes" },
    { href: "#data-dashboard", label: "Data Dashboard" },
  ];

  if (isMobile) {
    return (
      <div className="flex w-full items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6" />
          <span className="font-bold">Systems Thinking</span>
        </Link>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col space-y-4 py-4">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    );
  }

  return (
    <div className="flex min-w-screen items-center justify-between p-5">
      <Link href="/" className="flex items-center space-x-2">
        <BookOpen className="h-6 w-6" />
        <span className="font-bold">Systems Thinking</span>
      </Link>
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "transition-colors hover:text-foreground/80",
              "text-foreground/60"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
