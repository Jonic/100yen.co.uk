import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'

// Using a meta tag instead of gatsby-link to ensure it works without JavaScript enabled
const Redirect = ({ pageContext }) => (
  <Helmet>
    <meta content={`0;url=${pageContext.dest}`} httpEquiv="refresh" />
  </Helmet>
)

Redirect.propTypes = {
  pageContext: PropTypes.object.isRequired,
}

export default Redirect
