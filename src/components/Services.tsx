"use client";
import * as React from "react";
import { IoMdFastforward } from "react-icons/io";

interface Service {
  title: string;
  description: string;
}

interface ServicesProps {
  header?: React.ReactNode;
  services: Service[];
  className?: string;
}

export const Services: React.FC<ServicesProps> = ({
  header,
  services,
  className = "",
}) => {
  const ServiceCard: React.FC<Service> = ({ title, description }) => (
    <article className="flex flex-wrap flex-1 gap-6 items-start h-[125px] min-w-60 w-[301px] max-md:w-full max-md:h-auto max-md:max-w-[400px] max-md:min-h-[125px] max-sm:flex-row max-sm:w-full max-sm:max-w-none">
      <IoMdFastforward className="w-8 h-8 text-cyan-800 flex-shrink-0" />
      <div className="flex flex-col flex-1 gap-4 min-w-40">
        <h3 className="text-2xl font-bold tracking-tight leading-7 text-cyan-800 max-md:text-2xl max-sm:text-xl">
          {title}
        </h3>
        <p className="text-xl leading-7 text-black max-md:text-lg max-sm:text-base">
          {description}
        </p>
      </div>
    </article>
  );

  return (
    <section className={`box-border flex flex-col gap-12 p-16 w-full bg-white ${className}`}>
      {header && <header className="w-full">{header}</header>}
      <div className="flex flex-wrap gap-16 items-center w-full max-md:gap-8 max-sm:flex-col">
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </div>
    </section>
  );
};

export default Services;