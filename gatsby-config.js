module.exports = {
  siteMetadata: {
    title: `Felix Nagel Web Developer`,
    description: `Felix Nagel Personal Portfolio Website. Web Development and Online Marketing.`,
    author: `Felix Nagel`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Felix Nagel Web Dev`,
        short_name: `Felix Nagel`,
        start_url: `/`,
        background_color: `#292A2C`,
        theme_color: `#292A2C`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
