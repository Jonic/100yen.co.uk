const siteData = require('../data/site.js')

module.exports = pageTitle => {
  const titleParts = [siteData.title]

  if (pageTitle) {
    titleParts.unshift(pageTitle)
  }

  return titleParts.join(' / ')
}
