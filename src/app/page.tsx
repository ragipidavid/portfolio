import React from "react";

export const metadata = {
  title: "David Ragipi | Software Engineer",
  description: "Portfolio of David Ragipi, a software engineer specializing in scalable systems and web development.",
};

export default function Home() {
  return (
    <main>
      <div>
        {/* ASCII art for larger screens */}
        <pre className="hidden min-[1539px]:block font-mono text-xs sm:text-sm md:text-base lg:text-lg mb-8 md:mb-16 text-center md:text-left overflow-hidden whitespace-pre md:pl-40 md:pt-24">
          {`

 ______   _______  __   __  ___  ______    ______    _______  _______  ___  _______  ___  
|      | |   _   ||  | |  ||   ||      |  |    _ |  |   _   ||       ||   ||       ||   | 
|  _    ||  |_|  ||  |_|  ||   ||  _    | |   | ||  |  |_|  ||    ___||   ||    _  ||   | 
| | |   ||       ||       ||   || | |   | |   |_||_ |       ||   | __ |   ||   |_| ||   | 
| |_|   ||       ||       ||   || |_|   | |    __  ||       ||   ||  ||   ||    ___||   | 
|       ||   _   | |     | |   ||       | |   |  | ||   _   ||   |_| ||   ||   |    |   | 
|______| |__| |__|  |___|  |___||______|  |___|  |_||__| |__||_______||___||___|    |___| 

`}
        </pre>

        {/* Compact ASCII art for smaller screens */}
        <pre className="max-[1539px]:block hidden font-mono text-[0.45rem] xs:text-xs sm:text-sm mb-8 text-center md:text-left overflow-hidden whitespace-pre md:mt-32 md:pl-40">
          {`
 ______   _______  __   __  ___   ______         
|      | |   _   ||  | |  ||   | |      |        
|  _    ||  |_|  ||  |_|  ||   | |  _    |       
| | |   ||       ||       ||   | | | |   |       
| |_|   ||       ||       ||   | | |_|   |       
|       ||   _   | |     | |   | |       |       
|______| |__| |__|  |___|  |___| |______|        
 ______    _______  _______  ___   _______  ___  
|    _ |  |   _   ||       ||   | |       ||   | 
|   | ||  |  |_|  ||    ___||   | |    _  ||   | 
|   |_||_ |       ||   | __ |   | |   |_| ||   | 
|    __  ||       ||   ||  ||   | |    ___||   | 
|   |  | ||   _   ||   |_| ||   | |   |    |   | 
|___|  |_||__| |__||_______||___| |___|    |___| 
`}
        </pre>
        <div className="w-full md:max-w-6xl space-y-8 md:space-y-12 text-xl md:text-3xl md:pl-40 text-center md:text-left">
          <p>
            I&apos;m a software engineer with a passion for building software
            that helps people. I&apos;m currently working on a project to help
            people get their dream jobs.
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
    </main>
  );
}
