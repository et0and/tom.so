import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex items-center tracking-tighter justify-between px-6 dark:bg-stone-900 dark:text-white py-4 lg:text-md sm:text-lg text-sm text-black">
      <p>
        &copy; {currentYear}{" "}
        <Link href="/accessibility" className="link" prefetch={true}>
          Accessibility
        </Link>
        . This site is part of a{" "}
        <Link
          href="https://webring.xxiivv.com/#random"
          className="link"
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
