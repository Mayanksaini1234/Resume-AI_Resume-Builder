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
} from "lucide-react";
import React, { useState } from "react";

function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How does the AI resume builder work?",
      answer:
        "Our AI analyzes your input and generates professional content tailored to your experience and industry. It suggests powerful action verbs, optimizes keywords, and ensures your resume stands out to both ATS systems and hiring managers.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we take data security seriously. All your information is encrypted and stored securely. We never share your data with third parties.",
    },
    {
      question: "Can I customize the templates?",
      answer:
        "Absolutely! Our templates are fully customizable. You can adjust colors, fonts, layouts, and sections to match your personal brand.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-indigo-50/50 to-white dark:from-gray-900 dark:via-indigo-950/50 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative z-50 py-20 px-6 max-w-screen-xl mx-auto text-center lg:py-32 lg:px-12">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/50 via-transparent to-transparent dark:from-gray-900/50"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight leading-tight text-gray-900 md:text-6xl lg:text-7xl dark:text-white">
          Build Your Resume{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            With AI
          </span>
        </h1>
        <p className="mb-10 max-w-3xl mx-auto text-xl font-normal text-gray-600 lg:text-2xl dark:text-gray-400">
          Effortlessly craft a standout resume with our AI-powered builder — get
          noticed by employers faster.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/dashboard"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 focus:ring-4 focus:ring-indigo-500/50 dark:focus:ring-indigo-500/30 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            Get Started
            <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
          </Link>
          <Link
            to="/tips"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-gray-700 dark:text-gray-200 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Learn More
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
            <Users className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              100%{" "}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Free to Start
            </div>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
            <Star className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              4.9/5
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              User Rating
            </div>
          </div>
          <div className="text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
            <CheckCircle2 className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-4" />
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              85%
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Success Rate
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative p-6">
                <Zap className="h-10 w-10 text-indigo-600 dark:text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  AI-Powered Writing
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Smart suggestions and content optimization powered by advanced
                  AI technology.
                </p>
              </div>
            </div>
          </div>
          <div className="group p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative p-6">
                <CheckCircle2 className="h-10 w-10 text-indigo-600 dark:text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">ATS-Friendly</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Optimized for Applicant Tracking Systems to ensure your resume
                  gets noticed.
                </p>
              </div>
            </div>
          </div>
          <div className="group p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative p-6">
                <Sparkles className="h-10 w-10 text-indigo-600 dark:text-indigo-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Professional Templates
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Choose from a variety of modern, professional templates
                  designed to impress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6 max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Create your professional resume in just three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Step 1 */}
          <article className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative border rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-gray-100 dark:border-gray-700">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <AtomIcon className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Write Your Prompt
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Start by entering key details about your experience and goals.
                Our AI will help tailor your resume content perfectly.
              </p>
            </div>
          </article>

          {/* Step 2 */}
          <article className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative border rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-gray-100 dark:border-gray-700">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <Edit className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Edit Your Form
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Review and customize your details. Our smart form guides you to
                highlight your skills and achievements.
              </p>
            </div>
          </article>

          {/* Step 3 */}
          <article className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative border rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-gray-100 dark:border-gray-700">
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <Share2 className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-6" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Download & Share
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Download your ATS-friendly resume in PDF or JPEG format and
                share it easily with employers and recruiters.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              "The AI suggestions were incredibly helpful. I landed my dream job
              within weeks of using this resume builder!"
            </p>
            <div className="font-semibold text-gray-900 dark:text-white">
              Tushar Sharma
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              "The templates are professional and the AI suggestions really
              helped me highlight my achievements better."
            </p>
            <div className="font-semibold text-gray-900 dark:text-white">
              Nitish Sharma
            </div>
          </div>
          <div className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              "Best resume builder I've used. The ATS optimization feature is a
              game-changer for job applications."
            </p>
            <div className="font-semibold text-gray-900 dark:text-white">
              Rohit Saini
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Find answers to common questions about our AI-powered resume builder
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full text-left p-6 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {faq.question}
                  </h3>
                  <div className="flex items-center">
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-all duration-300 ${
                        openFaq === index ? "transform rotate-180 text-indigo-600 dark:text-indigo-400" : ""
                      }`}
                    />
                  </div>
                </div>
                <div
                  className={`grid transition-all duration-300 ${
                    openFaq === index ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600 dark:text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      </section>


      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
