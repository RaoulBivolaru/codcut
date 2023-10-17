import Skills from '../components/Skills';
import HeroBlob from 'components/HeroBlob';
import Layout from 'components/Layout';
import React from 'react';
import About from 'sections/About';
import Contact from 'sections/Contact';
import Hero from 'sections/Hero';
import Work from 'sections/Work';

const HomePage = () => {
  return (
    <Layout>
      <HeroBlob />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
    </Layout>
  );
};

export default HomePage;
