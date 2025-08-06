import * as React from "react";
import { CiCircleCheck } from "react-icons/ci";

interface Service {
  title: string;
  subtitle: string;
  description: string;
  icon?: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Website Creation and Maintenance",
    subtitle: "Built to impress. Maintained to last.",
    description: "We design fast, responsive websites that reflect your brand and scale with your business. From initial build to long-term upkeep, we handle everything—performance, accessibility, and peace of mind.",
  },
  {
    title: "Headless CMS and AI Personalisation",
    subtitle: "Decoupled architecture. Hyper-relevant experiences.",
    description: "Our headless CMS approach gives you the freedom to distribute content seamlessly across platforms. Paired with AI personalisation, your site adapts to user behavior in real time, boosting engagement and retention.",
  },
  {
    title: "Content Marketing (AEO & SEO Optimisation)",
    subtitle: "Content that ranks. And converts.",
    description: "Whether it’s SEO for search engines or AEO for answer engines like Google Assistant, we structure your content to be discoverable, digestible, and valuable, driving organic growth without the guesswork.",
  },
  {
    title: "Social Media Marketing",
    subtitle: "Turn followers into fans, and fans into customers.",
    description: "We help you show up consistently across platforms with branded visuals, targeted messaging, and engaging content strategies. From calendar planning to campaign execution, we make social media work for you.",
  },
];

export default function OurServices() {
  return (
    <section className="w-full bg-gray-50 py-10 px-10 md:px-10 my-10">
      <div className="max-w-[1250px] mx-auto text-center">
        
        <h2 className="text-4xl font-bold text-cyan-800 mb-6 sm:text-4xl">
          Our services
        </h2>
        <p className="text-xl text-black front-bold mb-10 max-w-3xl mx-auto">
          Practical digital services designed to simplify your online presence and help your business thrive.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-left hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
            
              <h4 className="flex items-center gap-2 text-xl font-bold text-cyan-800 mb-2">
                <CiCircleCheck className="text-cyan-800 text-6xl font-bold"/> {service.title}
              </h4>
              <p className="text-black text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}