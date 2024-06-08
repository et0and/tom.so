import Link from "next/link";

function Navbar() {
  return (
    <div className="flex items-center tracking-tighter justify-between h-8 px-6 bg-white">
      <Link className="text-lg font-medium hover:text-blue-700" href="/">
        Tom Hackshaw
      </Link>
      <nav className="flex md:items-center space-x-4 text-lg font-base">
        <Link className="underline hover:text-blue-700" href="/about">
          About
        </Link>
        <Link className="underline hover:text-blue-700" href="/work">
          Work
        </Link>
        <Link className="underline hover:text-blue-700" href="/posts">
          Writing
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
