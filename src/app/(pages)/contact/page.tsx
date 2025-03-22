import React from "react";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with David Ragipi for collaboration, job opportunities, or questions about software engineering projects.",
};

const ContactPage = () => {
  return (
    <main>
      <div className="md:pt-32 md:pl-40 max-w-4xl">
        <h1 className="text-6xl font-medium mb-12">Contact Me</h1>

        <div className="space-y-8 text-xl">
          <p>
            I&apos;m always open to discussing new projects, opportunities, or
            collaborations. Feel free to reach out through any of the following
            methods:
          </p>

          <div className="space-y-4">
            <div>
              <h2 className="text-2xl mb-2">Email</h2>
              <p>
                <a
                  href="mailto:davidragipi@gmail.com"
                  className="text-gray-500 hover:underline"
                >
                  davidragipi@gmail.com
                </a>
              </p>
              <h2 className="text-2xl mt-6 mb-2">LinkedIn</h2>
              <p>
                <a
                  href="https://www.linkedin.com/in/david-ragipi-481b381aa/"
                  className="text-gray-500 hover:underline"
                >
                  linkedin.com/in/david-ragipi
                </a>
              </p>
              <h2 className="text-2xl mt-6 mb-2">X</h2>
              <p>
                <a
                  href="https://x.com/DavidRagipi"
                  className="text-gray-500 hover:underline"
                >
                  x.com/DavidRagipi
                </a>
              </p>
              <h2 className="text-2xl mt-6 mb-2">Github</h2>
              <p>
                <a
                  href="https://github.com/ragipidavid"
                  className="text-gray-500 hover:underline"
                >
                  github.com/ragipidavid
                </a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
