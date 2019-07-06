require('dotenv').config({
  path: `.env.${process.env.ELEVENTY_ENV}`,
})

const baseUrl = process.env.BASE_URL

module.exports = {
  baseUrl,
  buildTime: new Date(),
  description: 'WHO CARES',
  favicon: `${baseUrl}/assets/images/icons/favicon.png`,
  title: '100yen',
  twitter: '@jonic',
}
