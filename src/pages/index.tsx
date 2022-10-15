import About from 'sections/About';
import Hero from 'sections/Hero';
import Layout from 'components/Layout';
import React from 'react';
import Contact from 'sections/Contact';
import SEO from 'components/SEO';
import Work from 'sections/Work';

const HomePage = () => {
  return (
    <Layout>
      <SEO />
      <Hero />
      <About />
      <Work />
      <Contact />
    </Layout>
  );
};

export default HomePage;
