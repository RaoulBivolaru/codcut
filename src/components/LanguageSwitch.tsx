import Dropdown from './Dropdown';
import { useIntl, changeLocale } from 'gatsby-plugin-intl';
import React from 'react';
import { IoLanguage } from 'react-icons/io5';

const LanguageSwitch = () => {
  const intl = useIntl();

  return (
    <div className="ml-auto mr-5 cursor-pointer hidden md:block">
      <Dropdown
        trigger={<IoLanguage className="text-accent text-xl" />}
        items={[
          {
            label: intl.formatMessage({ id: 'english' }),
            onClick: () => changeLocale('en', '/'),
          },
          {
            label: intl.formatMessage({ id: 'romanian' }),
            onClick: () => changeLocale('ro', '/'),
          },
        ]}
      />
    </div>
  );
};

export default LanguageSwitch;
