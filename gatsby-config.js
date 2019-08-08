module.exports = {
  siteMetadata: {
    title: `Kiss & Makeup`,
    description: `A basic ecommerce site with a search and filter function that collects data from an API.`,
    author: `Donny Layug`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`caveat`, `arial`],
        display: `swap`,
      },
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
        name: `Kiss & Makeup`,
        short_name: `K&M`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `black`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, "src/components"),
          "@images": path.resolve(__dirname, "src/images"),
          "@styles": path.resolve(__dirname, "src/styles/"),
        },
      },
    },
  ],
}
