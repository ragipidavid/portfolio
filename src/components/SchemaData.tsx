import Script from 'next/script';

export default function SchemaData() {
    return (
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
    );
} 