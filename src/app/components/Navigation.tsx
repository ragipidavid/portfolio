import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="mt-12 md:absolute md:bottom-16 md:left-16">
      <ul className="space-y-4 md:space-y-6 text-center md:text-left">
        <li>
          <Link
            href="/contact"
            className="text-2xl md:text-3xl hover:underline"
          >
            Contact Me
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="text-2xl md:text-3xl hover:underline"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link href="/resume" className="text-2xl md:text-3xl hover:underline">
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}
