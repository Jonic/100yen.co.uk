const path = require('path')
const redirectUrls = require('./config/pages/redirects')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  await Promise.all([redirectUrls(createPage, graphql)])
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        Components: path.resolve(__dirname, 'src/components/'),
        Containers: path.resolve(__dirname, 'src/containers/'),
        Contexts: path.resolve(__dirname, 'src/contexts/'),
        Helpers: path.resolve(__dirname, 'src/lib/helpers/'),
        Services: path.resolve(__dirname, 'src/lib/services/'),
        TestsData: path.resolve(__dirname, 'src/lib/tests-data/'),
      },
      extensions: ['.js', '.jsx'],
      modules: ['node_modules', 'src'],
    },
  })
}
