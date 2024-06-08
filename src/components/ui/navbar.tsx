import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu";

function Navbar() {
  return (
    <div className="flex items-center justify-between h-8 px-6 bg-white">
      <Link className="text-lg font-medium hover:text-blue-700" href="/">
        Tom Hackshaw
      </Link>
      <nav className="flex md:items-center space-x-4 text-lg font-base">
        <Link className="underline hover:text-blue-700" href="#">
          About
        </Link>
        <Link className="underline hover:text-blue-700" href="#">
          Work
        </Link>
        <Link className="underline hover:text-blue-700" href="#">
          Writing
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;