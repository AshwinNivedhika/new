import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Paragraph from '../components/Paragraph';
import OurServices from '../components/OurServices';
import PromoBanner from '../components/PromoBanner';
import Services from '../components/Services';
import RelatedArticlesCarousel from '../components/RelatedArticlesCarousel';

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

const homepageHeader = (
  <div className="flex flex-col gap-4 items-start">
    <h1 className="text-5xl font-bold text-cyan-800">Why businesses choose BrightPage</h1>
    <div className="text-2xl text-gray-700">Clear strategy. Consistent results. Built around you.</div>
  </div>
);

const homepageServices = [
  { title: "Smart content planning", description: "Structured, scalable content that grows your business, converts visitors, and builds brand credibility with clarity and purpose." },
  { title: "Technical tools that work", description: "Reliable tools that boost search visibility, simplify user journeys, and scale seamlessly with clear strategy and consistent results." },
  { title: "Personalised support", description: "Experts who understand your business, adapt to your workflow, and deliver tailored guidance that keeps your goals front and centre." },
  { title: "Clear communication", description: "Stay in control from kickoff to delivery with transparent updates and a collaborative process that keeps you informed at every step." },

];

export default function Home() {
  return (
    <Layout>
              <div className="pt-24 container mx-auto px-4">

<Hero
  heading="About us"
  subheading="Helping businesses shine online"
  description="We combine clear, honest content with thoughtful design and SEO that helps people find you."
  imageUrl="https://cdn.builder.io/api/v1/image/assets%2F446bf9bd9f0c4de4b2a3ec5553450a3b%2F1624c17a767e4999988c163881c57cd0"
  buttonLabel="Let's get started"
  
/>
<Paragraph
    align="start"
    content=
    {
        [<h3 className='text-2xl'><b>"Our vision is to make great digital content simple, effective and empowering."</b></h3>,
    "At BrightPage, we help businesses grow online with clear strategy, strong content and SEO that gets results. Our job is to remove confusion, cut through noise and bring focus to your digital efforts.",
    
    "We support small and large businesses that want structure and visibility, but don’t need the hassle of hiring and managing a full marketing team. Whether you're starting fresh or improving what you already have, we bring clarity and direction to help you move forward.",
    ]}
    />
    
      <Services header={homepageHeader} services={homepageServices} />

<PromoBanner
        headline="Want less guesswork and more impact from your online content?"
        buttonLabel="Book a free consultation"
        onButtonClick={() => {
          // You could navigate, open a modal, or track analytics here
          console.log("CTA clicked!");
        }}
      />
     

<RelatedArticlesCarousel articles={sampleArticles} />
 <OurServices />
</div>
    </Layout>
 );
}