import Button from 'components/Button';
import Layout from 'components/Layout';
import { Link } from 'gatsby';
import React from 'react';

export default function () {
  return (
    <Layout>
      <section className="h-screen bg-brand flex items-center justify-center">
        <div className="items-center flex flex-col">
          <h1 className="text-accent text-2xl font-bold mb-2">NOT FOUND</h1>
          <Link to="/" replace>
            <Button label="Go home" onClick={() => {}} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
