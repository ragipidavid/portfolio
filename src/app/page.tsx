import React from "react";

export const metadata = {
  title: "David Ragipi | Software Engineer",
  description:
    "Portfolio of David Ragipi, a software engineer specializing in scalable systems and web development.",
};

export default function Home() {
  return (
    <main>
      <div>
        <div className="w-full md:max-w-6xl space-y-8 md:space-y-12 text-xl md:text-3xl md:pl-40 text-center md:text-left">
          <h1>Hi, I&apos;m David Ragipi</h1>
          <p>
            I&apos;m a software engineer with a passion for building software
            that helps people.
          </p>
        </div>
      </div>
    </main>
  );
}
