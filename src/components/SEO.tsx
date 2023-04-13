import useSiteMetadata from 'helpers/hooks/useSiteMetadata';
import React from 'react';

const SEO = () => {
  const meta = useSiteMetadata();

  return (
    <>
      <html lang="en" />
      <title>{meta.title}</title>
      <meta name="author" content={meta.author} />
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.headline} />
      <meta property="og:image" content={meta.image} />
      <meta property="og:url" content={meta.url} />
      <meta property="og:site_name" content={meta.title} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    </>
  );
};

export default SEO;
