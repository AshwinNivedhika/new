import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Paragraph from '../components/Paragraph';
import OurServices from '../components/OurServices';
import PromoBanner from '../components/PromoBanner';
import Services from '../components/Services';
import RelatedArticlesCarousel from '../components/RelatedArticlesCarousel';
import Video from '../components/Video';  

import CTAButton from '../components/Button';
import Link from 'next/link';
const sampleArticles = [
  {
    id: 1,
    title: "Optimising SEO for Service Pages",
    summary: "A quick guide to improving visibility on your core offerings.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F446bf9bd9f0c4de4b2a3ec5553450a3b%2F1624c17a767e4999988c163881c57cd0",
    link: "/blog/seo-service-pages",
  },
  {
    id: 1,
    title: "Optimising SEO for Service Pages",
    summary: "A quick guide to improving visibility on your core offerings.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F446bf9bd9f0c4de4b2a3ec5553450a3b%2F1624c17a767e4999988c163881c57cd0",
    link: "/blog/seo-service-pages",
  },
  {
    id: 1,
    title: "Optimising SEO for Service Pages",
    summary: "A quick guide to improving visibility on your core offerings.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F446bf9bd9f0c4de4b2a3ec5553450a3b%2F1624c17a767e4999988c163881c57cd0",
    link: "/blog/seo-service-pages",
  },
  {
    id: 1,
    title: "Optimising SEO for Service Pages",
    summary: "A quick guide to improving visibility on your core offerings.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F446bf9bd9f0c4de4b2a3ec5553450a3b%2F1624c17a767e4999988c163881c57cd0",
    link: "/blog/seo-service-pages",
  },
  {
    id: 1,
    title: "Optimising SEO for Service Pages",
    summary: "A quick guide to improving visibility on your core offerings.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F446bf9bd9f0c4de4b2a3ec5553450a3b%2F1624c17a767e4999988c163881c57cd0",
    link: "/blog/seo-service-pages",
  },
  // Add 4 more
];



export default function Home() {
  return (
    <Layout>
      <div className="pt-24 container mx-auto px-4">
       
              
        <Hero
  heading="BrightPage"
  subheading="Brighter content, better business"
  description="We help businesses stand out online with strategic content, clean design, and smart SEO — without the jargon."
  imageUrl="https://images.ctfassets.net/3lcab0ooru78/4aSelQsxElXInHWGTG5GfM/2238aaa98b98c8b5ee2ce26d1a05494d/Hero_banner_-_Homepage.png"
  buttonLabel="Let's get started"
  buttonHref="/contact"
  />
  
<OurServices />



<Paragraph
        heading="Why BrightPage?"
        align="start"
        content={[
          "In today's online world, having a strong presence is important. At BrightPage, we make it simple.We help you build and manage the digital side of your business with clear, practical support.",
          "Whether you're just starting out or improving what you already have, we work with you to create websites and content that are easy to manage and grow with your goals.",
          "We specialise in structured content, user-friendly websites, and digital marketing that helps your business get found.",

          "✔ Content strategy that grows with your business",
          "✔ Website design and updates you can manage confidently",
          "✔ SEO & AEO services that improves the visibility of your business",
          "✔ Friendly support with no cofusing jargon",
          "✔ Honest communication you can rely on ",


         ]}
      />

      <Video
      heading='Helping your business shine online'
  url="https://youtu.be/TMsxrhOhGcI?si=eqO8dIyc4SkxYk5j"
  caption="BrightPage: Helping your business shine online"
/>

     <PromoBanner
        headline="Ready to simplify your digital presence?"
        buttonLabel="Book a free consultation"
        buttonHref="/contact"
        onButtonClick={() => {
          // You could navigate, open a modal, or track analytics here
          console.log("CTA clicked!");
        }}
      />

<RelatedArticlesCarousel articles={sampleArticles} />


        {/* Add other React components here as needed */}
      </div>
    </Layout>
  );
}