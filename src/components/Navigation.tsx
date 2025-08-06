"use client";
import * as React from "react";
import Link from "next/link";

import Button from "./Button";
import { Logo } from "./Logo";

// Local NavigationItem Component
interface NavigationItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  href,
  children,
  className = "",
}) => {
  return (
    <a
      href={href}
      className={`text-2xl font-bold text-cyan-800 max-md:text-xl max-sm:text-lg hover:text-cyan-600 transition ${className}`}
    >
      {children}
    </a>
  );
};

// Main Navigation Component
export const Navigation: React.FC = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Services", href: "/services" },
    { label: "Contact us", href: "/contact" },
  ];

  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div>
          <Link href="/" >
          <Logo className="box-border flex relative flex-col shrink-0 mb-auto" aria-label="BrightPage logo" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-6 max-md:hidden">
          {navItems.map(({ label, href }) => (
            <NavigationItem key={label} href={href} className="hover:text-cyan-600">
              {label}
            </NavigationItem>
          ))}
          
          <Link href="/contact">
          <Button className="my-auto text-xl mr-10 ml-10">
            Book a free consultation
          </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;