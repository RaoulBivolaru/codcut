require(`dotenv`).config();

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    title: `codcut | Complete IT Services`,
    headline: `Provider of IT services and consultancy`,
    url: `https://codcut.com`,
    siteUrl: `https://codcut.com`,
    description: `Provider of IT services: web application, mobile application, API creation, payment integration, eCommerce, Adobe Experience Manager, fullstack development, agile approach, CMS, UI/UX.`,
    language: `en`,
    image: `https://codcut.com/logo.png`,
    author: `Raoul Bivolaru`,
  },
  plugins: [
    `gatsby-plugin-tsconfig-paths`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-react-helmet`,
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
        description: `Provider of IT services: web application, mobile application, API creation, payment integration, eCommerce, Adobe Experience Manager, fullstack development, agile approach, CMS, UI/UX.`,
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
        theme_color: '#f9004d',
        background_color: '#101010',
        display: 'standalone',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.G_TRACKING,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:100,300,400,700,900`,
          `Montserrat\:100,300,400,700,900`,
        ],
        display: 'swap',
      },
    },
    `gatsby-plugin-offline`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
};
