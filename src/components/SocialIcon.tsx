"use client";
import * as React from "react";

interface SocialIconProps {
  iconClass: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({ iconClass }) => {
  return (
    <div className="flex justify-center items-center p-2 w-10 h-10 rounded max-sm:p-1.5 max-sm:w-9 max-sm:h-9">
      <i className={`${iconClass} text-xl text-cyan-500 max-sm:text-lg`} />
    </div>
  );
};
export default SocialIcon;
