require(`dotenv`).config();

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    title: `raoul.tech | IT Studio`,
    headline: `IT services and consulting provider`,
    url: `https://raoul.tech`,
    siteUrl: `https://raoul.tech`,
    description: `IT studio with over 10 years of experience in the field. Carry out
    dozen of projects like UI/UX integration, SSO implementation,
    payment integration, API creation.`,
    language: `en`,
    image: `https://raoul.tech/logo.png`,
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
        siteUrl: `https://raoul.tech`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'raoul.tech | IT Studio',
        short_name: 'raoul.tech',
        start_url: '/',
        lang: 'en',
        icon: '/logo.png',
        description: `IT studio with over 10 years of experience in the field. Carry out
        dozen of projects like UI/UX integration, SSO implementation,
        payment integration, API creation.`,
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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:100,300,400,700,900`,
          `Montserrat\:100,300,400,700,900`,
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, '/privacy'],
      },
    },
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
