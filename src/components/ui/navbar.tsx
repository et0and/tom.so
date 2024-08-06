"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  if (pathname?.startsWith("/keystatic")) {
    return null;
  }
  return (
    <div className="flex sticky items-center tracking-tighter justify-between h-8 px-6 pt-6 bg-white">
      <Link
        className="text-lg font-medium focus-visible:outline-offset-2 focus-visible:outline-blue-700 outline-transparent focus-visible:border-blue-700 border-transparent border-2 hover:underline hover:text-blue-700 transition-colors duration-100"
        href="/"
      >
        <h1 className="md:block hidden">Tom Hackshaw</h1>
        <div className="md:hidden block focus-visible:outline-offset-2 focus-visible:outline-blue-700 outline-transparent focus-visible:border-blue-700 border-transparent border-2 hover:underline hover:text-blue-700 transition-colors duration-100 w-7 h-7 bg-black rounded-full">
          <h1 className="sr-only">Tom Hackshaw</h1>
        </div>
      </Link>
      <nav className="flex md:items-center space-x-4 text-lg">
        <Link
          prefetch={true}
          className="focus-visible:outline-offset-2 focus-visible:outline-blue-700 outline-transparent focus-visible:border-blue-700 border-transparent border-2 hover:underline hover:text-blue-700 transition-colors duration-100"
          href="/about"
        >
          About
        </Link>
        <Link
          prefetch={true}
          className="focus-visible:outline-offset-2 focus-visible:outline-blue-700 outline-transparent focus-visible:border-blue-700 border-transparent border-2 hover:underline hover:text-blue-700 transition-colors duration-100"
          href="/work"
        >
          Work
        </Link>
        <Link
          prefetch={true}
          className="focus-visible:outline-offset-2 focus-visible:outline-blue-700 outline-transparent focus-visible:border-blue-700 border-transparent border-2 hover:underline hover:text-blue-700 transition-colors duration-100"
          href="/posts"
        >
          Writing
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
