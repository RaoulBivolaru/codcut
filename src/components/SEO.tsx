import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function () {
  const {
    site: { siteMetadata: meta },
  } = useStaticQuery(query);

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="author" content={meta.author} />
      <meta name="description" content={meta.description} />
      <meta property="og:title" content={meta.headline} />
      <meta property="og:image" content={meta.image} />
    </Helmet>
  );
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title
        description
        url
        image
        author
        headline
      }
    }
  }
`;
