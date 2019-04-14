const autoprefixer = require('autoprefixer')
const browserslist = require('browserslist')
const sass = require('sass')

module.exports = [
  `gatsby-plugin-netlify-cms`,
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-plugin-sass`,
    options: {
      implementation: sass,
      postCssPlugins: [
        autoprefixer({
          browsers: browserslist(),
          flexbox: true,
          grid: true,
        }),
      ],
    },
  },
]
