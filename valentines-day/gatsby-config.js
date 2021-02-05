module.exports = {
  siteMetadata: {
    title: "kathryn",
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
    }
  ],
};
