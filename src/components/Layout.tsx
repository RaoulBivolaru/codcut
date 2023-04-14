import React, { FC, PropsWithChildren } from 'react';
import Header from '../sections/Header';
import ToTop from './ToTop';

import 'styles/global.css';

const Layout: FC<PropsWithChildren<any>> = props => {
  return (
    <div className="bg-shade mx-auto relative overflow-hidden">
      <Header />
      {props.children}
      <ToTop />
    </div>
  );
};

export default Layout;
