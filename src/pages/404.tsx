import Button from 'components/Button';
import Layout from 'components/Layout';
import { Link } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';

const NotFoundPage = () => {
  const intl = useIntl();

  return (
    <Layout>
      <section className="h-screen bg-brand flex items-center justify-center">
        <div className="items-center flex flex-col">
          <h1 className="text-accent text-2xl font-bold mb-2">{intl.formatMessage({ id: 'not_found' })}</h1>
          <Link to="/" replace>
            <Button label={intl.formatMessage({ id: 'go_home' })} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
