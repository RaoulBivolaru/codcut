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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:100,300,400,700,900`,
          `Montserrat\:100,300,400,700,900`,
        ],
        display: 'swap',
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
