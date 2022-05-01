import About from 'sections/About';
import Hero from 'sections/Hero';
import Layout from 'components/Layout';
import React from 'react';
import Contact from 'sections/Contact';

export default function () {
  return (
    <Layout>
      <Hero />
      <About />
      <Contact />
    </Layout>
  );
}
