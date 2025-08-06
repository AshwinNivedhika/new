"use client";
import * as React from "react";
import Button from "./Button";

type HeroSectionProps = {
  heading: string;
  subheading: string;
  description: string;
  buttonLabel: string;
  imageUrl: string;
  onButtonClick?: () => void;
  className?: string;
};

export default function HeroSection({
  heading,
  subheading,
  description,
  buttonLabel,
  imageUrl,
  onButtonClick,
  className = "",
}: HeroSectionProps) {
  return (
    <section className={`box-border flex relative flex-col shrink-0 mt-5 ${className}`}>
      <div className="flex gap-5 max-md:flex-col">
        {/* Text Column */}
        <div className="w-9/12 max-md:w-full">
          <h1 className="mb-8 ml-12 text-6xl font-bold text-cyan-800 max-sm:text-4xl">
            {heading}
          </h1>
          <h2 className="ml-12 text-4xl font-semibold text-black max-sm:text-2xl max-sm:text-center">
            {subheading}
          </h2>
          <p className="mt-8 ml-12 text-xl text-black max-sm:text-lg max-sm:text-center">
            {description}
          </p>

          <Button
            className="mt-8 ml-12 h-[90px] w-[300px] max-sm:h-[70px] max-sm:w-[280px]"
            onClick={onButtonClick}
          >
            <div className="text-xl font-semibold leading-8 text-white h-[35px] w-[258px] max-md:text-lg max-md:w-[210px] max-sm:w-full max-sm:text-base">
              {buttonLabel}
            </div>
          </Button>
        </div>

        {/* Image Column */}
        <div className="w-3/12 flex justify-center max-md:w-full max-md:mt-8">
          <img
            src={imageUrl}
            alt={`${heading} illustration`}
            className="object-contain max-w-[240px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}