import Image from 'components/Image';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';

const YEAR = new Date().getFullYear();

const Footer = () => {
  const intl = useIntl();

  const isHome = typeof window !== 'undefined' && ['/ro', '/en', '/'].includes(window.location.pathname);

  return (
    <footer className="bg-shade border-t border-border">
      <div className="container mx-auto">
        <div className="p-8 flex xl:px-56 gap-5 items-center justify-between">
          <div className="flex items-center gap-4 justify-between w-full">
            <div className="flex items-center gap-4">
              <Image src="/icon.svg" alt="logo" w={30} />
              <p className="text-white/80 text-sm pt-1 leading-none">
                {intl.formatMessage({ id: 'footer' }, { year: YEAR })}
              </p>
            </div>
            <div className="flex gap-5">
              <a href="https://twitter.com/codcut" target="_blank" rel="nofollow">
                <FaXTwitter className="text-xl text-white" />
              </a>
              <a href="https://www.linkedin.com/company/codcut" target="_blank" rel="nofollow">
                <FaLinkedinIn className="text-xl text-white" />
              </a>
            </div>
          </div>
          {isHome && (
            <div>
              <a
                className="text-white/80 text-xs italic underline leading-1 block md:whitespace-nowrap"
                href="https://www.flaticon.com/free-icons/seo-and-web"
                title="seo and web icons"
                target="_blank"
                rel="nofollow">
                {intl.formatMessage({ id: 'footer_copyrights' })}
              </a>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
