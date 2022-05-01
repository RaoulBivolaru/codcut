import About from 'sections/About';
import Hero from 'sections/Hero';
import Layout from 'components/Layout';
import React from 'react';
import Contact from 'sections/Contact';
import SEO from 'components/SEO';

export default function () {
  return (
    <Layout>
      <SEO />
      <Hero />
      <About />
      <Contact />
    </Layout>
  );
}
