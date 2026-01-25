import React from "react";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-screen-xl mx-auto">
        {/* Main Content Area */}
        <div className="mb-12 sm:mb-16">
          {/* Logo and Branding */}
          <div className="max-w-md">
            <a href="/" className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-base sm:text-lg">
                  R
                </span>
              </div>

              <span className="text-xl sm:text-2xl font-bold text-white">
                Resume.AI
              </span>
            </a>

            <p className="text-[#BBBBBB] text-xs sm:text-sm leading-relaxed">
              Create professional resumes with AI-powered tools and land your
              dream job.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 pt-6 sm:pt-8 border-t border-[#2A2A2A]">
          <div className="text-xs sm:text-sm text-[#BBBBBB] order-2 md:order-1 text-center md:text-left leading-relaxed">
            Made by{" "}
            <a
              href="https://www.linkedin.com/in/mayank-saini-b91906202/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
            >
              Mayank Saini
            </a>{" "}
            • © {currentYear} Resume.AI. All rights reserved.
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 sm:gap-4 order-1 md:order-2">
            <a
              href="https://www.linkedin.com/in/mayank-saini-b91906202/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-lg text-[#BBBBBB] hover:text-purple-400 hover:bg-white/5 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>

            <a
              href="https://github.com/Mayanksaini1234/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-lg text-[#BBBBBB] hover:text-purple-400 hover:bg-white/5 transition"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>

            <a
              href="https://www.instagram.com/its_mayank_saini1/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-lg text-[#BBBBBB] hover:text-purple-400 hover:bg-white/5 transition"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>

            <a
              href="https://x.com/MayankS09985836?s=09/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-lg text-[#BBBBBB] hover:text-purple-400 hover:bg-white/5 transition"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
