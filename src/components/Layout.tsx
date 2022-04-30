import React, { PropsWithChildren } from 'react';
import Header from '../sections/Header';

export default function ({ children }: PropsWithChildren<any>) {
  return (
    <div className="bg-brand">
      <Header />
      {children}
    </div>
  );
}
