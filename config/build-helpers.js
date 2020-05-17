const path = require('path')

const buildQuery = async (graphql, query) => {
  const result = await graphql(query)

  if (result.errors) {
    throw result.errors
  }

  return result.data
}

const createRedirect = ({ createPage, dest, src }) => {
  const redirectTemplate = path.resolve(
    'src/templates/redirects/index.template.js'
  )

  createPage({
    path: src,
    component: redirectTemplate,
    context: {
      dest,
    },
  })
}

module.exports = {
  buildQuery,
  createRedirect,
}
