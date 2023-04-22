import React, { FC, PropsWithChildren } from 'react';
import Header from '../sections/Header';
import ToTop from './ToTop';

import 'styles/global.css';
import Footer from 'components/Footer';
import clsx from 'clsx';

interface LayoutProps {
  className?: string;
}

const Layout: FC<PropsWithChildren<LayoutProps>> = props => {
  return (
    <div className={clsx(`bg-shade mx-auto relative overflow-hidden min-h-screen ${props.className}`)}>
      <Header />
      {props.children}
      <ToTop />
      <Footer />
    </div>
  );
};

export default Layout;
