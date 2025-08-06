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
export default function Home() {
  return (
    <Layout>
              <div className="pt-24 container mx-auto px-4">

<Hero
  heading="Our services"
  subheading="Smart, scalable solutions tailored for growing brands."
  description="Our services span every layer of digital growth — from modular site builds and ongoing support to personalised AI-driven content and strategic visibility across search and social. Whether you're starting fresh or scaling fast, we help your website do more and mean more to the people you serve."
  imageUrl="https://cdn.builder.io/api/v1/image/assets%2F446bf9bd9f0c4de4b2a3ec5553450a3b%2F1624c17a767e4999988c163881c57cd0"
  buttonLabel="Let's get started"
  
/>
<OurServices />
<Paragraph
    align="start"
    content=
    {
        ["Modern websites don’t just look good — they drive results. Whether you're launching something new or levelling up an existing digital presence, we offer full-spectrum support to help your business grow online with clarity, performance and impact.",
        "Our services are built around four pillars. Each is designed to meet you where you are and take you further.",
<h3 className='text-2xl'> <b> Website creation and maintenance</b> </h3>,
"Your website should work hard for your business, not the other way around. We create fast, responsive sites that reflect your brand and scale with your growth. From the initial build to long-term upkeep, we manage performance, accessibility and peace of mind so your team can focus on what matters.",
"Behind every pixel is a purpose. We structure each element to support your goals, from intuitive navigation that guides users naturally to modular components that make updates simple and efficient. Whether you're refreshing content, launching campaigns or evolving your offer, your site remains a reliable and flexible asset that grows with you.",
<h3 className='text-2xl'> <b> Headless CMS and AI Personalisation</b> </h3>,
"Want content flexibility without the tech tangle? Our headless CMS setup lets you deliver content wherever your audience is, from websites to apps and beyond. When paired with AI personalisation, your site adapts to users in real time and creates experiences that are engaging, relevant and memorable.",
"This modular approach gives your team freedom without fragmentation. You can update content once and see it reflected instantly across every channel, saving time and reducing errors. Personalisation tools unlock deeper insights into how users interact with your site, allowing you to tailor experiences based on preferences, context and intent — all while keeping your workflow simple and efficient.",
<h3 className='text-2xl'> <b> Content Marketing (AEO & SEO Optimisation)</b> </h3>,
"We go beyond keywords. With a blend of SEO for search engines and AEO for answer engines, we structure your content to be discoverable and valuable. Whether your audience is typing or talking, we help drive organic growth powered by clarity, not guesswork.",
"Our strategies are built to serve both humans and algorithms. By aligning your content with real user intent and technical best practices, we help ensure it reaches the right people at the right time. From structured data and semantic markup to purposeful messaging and clear calls to action, every element works together to improve visibility and encourage meaningful engagement.",
<h3 className='text-2xl'> <b> Social Media Marketing </b> </h3>,
"Social isn’t just about showing up. It’s about showing up with purpose. We help your brand build presence across platforms with consistent messaging, engaging visuals and targeted strategy. From calendar planning to campaign execution, we make social media feel effortless and effective.",
"Social platforms are where conversations happen, but connection is what drives conversion. We tailor content to suit each channel’s tone and audience, helping you spark engagement with authenticity and intent. Whether it's an educational post, a behind-the-scenes reel or a story that speaks to your brand’s mission, we turn passive scrolling into active interest — bringing your audience closer to action with every interaction.",
]}

    />

<PromoBanner
        headline="Want less guesswork and more impact from your online content?"
        buttonLabel="Book a free consultation"
        onButtonClick={() => {
          // You could navigate, open a modal, or track analytics here
          console.log("CTA clicked!");
        }}
      />
     

<RelatedArticlesCarousel articles={sampleArticles} />
 
</div>
    </Layout>
 );
}