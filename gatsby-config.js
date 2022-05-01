require(`dotenv`).config();

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    title: `raoul.tech`,
    headline: `Fullstack digital freelancer`,
    url: `https://raoul.tech`,
    description: `Fullstack digital freelancer. Experienced developer with over 10 years of experience in the field`,
    language: `en`,
    image: `https://raoul.tech/logo.png`,
    author: `Raoul Bivolaru`,
  },
  plugins: [
    `gatsby-plugin-tsconfig-paths`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-react-helmet`,
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
