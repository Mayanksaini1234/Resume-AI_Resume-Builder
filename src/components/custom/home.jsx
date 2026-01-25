import { Link } from "react-router-dom";
import Footer from "@/components/custom/footer";
import {
  AtomIcon,
  Edit,
  Share2,
  Sparkles,
  CheckCircle2,
  Zap,
  Star,
  Users,
  FileText,
  ChevronDown,
  Download,
  ChevronUp,
} from "lucide-react";
import React, { useState } from "react";

function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How does the AI resume builder work?",
      answer:
        "You enter your details, and our AI instantly turns them into a clean, professional resume. It improves wording, adds strong action verbs, and optimizes keywords so your resume looks great and works well with ATS.",
    },
    {
      question: "Is my data safe and private?",
      answer:
        "Yes. Your data is encrypted and stored securely. We never sell or share your personal information with third parties.",
    },
    {
      question: "Can I edit and customize my resume?",
      answer:
        "Yes! You can fully customize your resume anytime—edit text, change sections, and adjust the layout to match your style.",
    },
    {
      question: "Can I download my resume as a PDF?",
      answer:
        "Yes, you can preview your resume in real time and download it instantly as a high-quality PDF.",
    },
    {
      question: "Will this resume work for ATS?",
      answer:
        "Yes. Our builder formats your resume in an ATS-friendly way and helps you include the right keywords to improve your chances of getting shortlisted.",
    },
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A]">
      {/* Hero Section */}
      <section className="relative py-32 px-6 max-w-screen-xl mx-auto text-center lg:py-40 lg:px-12">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(120,119,198,0.1)_0%,_transparent_50%)]"></div>
        </div>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight leading-tight text-white md:text-6xl lg:text-7xl">
          Build Your Resume{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-purple-400 to-purple-600">
            With AI
          </span>
        </h1>
        <p className="mb-10 max-w-3xl mx-auto text-xl font-normal text-[#BBBBBB] lg:text-2xl">
          Take control of your career, stay focused, and achieve more with every resume you build.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/dashboard"
            className="group relative inline-flex items-center justify-center px-12 py-5 text-lg font-bold text-[#0A0A0A] bg-white rounded-xl hover:bg-gray-50 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-2xl shadow-white/30 hover:shadow-2xl hover:shadow-white/50 overflow-hidden"
          >
            <span className="relative z-10 transition-all duration-300 group-hover:tracking-wider flex items-center gap-2">
              Get Started
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/25 to-transparent"></div>
            {/* Gradient glow overlay */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-indigo-500/0 to-pink-500/0 group-hover:from-purple-500/12 group-hover:via-indigo-500/12 group-hover:to-pink-500/12 transition-all duration-700"></div>
            {/* Subtle pulse on hover */}
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 group-hover:animate-pulse-subtle bg-white/8"></div>
            {/* Glowing border */}
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500"></div>
            {/* Background glow effect */}
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-500/0 via-indigo-500/0 to-pink-500/0 group-hover:from-purple-500/20 group-hover:via-indigo-500/20 group-hover:to-pink-500/20 blur-md transition-all duration-700 -z-10"></div>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-[#0A0A0A]">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-white tracking-wide">
              Build Resumes at Your Fingertips
            </h2>
            <p className="text-lg text-[#BBBBBB]">
              Say goodbye to delays, hello to instant resume creation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-sm text-[#BBBBBB] mb-2">Resumes Created</div>
              <div className="text-6xl font-bold text-white mb-2">30+</div>
              <div className="text-sm text-[#BBBBBB]">Trusted by users</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-[#BBBBBB] mb-2">Generation Speed</div>
              <div className="text-6xl font-bold text-white mb-2">0.5s</div>
              <div className="text-sm text-[#BBBBBB]">Lightning-fast results</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-[#BBBBBB] mb-2">Efficiency</div>
              <div className="text-6xl font-bold text-white mb-2">10x</div>
              <div className="text-sm text-[#BBBBBB]">Redefining speed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Visualization Section */}
      <section className="py-20 px-6 bg-[#0A0A0A] flex justify-center items-center">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
              <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                Create Resumes <br /> Without
                the Hassle
              </h2>
              <Link
                to="/dashboard"
                className="group inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/20"
              >
                Start Your Career Journey
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <div className="lg:col-span-2">
              
              <div className="bg-[#1A1A1A] rounded-xl p-8 border border-[#2A2A2A] relative overflow-hidden">
                {/* Background gradient effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>

                <div className="mb-6 relative z-10">
                  <div className="text-sm text-[#BBBBBB] font-medium mb-1">Your Career Path</div>
                  <div className="text-2xl font-bold text-white mb-2">Follow These Steps</div>
                  <div className="text-sm text-[#BBBBBB]">Complete each step to advance your career</div>
                </div>

                <div className="space-y-4 relative z-10">
                  {[
                    { step: 1, label: "Open Resume Builder", status: "complete", progress: 100 },
                    { step: 2, label: "Login / Sign Up", status: "complete", progress: 100 },
                    { step: 3, label: "Fill Your Details", status: "complete", progress: 75 },
                    { step: 4, label: "Use AI to Improve", status: "complete", progress: 0 },
                    { step: 5, label: "Download PDF", status: "in-progress", progress: 0 },
                  ]
                    .map((item, i) => (
                      <div key={i} className="relative">
                        {/* Connecting line */}
                        {i < 4 && (
                          <div className={`absolute left-6 top-12 w-0.5 h-12 ${item.status === 'complete' ? 'bg-gradient-to-b from-green-500 to-purple-500' : 'bg-[#2A2A2A]'
                            }`}></div>
                        )}

                        <div className={`flex items-start gap-4 p-4 rounded-lg border transition-all duration-300 ${item.status === 'complete'
                          ? 'bg-[#1A2A1A]/50 border-green-500/30'
                          : item.status === 'in-progress'
                            ? 'bg-[#1A1A2A]/50 border-purple-500/30'
                            : 'bg-[#1A1A1A] border-[#2A2A2A]'
                          }`}>
                          {/* Step number */}
                          <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${item.status === 'complete'
                            ? 'bg-gradient-to-br from-green-500 to-emerald-500 text-white'
                            : item.status === 'in-progress'
                              ? 'bg-gradient-to-br from-purple-500 to-indigo-500 text-white'
                              : 'bg-[#2A2A2A] text-[#BBBBBB] border border-[#444444]'
                            }`}>
                            {item.status === 'complete' ? (
                              <CheckCircle2 className="w-6 h-6" />
                            ) : (
                              item.step
                            )}
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <h3 className={`text-base font-semibold ${item.status === 'complete' ? 'text-green-400' : item.status === 'in-progress' ? 'text-purple-400' : 'text-white'
                                }`}>
                                {item.label}
                              </h3>
                              {item.status === 'in-progress' && (
                                <span className="text-xs text-purple-400 font-medium">{item.progress}%</span>
                              )}
                            </div>
                            <p className="text-sm text-[#BBBBBB] mb-2">{item.description}</p>

                            {/* Progress bar for in-progress items */}
                            {item.status === 'in-progress' && (
                              <div className="w-full h-1.5 bg-[#2A2A2A] rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full transition-all duration-700"
                                  style={{ width: `${item.progress}%` }}
                                >
                                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

              
              </div>
            </div>
           
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-20 px-6 bg-[#0A0A0A]">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
              Frequently Asked
              <br />
              Questions
            </h2>
            <p className="text-lg text-[#BBBBBB]">
              Have another question? Please contact our team!
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="w-full text-left p-6 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] hover:bg-[#2A2A2A] transition-all duration-300 group"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-white">
                      {faq.question}
                    </h3>
                    <div className="flex items-center">
                      {openFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-white transition-all duration-300" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-white transition-all duration-300" />
                      )}
                    </div>
                  </div>
                  <div
                    className={`grid transition-all duration-300 ${openFaq === index ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-base text-[#BBBBBB]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Banner Container */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-screen-xl mx-auto">
          <div className="rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`
            }}></div>
            <div className="relative z-10">
              <h2 className="text-5xl font-bold text-white mb-6 leading-tight">
                Build Smarter with the
                <br />
                Resume Builder Built for Success
              </h2>
              <p className="text-lg text-[#BBBBBB] mb-8 max-w-2xl mx-auto">
                Create resumes, optimize content, and land interviews faster with ease
              </p>
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-medium text-[#0A0A0A] bg-white rounded-lg hover:bg-gray-100 transition-all"
              >
                Get Started Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
