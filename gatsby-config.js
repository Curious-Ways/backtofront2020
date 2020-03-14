module.exports = {

  siteMetadata: {
    title: "Back to Front",
    titleTemplate: "%s · Back to Front",
    description:
      "We design brands and we build websites for brand-new businesses, or businesses trying something brand-new",
    url: "https://backtofront.co", // No trailing slash allowed!
    siteUrl: "https://backtofront.co",
    image: "/images/b2fsocial.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@b2fdesign",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts`, 
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `back-to-front`,
        short_name: `b2f`,
        start_url: `/`,
        background_color: `#28aab3`,
        theme_color: `#302AB8`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
