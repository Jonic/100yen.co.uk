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
      baseHref: `https://www.100yen.co.uk`,
      googleAnalyticsId: process.env.REACT_APP_GOOGLE_ANALYTICS_ID || '',
      googleSiteVerification: process.env.REACT_APP_GOOGLE_VERIFICATION || '',
      typekitId: `tgw1nyv`,
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
