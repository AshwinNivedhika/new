"use client";
import * as React from "react";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <img
      src="https://images.ctfassets.net/3lcab0ooru78/44MjfCrhKNISLADfQLS31A/f18ff4948a1877ce7a921432ee8e3a1f/Logo.png"
      alt="BrightPage Logo"
      className={`h-16 w-16 max-md:h-10 max-md:w-10 max-sm:h-8 max-sm:w-8 object-contain ${className}`}
      />
  );
};
export default Logo;
