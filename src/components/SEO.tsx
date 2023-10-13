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
      <meta property="og:type" content="website" />
      <meta property="og:descrition" content={meta.description} />
      <meta property="og:locale" content="en" />
      <meta property="og:site_name" content={meta.title} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <link rel="DNS-prefetch" href="//fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;700;900&amp;family=Montserrat:wght@100;300;400;700;900&amp;display=swap"
        rel="stylesheet"
      />
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
    </>
  );
};

export default SEO;
