import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu";
import { JSX, SVGProps } from "react";

export function Navbar() {
  return (
    <div className="flex items-center justify-between h-16 px-4 bg-white dark:bg-gray-950 dark:text-gray-50 md:px-6">
      <Link className="text-lg font-medium" href="/">
        Tom Hackshaw
      </Link>
      {/* Show links on larger screens */}
      <nav className="hidden md:flex md:items-center md:space-x-4">
        <Link className="hover:text-gray-600 dark:hover:text-gray-400" href="#">
          About
        </Link>
        <Link className="hover:text-gray-600 dark:hover:text-gray-400" href="#">
          Projects
        </Link>
      </nav>
      {/* Show hamburger menu on smaller screens */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="rounded-full" size="icon" variant="ghost">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link className="flex items-center gap-2" href="#">
                About
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className="flex items-center gap-2" href="#">
                Projects
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}