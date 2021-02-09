module.exports = {
  siteMetadata: {
    title: `Happy Valentine's Day Kathryn!`,
    description: `There are definitely cooler websites that exist, but not a cooler girl than you KB`,
    author: `Jarbroni Mike`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Dancing Script`,
          `Londrina Solid`,
          `Patrick Hand`,
          `Parisienne`
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-react-helmet`,
  ],
};
