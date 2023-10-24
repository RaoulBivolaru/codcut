import { GatsbyConfig } from 'gatsby';

require(`dotenv`).config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: `codcut | Complete IT Services`,
    headline: `Provider of IT consulting and services`,
    url: `https://codcut.com`,
    siteUrl: `https://codcut.com`,
    description: `Provider of comprehensive IT solutions including web and mobile app development, API creation, payment integration, eCommerce platforms, Adobe Experience Manager expertise, full-stack development, agile methodologies, CMS implementations and UI/UX design.`,
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
          respectDNT: true,
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-tsconfig-paths`,
    `gatsby-plugin-postcss`,
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
            purpose: 'any maskable',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
        theme_color: '#191919',
        background_color: '#ffffff',
        display: 'standalone',
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        mode: 'async',
        preconnect: ['https://fonts.gstatic.com'],
        web: [
          {
            name: 'Poppins',
            file: 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;700;900',
          },
          {
            name: 'Montserrat',
            file: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700;900',
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet-async`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: ['en', 'ro'],
        defaultLanguage: 'en',
        redirect: false,
      },
    },
    `gatsby-plugin-offline`,
  ],
};

export default config;
