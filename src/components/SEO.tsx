import { useIntl } from 'gatsby-plugin-intl';
import useSiteMetadata from 'helpers/hooks/useSiteMetadata';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  const intl = useIntl();
  const meta = useSiteMetadata();

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{intl.formatMessage({ id: 'title' })}</title>
        <meta name="description" content={intl.formatMessage({ id: 'description' })} />
        <meta name="author" content={meta.author} />
        <meta property="og:title" content={intl.formatMessage({ id: 'headline' })} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:url" content={meta.url} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={intl.formatMessage({ id: 'description' })} />
        <meta property="og:locale" content={intl.locale} />
        <meta property="og:site_name" content={intl.formatMessage({ id: 'title' })} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <script type="application/ld+json">
          {`
                {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "url": "https://codcut.com",
                    "name": "codcut",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "email": "contact@codcut.com",
                        "contactType": "Customer Support"
                    }
                }
            `}
        </script>
      </Helmet>
    </>
  );
};

export default SEO;
