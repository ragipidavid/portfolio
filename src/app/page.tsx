"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import MobileMenu from "@/components/MobileMenu";
import Navigation from "@/components/Navigation";
import ProfileImage from "@/components/ProfileImage";
import SchemaData from "@/components/SchemaData";

export default function Home() {
  // State to track if the mobile menu is open
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // State to track viewport width
  const [isMobile, setIsMobile] = useState(false);

  // Effect to handle resize and set initial mobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className="min-h-screen bg-background font-mono relative">
      <SchemaData />

      <MobileMenu isOpen={mobileMenuOpen} toggleMenu={toggleMenu} />

      <div className="container mx-auto px-4 md:px-12 py-8 md:py-12 relative">
        <ProfileImage />

        {/* Heading */}
        <h1 className="text-5xl md:text-8xl font-medium mb-8 md:mb-16 text-center md:text-left md:pl-40 pt-4 md:pt-20 pb-6 md:pb-10">
          Hi, <br />I&apos;m David Ragipi.
        </h1>

        {/* Main Content */}
        <main className="max-w-6xl space-y-6 md:space-y-12 text-2xl md:text-4xl text-center md:text-left md:pl-40">
          <p>
            I&apos;m a software engineer with a passion for building scalable and efficient systems. I&apos;m currently working on a project to help people get their dream jobs.
          </p>
          <p>Check it out <a href="https://interviewaibuddy.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">here</a></p>
        </main>

        <Navigation />


      </div>
    </div>
  );
}

