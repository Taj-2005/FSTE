import Link from "next/link";
import { BookOpen } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0 min-w-screen">
      <div className="container flex flex-col items-center justify-between md:h-24 md:flex-row min-w-screen p-5">
        <div className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          <p className="text-sm text-muted-foreground">
            © 2025 Systems Thinking Platform. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            Contact
          </Link>
          <Link
            href="#"
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            Privacy
          </Link>
        </div>
      </div>
      <div className="mt-12">
      </div>
    </footer>
  );
}
