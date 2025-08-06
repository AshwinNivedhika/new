import Layout from '../components/Layout';
import Paragraph from '../components/Paragraph';
import EnquiryForm from '../components/EnquiryForm';
import { TfiEmail } from "react-icons/tfi";


export default function Home() {
  return (
    <Layout>
              <div className="pt-24 pb-15 w-[700px] container mx-auto flex flex-col text-center px-4">
              
<Paragraph
  align="start"
  content={[
    <h1 className="text-3xl text-cyan-800 font-bold mb-6">Let's Chat</h1>,
    "Want a website that works harder? Or content that gets found more often?",
    "Let’s talk about how BrightPage can support your goals.",
    <>
      Write to us at <strong>contact@brightpage.com.au</strong> or fill out the form below.
    </>,
    "We’ll get back to you within 24 hours.",
  ]}
/>

              <EnquiryForm />
              </div>

    </Layout>
    );
}