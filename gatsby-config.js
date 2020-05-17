const dotenv = require('dotenv')
const configMeta = require('./config/meta')
const configGatsbyPlugins = require('./config/gatsby/plugins')
const configGatsbySources = require('./config/gatsby/sources')
const configGatsbyTransformers = require('./config/gatsby/transformers')

dotenv.config({
  path: `.env.${process.env.ACTIVE_ENV || 'development'}`,
})

const gatsbyConfig = {
  siteMetadata: {
    ...configMeta,
  },
  plugins: [
    ...configGatsbyPlugins,
    ...configGatsbySources,
    ...configGatsbyTransformers,
  ],
}

module.exports = gatsbyConfig
