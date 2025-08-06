import * as React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-cyan-50 w-full py-6 px-8 flex justify-end items-center">
      <div className="flex flex-row items-center gap-10">
        {/* Brand Name */}
        <div className="text-cyan-800 font-bold text-3xl">
          BrightPage
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-cyan-800 text-xl hover:text-cyan-600 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-cyan-800 text-xl hover:text-cyan-600 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-cyan-800 text-xl hover:text-cyan-600 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-cyan-800 text-xl hover:text-cyan-600 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
}