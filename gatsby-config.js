module.exports = {
  siteMetadata: {
    title: `Candy Coded Experimental Portfolio`,
    description: 'A playground to put design ideas, code experiments, and blog musings about front-end UI and accessibility.',
    author: `Tasha Zuniga`,
    menuLinks: [
      {
        name: 'blog',
        link: '/blog',
      },
      {
        name: 'code',
        link: '/code',
      },
      {
        name: 'design',
        link: '/design',
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-firesource',
      options: {
        credential: require("./firebase.json"),
        types: [
          {
            type: 'Article',
            collection: 'articles',
            map: doc => ({
              title: doc.title,
              body: doc.body,
              tags: doc.tags,
              date: doc.date,
            }),
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
