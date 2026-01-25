import { UserButton, useUser } from "@clerk/clerk-react";
import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const { user, isSignedIn, isLoaded } = useUser();
  return (
    <div className="flex justify-between items-center px-6 py-4 w-full bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#2A2A2A] transition-all duration-500 sticky top-0 z-[100]" id="No-print-area">
      <Link to={"/"} className="group transition-all duration-500 hover:scale-105">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <div className="relative w-12 h-12 bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/40 group-hover:shadow-purple-500/60 transition-all duration-500 group-hover:rotate-3">
              <span className="text-white font-bold text-xl tracking-tight">R</span>
            </div>
            <div className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-gradient-to-br from-pink-400 via-pink-500 to-rose-500 rounded-full border-2 border-[#0A0A0A] shadow-lg shadow-pink-500/50 group-hover:scale-110 transition-transform duration-500"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-white leading-tight tracking-tight group-hover:text-gray-100 transition-colors duration-300">
              Resume<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-indigo-400 group-hover:from-purple-300 group-hover:via-purple-400 group-hover:to-indigo-300 transition-all duration-500">.AI</span>
            </span>
            <span className="text-[10px] text-[#BBBBBB] leading-tight -mt-0.5 group-hover:text-[#CCCCCC] transition-colors duration-300 tracking-wide font-medium">
              AI Powered Builder
            </span>
          </div>
        </div>
      </Link>
      {!isSignedIn ? (
        <Link to={"/auth/sign-in"}>
          <button className="relative inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-[#0A0A0A] bg-white rounded-lg shadow-lg shadow-white/20 hover:bg-gray-50 border-0 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-white/30 overflow-hidden group">
            <span className="relative z-10 transition-all duration-300 group-hover:tracking-wide">Get Started</span>
            {/* Subtle shimmer effect on hover */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
            {/* Gentle glow effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/0 via-indigo-500/0 to-pink-500/0 group-hover:from-purple-500/8 group-hover:via-indigo-500/8 group-hover:to-pink-500/8 transition-all duration-700"></div>
            {/* Subtle pulse animation */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 group-hover:animate-pulse-subtle bg-white/5"></div>
          </button>
        </Link>
      ) : (
        <div className="flex gap-4 items-center">
          <Link to={"/dashboard"}>
            <button className="inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-white bg-[#1A1A1A] border border-[#444444] rounded-lg hover:bg-[#2A2A2A] hover:border-[#555555] transition-all duration-500 hover:scale-105 shadow-md hover:shadow-lg">
              DashBoard
            </button>
          </Link>
          <div className="transition-transform duration-500 hover:scale-105">
            <UserButton />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
