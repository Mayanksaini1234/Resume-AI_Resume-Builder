import { Link } from "react-router-dom";
import Footer from "@/components/custom/footer";
import { AtomIcon, Edit, Share2 } from "lucide-react";
import React from "react";

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="z-50 py-12 px-6 max-w-screen-xl mx-auto text-center lg:py-12 lg:px-12">
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white ">
          Build Your Resume <span className="text-primary">With AI</span>
        </h1>
        <p className="mb-10 max-w-3xl mx-auto text-lg font-normal text-gray-600 lg:text-xl dark:text-gray-400">
          Effortlessly craft a standout resume with our AI-powered builder — get noticed by employers faster.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white rounded-lg bg-primary hover:bg-primary-dark focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 transition"
          >
            Get Started
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white z-50 pb-12 px-6 max-w-screen-xl mx-auto text-center lg:px-12">
        <h2 className="text-3xl font-bold mb-2">How It Works</h2>
        <span className="block mx-auto mt-2 w-24 h-1 rounded-full bg-gray-700 shadow-md mb-2"></span>
        
        <p className="mb-10 text-gray-500 max-w-xl mx-auto">
          Create your professional resume in just three simple steps.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Step 1 */}
          <article className="border rounded-xl bg-white border-gray-200 p-8 shadow-md hover:shadow-lg transition cursor-pointer">
            <AtomIcon className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-black">Write Your Prompt</h3>
            <p className="text-sm text-gray-600">
              Start by entering key details about your experience and goals. Our AI will help tailor your resume content perfectly.
            </p>
          </article>

          {/* Step 2 */}
          <article className="border rounded-xl bg-white border-gray-200 p-8 shadow-md hover:shadow-lg transition cursor-pointer">
            <Edit className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-black">Edit Your Form</h3>
            <p className="text-sm text-gray-600">
              Review and customize your details. Our smart form guides you to highlight your skills and achievements.
            </p>
          </article>

          {/* Step 3 */}
          <article className="border rounded-xl bg-white border-gray-200 p-8 shadow-md hover:shadow-lg transition cursor-pointer">
            <Share2 className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-black">Download & Share</h3>
            <p className="text-sm text-gray-600">
              Download your ATS-friendly resume in PDF or JPEG format and share it easily with employers and recruiters.
            </p>
          </article>
        </div>

        <div className="mt-12">
          <Link
            to="/tips"
            className="inline-block bg-gray-900 px-14 py-3 text-sm font-semibold text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-500 transition"

          >
             Resume Best Practices
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
