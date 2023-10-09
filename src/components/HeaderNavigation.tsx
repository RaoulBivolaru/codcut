import Drawer from './Drawer';
import clsx from 'clsx';
import { navigate } from 'gatsby';
import { BREAKPOINT } from 'helpers/constants';
import useWindowSize from 'helpers/hooks/useWindowSize';
import React, { FC } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

interface NavigationMenuProps {
  mobileView?: boolean;
}

interface HeaderNavigationItemProps extends NavigationMenuProps {
  label: string;
  withUnderline?: boolean;
  url?: string;
}

export const navigateToSection = (id: string, url?: string) => {
  const section = document.getElementById(id.toLowerCase());
  if (url) {
    void navigate(url);
  } else if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  } else {
    void navigate(`/#${id.toLowerCase()}`);
  }
};

export const HeaderNavigationItem: FC<HeaderNavigationItemProps> = props => {
  const { label, mobileView, url, withUnderline = true } = props;

  return (
    <a
      href={label === 'Privacy' ? '/privacy' : `#${label.toLowerCase()}`}
      onClick={e => {
        e.preventDefault();
        navigateToSection(label, url);
      }}
      className={clsx(
        'text-white hover:text-accent cursor-pointer transition-color after:transition-width after:top-1 after:relative after:w-0 after:h-0.5 after:block after:bg-accent',
        {
          'after:hover:w-10/12': withUnderline && !mobileView,
          'after:hover:w-full': withUnderline && mobileView,
        }
      )}>
      {label}
    </a>
  );
};

const NavigationMenu: FC<NavigationMenuProps> = props => {
  const { mobileView } = props;

  return (
    <nav
      className={clsx('text-content flex gap-8', {
        'flex-col': mobileView,
        'items-center ml-16 mr-auto': !mobileView,
      })}>
      <HeaderNavigationItem label="Home" mobileView={mobileView} />
      <HeaderNavigationItem label="About" mobileView={mobileView} />
      <HeaderNavigationItem label="Work" mobileView={mobileView} />
      <HeaderNavigationItem label="Contact" url="/contact" mobileView={mobileView} />
    </nav>
  );
};

const HeaderNavigation = () => {
  const { width } = useWindowSize();

  if (width > BREAKPOINT.MOBILE) {
    return <NavigationMenu />;
  }
  return (
    <Drawer trigger={<AiOutlineMenu className="text-white order-2 ml-5 text-2xl cursor-pointer" />}>
      <NavigationMenu mobileView />
    </Drawer>
  );
};

export default HeaderNavigation;
