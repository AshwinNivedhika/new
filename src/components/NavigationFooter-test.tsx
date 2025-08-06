"use client";
import * as React from "react";
import { FooterColumn } from "./FooterColumn";
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";

export const NavigationFooter: React.FC = () => {
  const footerColumns = [
    {
      topic: "About",
      pages: ["Page", "Page", "Page"],
    },
    {
      topic: "Services",
      pages: ["Page", "Page", "Page"],
    },
    {
      topic: "Blog",
      pages: ["Page", "Page", "Page"],
    },
  ];

  return (
    <footer className="flex flex-col px-20 py-12 w-full bg-white max-md:px-10 max-md:py-8 max-sm:px-5 max-sm:py-6">
      {/* Branding */}
      <div className="text-4xl font-semibold text-cyan-800 mb-4 leading-[54px] max-md:text-3xl max-sm:text-center">
        BrightPage
      </div>
<div></div>
<div></div>
      {/* Social Icons + Footer Columns Row */}
      <div className="flex flex-row justify-between items-start w-full gap-8 max-md:flex-col max-md:items-center">
        {/* Social Icons */}
        <div className="flex gap-4 text-cyan-800 text-2xl mt-10 max-sm:gap-3">
          <FaFacebook />
          <FaLinkedin />
          <FaYoutube />
          <FaInstagram />
        </div>

        

      </div>

      {/* Divider */}
      <hr className="mt-10 h-px w-full bg-neutral-200 border-0" />
    </footer>
  );
};

export default NavigationFooter;