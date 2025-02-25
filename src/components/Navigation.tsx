import Link from "next/link";

export default function Navigation() {
    return (
        <nav className="hidden md:block md:absolute md:bottom-16 md:left-16">
            <ul className="flex flex-col space-y-3 md:space-y-6">
                <li>
                    <Link href="/contactme" className="text-xl md:text-3xl hover:underline">
                        Contact Me
                    </Link>
                </li>
                <li>
                    <a href="#gallery" className="text-xl md:text-3xl hover:underline">
                        Gallery
                    </a>
                </li>
                <li>
                    <a href="#projects" className="text-xl md:text-3xl hover:underline">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#blogs" className="text-xl md:text-3xl hover:underline">
                        Blogs
                    </a>
                </li>
            </ul>
        </nav>
    );
} 