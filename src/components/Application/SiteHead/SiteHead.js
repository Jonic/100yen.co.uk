import React, { useEffect } from 'react'
import { pageTitle } from '@/helpers/meta'

import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { analyticsHelperInit } from '@/helpers/analytics'
import { withPrefix } from 'gatsby-link'

const SiteHead = ({ data }) => {
  const {
    baseHref,
    googleAnalyticsId,
    googleSiteVerifitcation,
    typekitId,
  } = data.site.siteMetadata.env

  useEffect(() => {
    analyticsHelperInit(googleAnalyticsId)
    try { Typekit.load() } catch (e) {}
  }, [data])


  return (
    <Helmet title={pageTitle()} meta={data.meta}>
      <meta name="google-site-verification" content={googleSiteVerifitcation} />

      <script src={`//use.typekit.net/${typekitId}.js`} rel="preconnect"></script>
      <script
        async
        src="https://www.google-analytics.com/analytics.js"
        rel="preconnect"
      />
      <script async src={withPrefix('/vendor/autotrack/autotrack.min.js')} />

      <link rel="canonical" href={baseHref} />
      <link rel="icon" href={withPrefix('/favicon.png')} />
      {/* <meta property="og:image" content={opengraphImage(opengraphImageSrc)} />
      <meta property="og:title" content={pageTitle()} />
      <meta
        property="twitter:image"
        content={opengraphImage(opengraphImageSrc)}
      />
      <meta property="twitter:title" content={pageTitle()} /> */}
    </Helmet>
  )
}

SiteHead.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SiteHead
