import { HeaderNavigationItem } from 'components/HeaderNavigation';
import Image from 'components/Image';
import React from 'react';

const YEAR = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-shade border-t border-border">
      <div className="container mx-auto">
        <div className="p-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/icon.svg" alt="logo" w={30} />
            <p className="text-content pt-1">{YEAR} All rights reserved.</p>
          </div>
          <div>
            <HeaderNavigationItem label="Privacy" withUnderline={false} />
            <a
              className="text-content text-xs italic underline leading-1 block"
              href="https://www.flaticon.com/free-icons/seo-and-web"
              title="seo and web icons"
              target="_blank"
              rel="nofollow">
              About icons created by Muhammad Ali
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
