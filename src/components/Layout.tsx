import Header from 'sections/Header';
import ToTop from './ToTop';
import clsx from 'clsx';
import Footer from 'components/Footer';
import SEO from 'components/SEO';
import React, { FC, PropsWithChildren } from 'react';
import 'styles/global.css';

interface LayoutProps {
  className?: string;
}

const Layout: FC<PropsWithChildren<LayoutProps>> = props => {
  return (
    <div className={clsx(`bg-shade mx-auto relative overflow-hidden min-h-screen ${props.className}`)}>
      <SEO />
      <Header />
      {props.children}
      <ToTop />
      <Footer />
    </div>
  );
};

export default Layout;
