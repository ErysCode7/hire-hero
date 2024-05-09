import Link from 'next/link'

export const Footer = () => {
  const date = new Date()
  const yearNow = date.getFullYear()

  return (
    <footer className="w-full bg-gray-100 p-6 dark:bg-transparent md:py-12">
      <div className="container flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {yearNow} HireHero Inc. All rights reserved.
        </p>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link className="text-sm underline-offset-4 hover:underline" href="#">
            Terms of Service
          </Link>
          <Link className="text-sm underline-offset-4 hover:underline" href="#">
            Privacy Policy
          </Link>
          <Link className="text-sm underline-offset-4 hover:underline" href="#">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  )
}
