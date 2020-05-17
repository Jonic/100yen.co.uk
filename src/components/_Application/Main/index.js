import PropTypes from 'prop-types'
import React from 'react'

const Main = ({ children }) => <main className="o-main">{children}</main>

Main.propTypes = {
  children: PropTypes.object,
}

export default Main
