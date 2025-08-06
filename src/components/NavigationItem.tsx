"use client";
import * as React from "react";

interface NavigationItemProps {
  children: React.ReactNode;
  className?: string;
}

export const NavigationItem: React.FC<NavigationItemProps> = ({
  children,
  className = ""
}) => {
  return (
    <div className={`flex flex-col shrink-0 justify-center self-stretch text-2xl font-semibold leading-9 text-cyan max-md:w-auto max-md:min-w-20 max-sm:px-0 max-sm:py-2.5 max-sm:w-full max-sm:text-center ${className}`}>
      <div className="text-2xl font-bold text-cyan max-md:text-xl max-sm:text-lg">
        {children}
      </div>
    </div>
  );
};
export default NavigationItem;
