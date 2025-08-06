import * as React from "react";

interface ParagraphProps {
  heading?: string;
  content: string[];
  align?: "start" | "center" | "end";
}

export default function Paragraph({
  heading,
  content,
  align = "start",
}: ParagraphProps) {
  const alignment = {
    start: "text-left items-start",
    center: "text-center items-center",
    end: "text-right items-end",
  };

  return (
    <div className="flex flex-col px-16 md:px-8 sm:px-4 pt-5 w-full max-w-[1250px] mx-auto my-1">
      {heading && (
        <div className={`flex flex-col gap-2 mb-10 ${alignment[align]} w-full`}>
          <h2 className="text-5xl font-bold leading-tight tracking-tight text-cyan-800 md:text-4xl sm:text-3xl">
            {heading}
          </h2>
        </div>
      )}
      <div className="text-2xl leading-9 text-black md:text-xl sm:text-lg sm:leading-6 w-full">
        {content.map((paragraph, i) => (
          <React.Fragment key={i}>
            <span>{paragraph}</span>
            <br />
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}