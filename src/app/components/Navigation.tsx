import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="absolute bottom-16 left-16">
            <ul className="space-y-6">
                <li>
                    <Link href="/contact" className="text-3xl hover:underline">
                        Contact Me
                    </Link>
                </li>
                <li>
                    <a href="/projects" className="text-3xl hover:underline">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="/resume" className="text-3xl hover:underline">
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
}