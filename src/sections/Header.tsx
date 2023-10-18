import LanguageSwitch from '../components/LanguageSwitch';
import clsx from 'clsx';
import HeaderNavigation from 'components/HeaderNavigation';
import Image from 'components/Image';
import Link from 'components/Link';
import { Link as NativeLink, useIntl } from 'gatsby-plugin-intl';
import React from 'react';

export default function () {
  const intl = useIntl();
  const isContact = typeof window !== 'undefined' && window.location.pathname.includes('/contact');

  return (
    <header
      className={clsx('py-5 px-8 flex justify-between items-center right-0 left-0 top-0 z-10 container mx-auto', {
        sticky: isContact,
        absolute: !isContact,
      })}>
      <NativeLink to="/">
        <Image src="/logo.svg" alt="logo" w={120} />
      </NativeLink>
      <HeaderNavigation />
      <LanguageSwitch />
      {!isContact && <Link label={intl.formatMessage({ id: 'lets_talk' })} to="/contact" className="ml-auto md:ml-0" />}
    </header>
  );
}
