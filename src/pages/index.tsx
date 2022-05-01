import About from 'sections/About';
import Hero from 'sections/Hero';
import Layout from 'components/Layout';
import React from 'react';
import Contact from 'sections/Contact';
import { Helmet } from 'react-helmet';

export default function () {
  return (
    <Layout>
      <Helmet>
        <title>raoul.tech</title>
        <meta name="author" content="Raoul Bivolaru" />
        <meta
          name="description"
          content="Fullstack digital freelancer. Experienced developer with over 10 years of experience in the field."
        />
        <meta property="og:title" content="Fullstack digital freelancer" />
        <meta property="og:image" content="logo.svg" />
      </Helmet>
      <Hero />
      <About />
      <Contact />
    </Layout>
  );
}
