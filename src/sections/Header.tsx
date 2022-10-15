import React from 'react';
import Button from 'components/Button';
import HeaderNavigation, { navigateToSection } from 'components/HeaderNavigation';
import Image from 'components/Image';

export default function () {
  return (
    <header className="p-10 flex justify-between items-center absolute right-0 left-0 top-0 z-10 container mx-auto">
      <Image src="/logo.svg" alt="logo" w={120} />
      <HeaderNavigation />
      <Button label="Let's Talk" onClick={() => navigateToSection('contact')} className="ml-auto" />
    </header>
  );
}
