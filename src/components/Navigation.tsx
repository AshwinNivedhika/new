"use client";
import * as React from "react";
import Button from "./Button";
import { Logo } from "./Logo";

// Local NavigationItem Component
interface NavigationItemProps {
  children: React.ReactNode;
  className?: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col justify-center self-stretch shrink-0 text-2xl font-semibold leading-9 text-cyan-800 max-md:w-auto max-md:min-w-20 max-sm:px-0 max-sm:py-2.5 max-sm:w-full max-sm:text-center ${className}`}
    >
      <div className="text-2xl font-bold text-cyan-800 max-md:text-xl max-sm:text-lg  hover:text-cyan-600 transition">
        {children}
      </div>
    </div>
  );
};

// Main Navigation Component
export const Navigation: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        
<div>
                  <Logo className="box-border flex relative flex-col shrink-0 mb-auto" />
                </div>


        
        {/* Navigation Links */}
        <div className="flex items-center gap-6 max-md:hidden">
          {["Home", "About", "Blog", "Services", "Contact us"].map((label) => (
            <NavigationItem key={label} className="hover:text-cyan-600">
              {label}
            </NavigationItem>
          ))}

          <Button className="my-auto text-xl mr-10 ml-10">
            Book a free consultation
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;