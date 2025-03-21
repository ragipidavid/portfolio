import React from "react";

export const metadata = {
    title: "Resume | David Ragipi",
    description: "View David Ragipi's resume and professional experience as a software engineer.",
};

const ResumePage = () => {
    return (
        <main>
            <div className="md:pt-32 md:pl-40 max-w-4xl">
                <h1 className="text-6xl font-medium mb-12">Resume</h1>

                <div className="space-y-4 text-lg">
                    <h2 className="text-2xl font-medium">Interview Buddy</h2>
                    <p>
                        Cofounder & Software Engineer
                    </p>
                    <p>
                        January 2024 - Present
                    </p>
                </div>
                <div className="space-y-4 text-lg mt-8">
                    <h3 className="text-2xl font-medium">Radix</h3>
                    <p>
                        IT & Security Administrator
                    </p>
                    <p>
                        October 2022 - December 2024
                    </p>
                </div>
                <div className="space-y-4 text-lg mt-8">
                    <h3 className="text-2xl font-medium">CS Teaching Assistant</h3>
                    <p>
                        Arizona State University
                    </p>
                    <p>
                        January 2021 - May 2021
                    </p>
                </div>
                <div className="space-y-4 text-lg mt-10">
                    <a href="/DavidRagipi.pdf" className="text-gray-500 hover:text-gray-700 font-medium">View full resume</a>
                </div>
            </div>
        </main>
    );
};

export default ResumePage; 