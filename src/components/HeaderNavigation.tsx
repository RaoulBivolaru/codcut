import clsx from 'clsx';
import { BREAKPOINT } from 'helpers/constants';
import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useWindowSize } from 'react-use';
import Drawer from './Drawer';

interface NavigationMenuProps {
  mobileView?: boolean;
}

interface HeaderNavigationItemProps extends NavigationMenuProps {
  label: string;
}

const HeaderNavigationItem = ({
  label,
  mobileView,
}: HeaderNavigationItemProps) => {
  const navigate = () => {
    const section = document.getElementById(label.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      onClick={navigate}
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

const NavigationMenu = ({ mobileView }: NavigationMenuProps) => {
  return (
    <nav
      className={clsx('text-content flex gap-8', {
        'flex-col': mobileView,
        'items-center ml-20 mr-auto': !mobileView,
      })}>
      <HeaderNavigationItem label="Home" mobileView={mobileView} />
      <HeaderNavigationItem label="About" mobileView={mobileView} />
      <HeaderNavigationItem label="Services" mobileView={mobileView} />
      <HeaderNavigationItem label="Contact" mobileView={mobileView} />
    </nav>
  );
};

export default function () {
  const { width } = useWindowSize();

  if (width > BREAKPOINT.MOBILE) {
    return <NavigationMenu />;
  }
  return (
    <Drawer
      trigger={
        <AiOutlineMenu className="text-white order-2 ml-5 text-2xl cursor-pointer" />
      }>
      <NavigationMenu mobileView />
    </Drawer>
  );
}
