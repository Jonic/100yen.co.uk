import { StaticQuery, graphql } from 'gatsby'

import Layout from 'components/_Application/Layout'
import PropTypes from 'prop-types'
import React from 'react'

const ApplicationLayoutContainer = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            meta {
              name
              content
            }
          }
        }
      }
    `}
    render={(data) => <Layout data={data}>{children}</Layout>}
  />
)

ApplicationLayoutContainer.propTypes = {
  children: PropTypes.object,
}

export default ApplicationLayoutContainer
