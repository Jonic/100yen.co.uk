const dotenv = require('dotenv')
const configMeta = require('./src/config/meta')
const configGatsbyPlugins = require('./src/config/gatsby-plugins')
const configGatsbySources = require('./src/config/gatsby-sources')
const configGatsbyTransformers = require('./src/config/gatsby-transformers')

dotenv.config({
  path: `.env.${process.env.ACTIVE_ENV || 'development'}`,
})

const gatsbyConfig = {
  siteMetadata: {
    env: {
      baseHref: process.env.BASE_HREF,
      fontsUrl: 'https://fonts.googleapis.com/css?family=Rubik:300,500,700',
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
    },
    ...configMeta,
  },
  plugins: [
    ...configGatsbyPlugins,
    ...configGatsbySources,
    ...configGatsbyTransformers,
  ],
}

module.exports = gatsbyConfig
