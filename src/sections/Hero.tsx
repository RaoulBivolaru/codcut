import Image from 'components/Image';
import { useIntl } from 'gatsby-plugin-intl';
import useWindowScroll from 'helpers/hooks/useWindowScroll';
import React from 'react';

export default function () {
  const intl = useIntl();
  const { y } = useWindowScroll();

  return (
    <section
      className="px-8 pb-8 md:pb-10 pt-32 md:pt-44 lg:py-0 lg:h-screen flex items-center justify-between font-heading relative lg:container mx-auto"
      id="home">
      <div className="flex w-full flex-col relative">
        <span className="hidden md:block text-white uppercase tracking-widest font-light text-xs lg:text-xl mb-1 opacity-50">
          {intl.formatMessage({ id: 'hero_1' })}
        </span>
        <h1 className="text-white font-extrabold text-l lg:text-6xl">
          {intl.formatMessage({ id: 'hero_2' })}
          <br /> {intl.formatMessage({ id: 'to' })}{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent_shade">
            {intl.formatMessage({ id: 'amplify' })}
          </span>{' '}
          {intl.formatMessage({ id: 'hero_3' })}
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-accent to-accent_shade ml-1">.</span>
        </h1>
        <p className="text-white mt-2 text-xs lg:text-lg tracking-wider opacity-80">
          {intl.formatMessage({ id: 'hero_4' })}
        </p>
      </div>
      {y <= 50 && (
        <div className="hidden lg:flex left-0 right-0 justify-center absolute bottom-10 animate-bounce">
          <Image src="/icon.svg" alt="icon" w={50} />
        </div>
      )}
    </section>
  );
}
