import About from 'sections/About';
import Hero from 'sections/Hero';
import Layout from 'components/Layout';
import React from 'react';

export default function () {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  );
}
