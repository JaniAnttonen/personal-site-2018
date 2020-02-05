module.exports = {
  pathPrefix: '__GATSBY_IPFS_PATH_PREFIX__',
  siteMetadata: {
    title: 'Jani Anttonen',
    description: 'Personal site of Jani Anttonen',
  },
  plugins: [
    'gatsby-plugin-ipfs',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: 'blog-posts',
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-netlify-cms',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Jani Anttonen',
        short_name: 'jantto',
        start_url: '__GATSBY_IPFS_PATH_PREFIX__',
        background_color: '#09051a',
        theme_color: '#c0bdf0',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        whitelist: ['gatsby-highlight'],
        whitelistPatternsChildren: [/^token/, /^pre/, /^code/],
      },
    },
  ],
}
