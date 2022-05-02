import React, { PropsWithChildren } from 'react';
import Header from '../sections/Header';
import ToTop from './ToTop';

export default function ({ children }: PropsWithChildren<any>) {
  return (
    <div className="bg-shade container mx-auto relative">
      <Header />
      {children}
      <ToTop />
    </div>
  );
}
