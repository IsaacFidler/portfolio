import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-6">
            <Button variant="ghost" size="sm" asChild>
              <Link
                href="https://github.com/IsaacFidler"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link
                href="https://www.linkedin.com/in/isaac-fidler/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="mailto:zac.fidler2@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Isaac Fidler. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
