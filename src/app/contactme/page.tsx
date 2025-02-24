import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Contact David Ragipi | Software Engineer',
    description: 'Get in touch with David Ragipi for collaboration, job opportunities, or questions about software engineering projects.',
};

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-background font-mono p-12">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-6xl font-medium mb-12">Contact Me</h1>

                <div className="space-y-8 text-xl">
                    <p>
                        I'm always open to discussing new projects, opportunities, or collaborations.
                        Feel free to reach out through any of the following methods:
                    </p>

                    <div className="space-y-4">
                        <div>
                            <h2 className="text-2xl mb-2">Email</h2>
                            <p><a href="mailto:davidragipi@gmail.com" className="text-gray-500 hover:underline">davidragipi@gmail.com</a></p>
                        </div>

                        {/* Add more contact methods as needed */}

                        <div className="mt-12">
                            <Link href="/" className="text-xl hover:underline">
                                ← Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;