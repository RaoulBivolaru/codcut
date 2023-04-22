import Layout from 'components/Layout';
import React from 'react';
import Contact from 'sections/Contact';
import SEO from 'components/SEO';
import { HeadFC } from 'gatsby';

const ContactPage = () => {
  return (
    <Layout className="flex flex-col justify-between">
      <div className="pt-32">
        <Contact />
      </div>
    </Layout>
  );
};

export default ContactPage;

export const Head: HeadFC = () => <SEO />;
