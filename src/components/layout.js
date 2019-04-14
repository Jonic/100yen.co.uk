import { StaticQuery, graphql } from 'gatsby'

import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'
import SiteHead from './Application/SiteHead/SiteHead'

export const PureLayout = ({ children, data }) => (
  <React.Fragment>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={data.site.siteMetadata.meta}
    />
    <SiteHead data={data} />
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
      {
        site {
          siteMetadata {
            env {
              googleAnalyticsId
              googleSiteVerification
              typekitId
            }
            meta {
              name
              content
            }
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
