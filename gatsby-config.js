module.exports = {
  siteMetadata: {
    title: 'Jani Anttonen',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/markdown`,
        name: 'markdown',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-manifest',
    'gatsby-plugin-offline'
  ]
}
