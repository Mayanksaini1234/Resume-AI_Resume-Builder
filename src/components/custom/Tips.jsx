import React, { useEffect, useState } from 'react';

const Tips = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tips = [
    { bold: "Live Project Links:", desc: "Showcase real-world projects with working URLs to demonstrate your skills." },
    { bold: "ATS Verified:", desc: "Ensure your resume formatting and keywords pass Applicant Tracking Systems." },
    { bold: "Proper Keywords:", desc: "Incorporate relevant, job-specific keywords naturally for maximum impact." },
    { bold: "One Page Only:", desc: "Keep your resume concise and focused within a single page." },
    { bold: "Shareable Link:", desc: "Generate and share a unique URL for easy access and distribution." },
    { bold: "Highlight Key Points:", desc: "Use clean bullet points and bold text to emphasize important info." },
    { bold: "Avoid:", desc: "Tables, images, and buzzwords such as “hardworking” or “sincere” — focus on clear, effective content." },
  ];

  return (
    <div className='flex justify-center items-center'>
    <section
      aria-label="Resume best practices tips"
      className={`max-w-4xl mx-auto p-8 md:p-12 bg-white rounded-2xl shadow-xl border border-gray-300 m-6 md:m-12 transition-opacity duration-700 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-10 text-center tracking-tight relative">
        Resume Best Practices
        <span className="block mx-auto mt-3 w-28 h-1 rounded-full bg-gray-800 shadow-md"></span>
      </h2>

      <p className="text-center text-gray-700 mb-14 text-lg leading-relaxed max-w-3xl mx-auto font-light tracking-wide">
        Follow these essential tips to craft a resume that stands out to recruiters and easily passes ATS screening.
      </p>

      <ul className="space-y-7">
        {tips.map(({ bold, desc }, idx) => (
          <li
            key={idx}
            className="flex items-start space-x-4 group cursor-default"
          >
            <div className="flex-shrink-0 mt-2 w-6 h-6 rounded-full bg-gray-900 shadow-lg group-hover:bg-gray-700 group-hover:scale-110 transition-transform transition-colors duration-300"></div>
            <p className="text-gray-900 text-lg leading-relaxed font-medium">
              <span className="font-bold">{bold}</span> {desc}
            </p>
          </li>
        ))}
      </ul>
    </section>
    </div>
  );
};

export default Tips;
