import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex items-center tracking-tighter justify-between px-2 bg-white pt-4 lg:text-md sm:text-lg text-sm text-black">
      <p>
        &copy; {currentYear}{" "}
        <Link
          href="/accessibility"
          className="underline hover:text-blue-700 transition-colors duration-200"
          prefetch={false}
        >
          Accessibility
        </Link>
        . This site is part of a{" "}
        <Link
          href="https://webring.xxiivv.com/#random"
          className="underline hover:text-blue-700 transition-colors duration-200"
          prefetch={false}
        >
          webring
        </Link>
        .
      </p>
    </footer>
  );
}

export default Footer;
