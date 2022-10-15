import clsx from 'clsx';
import { BREAKPOINT } from 'helpers/constants';
import React, { FC } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useWindowSize } from 'react-use';
import Drawer from './Drawer';
import { navigate } from 'gatsby';

interface NavigationMenuProps {
  mobileView?: boolean;
}

interface HeaderNavigationItemProps extends NavigationMenuProps {
  label: string;
}

export const navigateToSection = (id: string) => {
  const section = document.getElementById(id.toLowerCase());
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  } else if (id === 'Privacy') {
    void navigate('privacy');
  } else {
    void navigate(`/#${id.toLowerCase()}`);
  }
};

const HeaderNavigationItem: FC<HeaderNavigationItemProps> = (props) => {
  const { label, mobileView } = props;

  return (
    <a
      href={label === 'Privacy' ? '/privacy' : `#${label.toLowerCase()}`}
      onClick={e => {
        e.preventDefault();
        navigateToSection(label);
      }}
      className={clsx(
        'hover:text-accent cursor-pointer transition-color after:transition-width after:top-1 after:relative after:w-0 after:h-0.5 after:block after:bg-accent',
        {
          'after:hover:w-10/12': !mobileView,
          'after:hover:w-full': mobileView,
        },
      )}>
      {label}
    </a>
  );
};

const NavigationMenu: FC<NavigationMenuProps> = (props) => {
  const { mobileView } = props;

  return (
    <nav
      className={clsx('text-content flex gap-8', {
        'flex-col': mobileView,
        'items-center ml-16 mr-auto': !mobileView,
      })}>
      <HeaderNavigationItem label='Home' mobileView={mobileView} />
      <HeaderNavigationItem label='About' mobileView={mobileView} />
      <HeaderNavigationItem label='Work' mobileView={mobileView} />
      <HeaderNavigationItem label='Contact' mobileView={mobileView} />
      <HeaderNavigationItem label='Privacy' mobileView={mobileView} />
    </nav>
  );
};

const HeaderNavigation = () => {
  const { width } = useWindowSize();

  if (width > BREAKPOINT.MOBILE) {
    return <NavigationMenu />;
  }
  return (
    <Drawer
      trigger={
        <AiOutlineMenu className='text-white order-2 ml-5 text-2xl cursor-pointer' />
      }>
      <NavigationMenu mobileView />
    </Drawer>
  );
};

export default HeaderNavigation;
