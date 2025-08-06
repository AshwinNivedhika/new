"use client";
import * as React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function CTAButton({ children, className = "", onClick }: ButtonProps) {
  return (
    <button
      className={`flex gap-2 justify-center items-center p-6 bg-cyan-800 rounded-lg shadow-sm transition-all duration-200 cursor-pointer ease-[ease-in-out] h-[90px] w-[300px] max-md:p-5 max-md:h-20 max-md:w-[250px] max-sm:p-5 max-sm:w-full max-sm:h-[70px] max-sm:max-w-[300px] ${className}`}
      onClick={onClick}
    >
      <div className="flex flex-col shrink-0 justify-center text-2xl font-semibold leading-8 text-white">
        <div className="text-xl font-semibold leading-8 text-white h-[35px] w-[258px] max-md:text-lg max-md:w-[210px] max-sm:w-full max-sm:text-base">
          {children}
        </div>
      </div>
    </button>
  );
}
