import Link from "next/link";

function Navbar() {
  return (
    <div className="flex items-center tracking-tighter justify-between h-8 px-6 bg-white">
      <Link
        className="text-lg font-medium hover:text-blue-700 transition-colors duration-200"
        href="/"
      >
        <h1 className="md:block hidden">Tom Hackshaw</h1>
        <div className="md:hidden block hover:bg-blue-700 w-7 h-7 bg-black rounded-full">
          <h1 className="sr-only">Tom Hackshaw</h1>
        </div>
      </Link>
      <nav className="flex md:items-center space-x-4 text-lg">
        <Link
          prefetch={true}
          className="hover:underline hover:text-blue-700 transition-colors duration-200"
          href="/about"
        >
          About
        </Link>
        <Link
          prefetch={true}
          className="hover:underline hover:text-blue-700 transition-colors duration-200"
          href="/work"
        >
          Work
        </Link>
        <Link
          prefetch={true}
          className="hover:underline hover:text-blue-700 transition-colors duration-200"
          href="/posts"
        >
          Writing
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
