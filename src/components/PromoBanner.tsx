import * as React from "react";

type PromoBannerProps = {
  headline: string;
  buttonLabel: string;
  onButtonClick?: () => void;
  className?: string;
};

function PromoBanner({
  headline,
  buttonLabel,
  onButtonClick,
  className = "",
}: PromoBannerProps) {
  return (
    <div
  layer-name="Full-width promotional component"
  className={`box-border flex justify-center items-center gap-20 px-8 py-12 my-5 w-full bg-gray-50 text-center ${className}`}
>
      <div
        layer-name="Headline"
        className="text-3xl font-medium tracking-tighter text-black max-md:text-2xl max-sm:text-xl"
      >
        {headline}
      </div>
      <div
        layer-name="Button"
        className="flex justify-center items-center p-6 bg-cyan-800 rounded-lg shadow-sm transition-all duration-200 cursor-pointer h-[90px] w-[300px] max-md:p-5 max-md:h-20 max-md:w-[250px] max-sm:h-[70px] max-sm:w-full max-sm:max-w-[300px]"
        onClick={onButtonClick}
      >
        <div
          layer-name="Button Label"
          className="text-xl font-semibold leading-8 text-white"
        >
          {buttonLabel}
        </div>
      </div>
    </div>
  );
}

export default PromoBanner;