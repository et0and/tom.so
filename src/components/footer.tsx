import Link from "next/link"

export default function Component() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-transparent py-6 text-sm text-black dark:text-gray-400">
      <div className="container mx-auto px-4 md:px-6">
        <p>
          &copy; {currentYear}.{" "}
          <Link href="#" className="underline hover:text-gray-700 dark:hover:text-gray-300" prefetch={false}>
            Accessibility
          </Link>
          . This site is part of a{" "}
          <Link href="#" className="underline hover:text-gray-700 dark:hover:text-gray-300" prefetch={false}>
            webring
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}