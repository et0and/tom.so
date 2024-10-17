"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  if (pathname?.startsWith("/keystatic")) {
    return null;
  }
  return (
    <nav className="flex items-center tracking-tighter justify-between h-8 px-6 pt-6 dark:bg-stone-900">
      <Link
        className="text-lg font-medium focus-visible:outline-offset-2 focus-visible:outline-blue-700 outline-transparent focus-visible:border-blue-700 border-transparent border-2 hover:underline hover:text-blue-700 dark:hover:text-teal-200 transition-colors duration-100"
        href="/"
      >
        <h1 className="md:block hidden">Tom Hackshaw</h1>
        <div className="md:hidden block focus-visible:outline-offset-2 focus-visible:outline-blue-700 outline-transparent focus-visible:border-blue-700 border-transparent border-2 hover:underline hover:text-blue-700 dark:hover:text-teal-200 transition-colors duration-100 w-7 h-7 bg-black dark:bg-white rounded-full">
          <h1 className="sr-only">Tom Hackshaw</h1>
        </div>
      </Link>
      <div className="flex md:items-center space-x-4 text-lg">
        <Link
          className="focus-visible:outline-offset-2 focus-visible:outline-blue-700 outline-transparent focus-visible:border-blue-700 border-transparent border-2 hover:underline hover:text-blue-700 dark:hover:text-teal-200 transition-colors duration-100"
          href="/about"
        >
          About
        </Link>
        <Link
          className="focus-visible:outline-offset-2 focus-visible:outline-blue-700 outline-transparent focus-visible:border-blue-700 border-transparent border-2 hover:underline hover:text-blue-700 dark:hover:text-teal-200 transition-colors duration-100"
          href="/work"
        >
          Work
        </Link>
        <Link
          className="focus-visible:outline-offset-2 focus-visible:outline-blue-700 outline-transparent focus-visible:border-blue-700 border-transparent border-2 hover:underline hover:text-blue-700 dark:hover:text-teal-200 transition-colors duration-100"
          href="/posts"
        >
          Writing
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
