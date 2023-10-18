import { HeaderNavigationItem } from 'components/HeaderNavigation';
import Image from 'components/Image';
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';

const YEAR = new Date().getFullYear();

const Footer = () => {
  const intl = useIntl();

  return (
    <footer className="bg-shade border-t border-border">
      <div className="container mx-auto">
        <div className="p-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/icon.svg" alt="logo" w={30} />
            <p className="text-content pt-1 leading-none">{intl.formatMessage({ id: 'footer' }, { year: YEAR })}</p>
          </div>
          <div>
            <HeaderNavigationItem label={intl.formatMessage({ id: 'privacy' })} url="/privacy" withUnderline={false} />
            <a
              className="text-content text-xs italic underline leading-1 block"
              href="https://www.flaticon.com/free-icons/seo-and-web"
              title="seo and web icons"
              target="_blank"
              rel="nofollow">
              {intl.formatMessage({ id: 'footer_copyrights' })}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
