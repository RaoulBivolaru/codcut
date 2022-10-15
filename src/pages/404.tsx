import Button from 'components/Button';
import Layout from 'components/Layout';
import { Link } from 'gatsby';
import React from 'react';

const NotFoundPage = () => {
  return (
    <Layout>
      <section className='h-screen bg-brand flex items-center justify-center'>
        <div className='items-center flex flex-col'>
          <h1 className='text-accent text-2xl font-bold mb-2'>NOT FOUND</h1>
          <Link to='/' replace>
            <Button label='Go home' />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFoundPage;