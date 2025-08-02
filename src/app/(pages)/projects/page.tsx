import React from "react";

export const metadata = {
  title: "Projects",
  description:
    "Explore David Ragipi's software engineering projects and portfolio work.",
};

const ProjectsPage = () => {
  return (
    <main>
      <div className="md:pt-32 md:pl-40 max-w-4xl">
        <h1 className="text-6xl font-medium mb-12">Projects</h1>

        <div className="space-y-8 text-xl">
          <p>Here are some of the projects I&apos;ve worked on.</p>

          <div className="space-y-4">
            <div>
              <h2 className="text-2xl mb-2">Interview Buddy</h2>

            </div>
            <div>
              <h2 className="text-2xl mb-2">Contributing at</h2>
              <p>
                <a
                  href="https://openlibrary.org/"
                  className="text-gray-500 hover:underline"
                >
                  openlibrary.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
