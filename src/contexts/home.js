import PropTypes from 'prop-types'
import React from 'react'

const HomeContext = React.createContext({})

const HomeContextProvider = ({ data, children }) => {
  const homeContextValue = {}

  return (
    <HomeContext.Provider value={homeContextValue}>
      {children}
    </HomeContext.Provider>
  )
}

HomeContextProvider.propTypes = {
  data: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default HomeContext
export { HomeContextProvider }
