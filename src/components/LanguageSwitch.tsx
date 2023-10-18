import Dropdown from './Dropdown';
import { useIntl, changeLocale } from 'gatsby-plugin-intl';
import React from 'react';
import { IoLanguage } from 'react-icons/io5';

const LanguageSwitch = () => {
  const intl = useIntl();

  const isLocaleSet = typeof window !== 'undefined' && ['/en', '/ro'].includes(window.location.pathname);

  return (
    <div className="ml-auto mr-5 cursor-pointer hidden md:block">
      <Dropdown
        trigger={<IoLanguage className="text-accent text-xl" />}
        items={[
          {
            label: intl.formatMessage({ id: 'english' }),
            onClick: () => changeLocale('en', isLocaleSet ? '/' : ''),
          },
          {
            label: intl.formatMessage({ id: 'romanian' }),
            onClick: () => changeLocale('ro', isLocaleSet ? '/' : ''),
          },
        ]}
      />
    </div>
  );
};

export default LanguageSwitch;
