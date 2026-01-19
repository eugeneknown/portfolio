"use client";

import React from "react";
import Image from "next/image";


export default function CVPage() {
  return (
    <div className="bg-white text-black min-h-screen p-8 sm:p-16 print:p-0 print:bg-white print:text-black">
      {/* Print-specific styles to ensure it looks like a document */}
      <style>{`
        @media print {
          @page { margin: 0.5cm; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; background: white; }
          .no-print { display: none !important; }
          .print-break { page-break-before: always; }
          a { text-decoration: none; color: black; }
        }
      `}</style>

      {/* Download Button (Hidden in Print) */}
      <div className="max-w-4xl mx-auto mb-8 text-right no-print">
        <button
          className="bg-slate-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-800 transition shadow-lg"
          onClick={() => {
              if (typeof window !== 'undefined') window.print();
          }}
        >
          Print / Save as PDF
        </button>
      </div>

      {/* CV Container */}
      <main className="max-w-4xl mx-auto bg-white shadow-2xl print:shadow-none print:w-full print:max-w-none p-8 sm:p-12 md:p-16 rounded-lg border border-gray-100 print:border-none">
        
        {/* Header */}
        <header className="border-b-2 border-gray-800 pb-6 mb-8 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
                <div className="w-24 h-24 sm:w-32 sm:h-32 relative overflow-hidden rounded-full border-4 border-slate-200 shadow-md flex-shrink-0">
                    <Image 
                        src="/profile.jpg"
                        alt="Eugene P. Gardose"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div>
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight uppercase mb-2 text-slate-900">
                        Eugene P. Gardose
                    </h1>
                    <h2 className="text-xl sm:text-2xl text-slate-600 font-medium tracking-wide">
                        Full Stack Developer
                    </h2>
                </div>
            </div>
            <div className="w-full sm:w-auto mt-4 sm:mt-0 flex flex-col items-start sm:items-end justify-center text-sm sm:text-base text-gray-600">
                <div className="grid grid-cols-[auto_1fr] gap-x-3 text-left">
                    <span className="font-semibold text-right">Email:</span>
                    <span>eugenegardose@gmail.com</span>
                    
                    <span className="font-semibold text-right">Phone:</span>
                    <span>+63 947 781 3439</span>
                    
                    <span className="font-semibold text-right">Address:</span>
                    <span>Zone 3, St. Jude Buhangin, Davao City</span>
                </div>
            </div>
        </header>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            
            {/* Left Sidebar (Skills & Personal) */}
            <div className="md:col-span-1 space-y-8">
                
                {/* Profile */}
                <section>
                    <h3 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-3 text-slate-800">
                        Profile
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed text-justify">
                        Passionate Full Stack Developer with 3+ years of experience in building robust web applications. 
                        Proven ability to deliver high-quality solutions using modern technologies like React, Next.js, and Python.
                        Thrives in proactive environments that encourage innovation.
                    </p>
                </section>

                {/* Skills */}
                <section>
                    <h3 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-3 text-slate-800">
                        Skills
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold text-sm text-slate-700 mb-1">Languages</h4>
                            <p className="text-sm text-gray-600">JavaScript (ES6+), TypeScript, PHP, C#, Python, HTML5, CSS3</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-slate-700 mb-1">Frontend</h4>
                            <p className="text-sm text-gray-600">React, Next.js, Angular, Tailwind CSS, Framer Motion</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-slate-700 mb-1">Backend & Cloud</h4>
                            <p className="text-sm text-gray-600">Node.js, Django, Microservices, GCP (Google Cloud), MySQL, MariaDB, PostgreSQL</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-slate-700 mb-1">Tools</h4>
                            <p className="text-sm text-gray-600">Git, Docker, Postman, VS Code</p>
                        </div>
                    </div>
                </section>

                {/* Personal Info */}
                <section>
                    <h3 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-3 text-slate-800">
                        Personal Info
                    </h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                        <li><span className="font-semibold text-gray-700">Age:</span> 27 years old</li>
                        <li><span className="font-semibold text-gray-700">Civil Status:</span> Single</li>
                        <li><span className="font-semibold text-gray-700">Nationality:</span> Filipino</li>
                    </ul>
                </section>
            </div>

            {/* Right Main Content (Experience & Education) */}
            <div className="md:col-span-2 space-y-8">
                
                {/* Experience */}
                <section>
                    <h3 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-4 text-slate-800 tracking-wider">
                        Work Experience
                    </h3>
                    
                    <div className="mb-6">
                        <div className="flex justify-between items-baseline mb-1">
                            <h4 className="text-xl font-bold text-slate-900">Full Stack Developer</h4>
                            <span className="text-sm font-semibold text-teal-600">April 2022 - Present</span>
                        </div>
                        <h5 className="text-md font-semibold text-slate-700 mb-2">Eighty20 Virtual, Inc.</h5>
                        <ul className="list-disc list-outside ml-4 text-sm text-gray-600 space-y-1.5 leading-relaxed">
                            <li>Developing and maintaining scalable web applications using React, Next.js, and Node.js.</li>
                            <li>Managing cloud infrastructure on Google Cloud Platform (GCP).</li>
                            <li>Building and integrating RESTful APIs using Python (Django) and Node.js.</li>
                            <li>Collaborating with cross-functional teams to ensure high-quality software delivery.</li>
                            <li>Optimizing database performance and ensuring data integrity.</li>
                        </ul>
                    </div>
                </section>

                {/* Education */}
                <section>
                    <h3 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-4 text-slate-800 tracking-wider">
                        Education
                    </h3>
                    
                    <div className="mb-6">
                        <div className="flex justify-between items-baseline mb-1">
                            <h4 className="text-lg font-bold text-slate-900">Bachelor of Science in Information Technology</h4>
                            <span className="text-sm font-semibold text-slate-500">Aug 2021</span>
                        </div>
                        <h5 className="text-md text-slate-700">STI College of Davao</h5>
                    </div>

                    <div className="mb-6">
                        <div className="flex justify-between items-baseline mb-1">
                            <h4 className="text-lg font-bold text-slate-900">Secondary Education</h4>
                            <span className="text-sm font-semibold text-slate-500">2014</span>
                        </div>
                        <h5 className="text-md text-slate-700">Davao Wisdom Academy</h5>
                    </div>
                </section>
                
                 {/* References */}
                <section>
                    <h3 className="text-lg font-bold uppercase border-b border-gray-300 pb-1 mb-4 text-slate-800 tracking-wider">
                        References
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-bold text-slate-900">Raymond Palayon</h4>
                            <p className="text-sm text-slate-600">Muban Chombueng Rajabhat University (MCRU)</p>
                            <p className="text-sm text-slate-500">+63 905 554 5259</p>
                        </div>
                    </div>
                </section>
                
                {/* Certification */}
                <div className="mt-8 pt-4 border-t border-gray-200 text-center">
                    <p className="text-xs text-gray-400 italic">
                        I, the undersigned, certify that to the best of my knowledge and belief, this resume correctly describes my qualifications, my experience, and myself.
                    </p>
                    <p className="mt-4 text-sm font-bold text-slate-900 uppercase">Eugene P. Gardose</p>
                </div>

            </div>
        </div>
      </main>
    </div>
  );
}
