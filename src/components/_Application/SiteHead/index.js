import { opengraphImage, pageTitle } from 'lib/helpers/meta'

import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'
import { withAssetPrefix } from 'gatsby-link'

const SiteHead = ({ data, opengraphImageSrc }) => (
  <Helmet title={pageTitle()} meta={data.meta}>
    <link rel="icon" href={withAssetPrefix('favicon.png')} />
    <meta property="og:image" content={opengraphImage(opengraphImageSrc)} />
    <meta property="og:title" content={pageTitle()} />
    <meta
      property="twitter:image"
      content={opengraphImage(opengraphImageSrc)}
    />
    <meta property="twitter:title" content={pageTitle()} />
  </Helmet>
)

SiteHead.propTypes = {
  data: PropTypes.object.isRequired,
  opengraphImageSrc: PropTypes.string.isRequired,
}

export default SiteHead
