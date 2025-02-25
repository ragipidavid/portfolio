import Link from "next/link";
import Image from "next/image";
import Script from 'next/script';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-mono relative">
      <Script id="schema-person" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "David Ragipi",
            "url": "https://davidragipi.com",
            "jobTitle": "Software Engineer",
            "description": "Software engineer with a passion for building scalable and efficient systems",
            "sameAs": [
              "https://interviewaibuddy.com"
              // Add your LinkedIn, GitHub, etc. if you have them
            ]
          }
        `}
      </Script>
      <div className="container mx-auto px-12 py-12 pl-40 pt-20">
        {/* Left Side Image - Top Corner */}
        <div className="absolute left-16 top-30">
          <Image
            src="/IMG_3561.jpeg"
            alt="Decorative left image"
            width={250}
            height={250}
            className="object-cover rounded-md" // Adjust size as needed
          />
        </div>

        <h1 className="text-8xl font-medium md:text-8xl mb-16 pl-40 pt-20 pb-10">
          Hi, <br />I&apos;m David Ragipi.
        </h1>

        {/* Main Content */}
        <main className="max-w-6xl space-y-12 text-4xl pl-40">
          <p>
            I&apos;m a software engineer with a passion for building scalable and efficient systems. I&apos;m currently working on a project to help people get their dream jobs.
          </p>
          <p>Check it out <a href="https://interviewaibuddy.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">here</a></p>
        </main>

        {/* Navigation - Larger text and more spacing from corner */}
        <nav className="absolute bottom-16 left-16">
          <ul className="space-y-6">
            <li>
              <Link href="/contactme" className="text-3xl hover:underline">
                Contact Me
              </Link>
            </li>
            <li>
              <a href="#gallery" className="text-3xl hover:underline">
                Gallery
              </a>
            </li>
            <li>
              <a href="#projects" className="text-3xl hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#blogs" className="text-3xl hover:underline">
                Blogs
              </a>
            </li>
          </ul>
        </nav>

        {/* Bottom Right Image */}
        <div className="absolute bottom-16 right-16">
        </div>
      </div>
    </div>
  )
}

