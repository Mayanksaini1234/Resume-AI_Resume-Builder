import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

const Tips = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tips = [
    { 
      icon: <Sparkles className="w-6 h-6" />,
      bold: "Live Project Links", 
      desc: "Showcase real-world projects with working URLs to demonstrate your skills and practical experience."
    },
    { 
      icon: <CheckCircle2 className="w-6 h-6" />,
      bold: "ATS Verified", 
      desc: "Ensure your resume formatting and keywords pass Applicant Tracking Systems for maximum visibility."
    },
    { 
      icon: <Sparkles className="w-6 h-6" />,
      bold: "Proper Keywords", 
      desc: "Incorporate relevant, job-specific keywords naturally throughout your resume for maximum impact."
    },
    { 
      icon: <CheckCircle2 className="w-6 h-6" />,
      bold: "One Page Only", 
      desc: "Keep your resume concise and focused within a single page to maintain recruiter attention."
    },
    { 
      icon: <Sparkles className="w-6 h-6" />,
      bold: "Shareable Link", 
      desc: "Generate and share a unique URL for easy access and distribution to potential employers."
    },
    { 
      icon: <CheckCircle2 className="w-6 h-6" />,
      bold: "Highlight Key Points", 
      desc: "Use clean bullet points and bold text to emphasize important information and achievements."
    },
   
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50/50 to-white dark:from-gray-900 dark:via-indigo-950/50 dark:to-gray-900">
      <section
        aria-label="Resume best practices tips"
        className={`max-w-6xl mx-auto p-8 md:p-12 transition-all duration-700 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/50 via-transparent to-transparent dark:from-gray-900/50 -z-10"></div>
          
          <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 text-center tracking-tight">
              Resume Best Practices
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full mx-auto mt-4"></div>
            </h2>

            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg leading-relaxed max-w-3xl mx-auto">
              Follow these essential tips to craft a resume that stands out to recruiters and easily passes ATS screening.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tips.map(({ icon, bold, desc }, idx) => (
                <div
                  key={idx}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-white/80 to-white/50 dark:from-gray-800/80 dark:to-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-700"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-2 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-indigo-500/25">
                      {icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                        {bold}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                        {desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 focus:ring-4 focus:ring-indigo-500/50 dark:focus:ring-indigo-500/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25 group"
              >
                Start Building Your Resume
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tips;
