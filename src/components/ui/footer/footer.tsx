import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex items-center tracking-tighter justify-between px-6 dark:bg-stone-900 dark:text-white py-4 lg:text-md sm:text-lg text-sm text-black">
      <p>
        &copy; {currentYear}{" "}
        <Link
          href="/accessibility"
          className="underline focus-visible:outline-offset-2 focus-visible:outline-blue-700 outline-transparent focus-visible:border-blue-700 border-transparent border-2 hover:underline hover:text-blue-700 dark:hover:text-teal-200 transition-colors duration-100"
          prefetch={true}
        >
          Accessibility
        </Link>
        . This site is part of a{" "}
        <Link
          href="https://webring.xxiivv.com/#random"
          className="underline focus-visible:outline-offset-2 focus-visible:outline-blue-700 outline-transparent focus-visible:border-blue-700 border-transparent border-2 hover:underline hover:text-blue-700 dark:hover:text-teal-200 transition-colors duration-100"
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
