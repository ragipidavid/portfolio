import React from "react";

export const metadata = {
  title: "Resume | David Ragipi",
  description:
    "View David Ragipi's resume and professional experience as a software engineer.",
};

const MePage = () => {
  return (
    <div>
      <div className="w-full  md:max-w-6xl space-y-8 md:space-y-12 text-2xl md:text-4xl md:pl-40 text-center md:text-left">
        <p>
          I&apos;m a software engineer with a passion for building software that
          helps people. I&apos;m currently working on a project to help people
          get their dream jobs.
        </p>
        <p>
          Check it out{" "}
          <a
            href="https://interviewaibuddy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:underline"
          >
            here
          </a>
        </p>
      </div>
    </div>
  );
};

export default MePage;
