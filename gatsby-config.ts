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
    siteImage: `/banner.jpg`,
    author: `raoul.tech`,
  },
  plugins: [
    `gatsby-plugin-tsconfig-paths`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `raoul.tech`,
        short_name: `raoul.tech`,
        description: `raoul.tech portfolio profile`,
        start_url: `/`,
        background_color: `#141821`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#f6ad55`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
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
