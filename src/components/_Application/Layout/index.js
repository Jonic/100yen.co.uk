import './assets/layout.scss'

import Footer from 'components/_Application/Footer'
import Header from 'components/_Application/Header'
import Main from 'components/_Application/Main'
import PropTypes from 'prop-types'
import React from 'react'
import SiteHead from 'components/_Application/SiteHead'

export const Layout = ({ children, data }) => (
  <React.Fragment>
    <SiteHead data={data.site.siteMetadata} />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.object,
  data: PropTypes.object.isRequired,
}

export default Layout
