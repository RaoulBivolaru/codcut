require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    siteTitle: `raoul.tech`,
    siteTitleAlt: `raoul.tech freelance`,
    siteHeadline: `Freelance digital profile`,
    siteUrl: `https://raoul.tech`,
    siteDescription: `raou.tech portfolio`,
    siteLanguage: `en`,
    siteImage: `/logo.svg`,
    author: `raoul.tech`,
  },
  plugins: [
    `gatsby-plugin-tsconfig-paths`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:100,300,400,700,900`,
          `Montserrat\:100,300,400,700,900`,
        ],
        display: 'swap'
      }
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
}
