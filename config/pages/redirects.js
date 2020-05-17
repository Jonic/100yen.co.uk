const { buildQuery, createRedirect } = require('../build-helpers')

const query = `
  {
    allRedirectsJson {
      nodes {
        dest
        src
      }
    }
  }
`

const redirectUrls = async (createPage, graphql) => {
  const data = await buildQuery(graphql, query)

  for (const node of data.allRedirectsJson.nodes) {
    const { dest, src } = node
    createRedirect({ createPage, dest, src })
  }
}

module.exports = redirectUrls
