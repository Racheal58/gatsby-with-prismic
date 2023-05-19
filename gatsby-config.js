/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const routes = [
  {
    type: "homepage",
    path: "/",
  },
];

module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    // siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-prismic",
      options: {
        linkResolver: require("./linkResolver").linkResolver,
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        routes,
        schemas: {
          homepage: require("./src/custom_types/homepage.json"),
        },
      },
    },
  ],
};
