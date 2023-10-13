import { GatsbyConfig } from 'gatsby';

require(`dotenv`).config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: `codcut | Complete IT Services`,
    headline: `Provider of IT services and consultancy`,
    url: `https://codcut.com`,
    siteUrl: `https://codcut.com`,
    description: `Provider of IT services, web application, mobile app, API creation, payment integration, eCommerce, Adobe Experience Manager, fullstack, agile, CMS, UI/UX.`,
    language: `en`,
    image: `https://codcut.com/logo.png`,
    author: `Raoul Bivolaru`,
  },
  trailingSlash: `never`,
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GATSBY_G_MEASUREMENT, process.env.GATSBY_AW_TRACKING],
        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-tsconfig-paths`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://codcut.com`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'codcut | Complete IT Services',
        short_name: 'codcut',
        start_url: '/',
        lang: 'en',
        icon: './static/logo.png',
        description: `Provider of IT services, web application, mobile app, API creation, payment integration, eCommerce, Adobe Experience Manager, fullstack, agile, CMS, UI/UX.`,
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        theme_color: '#191919',
        background_color: '#ffffff',
        display: 'standalone',
      },
    },
    `gatsby-plugin-offline`,
  ],
};

export default config;
