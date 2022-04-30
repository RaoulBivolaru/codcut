import React, { PropsWithChildren } from 'react';
import Header from '../sections/Header';
import ToTop from './ToTop';

export default function ({ children }: PropsWithChildren<any>) {
  return (
    <div className="bg-brand">
      <Header />
      {children}
      <ToTop />
    </div>
  );
}
