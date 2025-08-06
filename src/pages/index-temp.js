import React from 'react';
import ContentfulComponent from '../components/ContentfulComponent';
import Layout from '../components/Layout';
import { fetchHeaderFooter } from '../lib/contentful';

export async function getStaticProps() {
  const { headerData, footerData } = await fetchHeaderFooter();
  return { props: { headerData, footerData } };
}

export default function Home({ headerData, footerData }) {
  return (
    <Layout headerData={headerData} footerData={footerData}>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold my-8">Contentful Test</h1>
        <ContentfulComponent />
      </div>
    </Layout>
  );
}