import Layout from 'components/Layout';
import SEO from 'components/SEO';
import { HeadFC } from 'gatsby';
import React from 'react';
import Privacy from 'sections/Privacy';

const PrivacyPage = () => {
  return (
    <Layout>
      <Privacy />
    </Layout>
  );
};

export default PrivacyPage;

export const Head: HeadFC = () => <SEO />;
