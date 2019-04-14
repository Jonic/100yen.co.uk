import { StaticQuery, graphql } from 'gatsby'

import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'

export const PureLayout = ({ data }) => (
  <React.Fragment>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    {children}
  </React.Fragment>
)

PureLayout.propTypes = {
  children: PropTypes.object,
  data: PropTypes.object.isRequired,
}

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <PureLayout data={data}>{children}</PureLayout>}
  />
)

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout
