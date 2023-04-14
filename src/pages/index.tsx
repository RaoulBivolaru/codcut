import About from 'sections/About';
import Hero from 'sections/Hero';
import Layout from 'components/Layout';
import React from 'react';
import Contact from 'sections/Contact';
import SEO from 'components/SEO';
import Work from 'sections/Work';
import Services from 'sections/Services';
import { HeadFC } from 'gatsby';
import HeroBlob from 'components/HeroBlob';

const HomePage = () => {
  return (
    <Layout>
      <HeroBlob />
      <Hero />
      <About />
      <Services />
      <Work />
      <Contact />
    </Layout>
  );
};

export default HomePage;

export const Head: HeadFC = () => <SEO />;
