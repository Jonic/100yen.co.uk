module.exports = [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `data`,
      path: `${__dirname}/../../data/`,
      ignore: [`**/\.*`],
    },
  },
]
