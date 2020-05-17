/* eslint-disable camelcase */
const sass = require('sass')
const dotenv = require('dotenv')

dotenv.config({
  path: `.env.${process.env.ACTIVE_ENV || 'development'}`,
})

module.exports = [
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-plugin-sass`,
    options: {
      implementation: sass,
    },
  },
]
