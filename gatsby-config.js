module.exports = {
  siteMetadata: {
    title: 'Jani Anttonen',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: 'blog-posts',
      },
    },
    'gatsby-plugin-catch-links',
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
        start_url: '/',
        background_color: '#09051a',
        theme_color: '#c0bdf0',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
}
