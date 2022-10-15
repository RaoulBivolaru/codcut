import React from 'react';
import ContentItem from './ContentItem';

const ServicesContent = () => {
  return (
    <>
      <ContentItem
        title='User interface/experience integration'
        meta='UI/UX'
        description='Implement mobile first designs with an eye for details.'
      />
      <ContentItem
        title='Web app creation using latest technologies'
        meta='SPA/SSR'
        description='Create web applications with or without SSR.'
      />
      <ContentItem
        title='API implementation'
        meta='REST/GraphQL'
        description='Create modern APIs with performance in mind.'
      />
      <ContentItem
        title='Mobile app creation'
        meta='IOS'
        description='Create IOS mobile applications using React Native.'
      />
    </>
  );
};

export default ServicesContent;