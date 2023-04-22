import React from 'react';
import Button from 'components/Button';
import HeaderNavigation from 'components/HeaderNavigation';
import Image from 'components/Image';
import { navigate } from 'gatsby';

export default function () {
  return (
    <header className="p-10 flex justify-between items-center absolute right-0 left-0 top-0 z-10 container mx-auto">
      <Image src="/logo.svg" alt="logo" w={120} onClick={() => navigate('/')} />
      <HeaderNavigation />
      <Button label="Let's Talk" onClick={() => navigate('/contact')} className="ml-auto" />
    </header>
  );
}
