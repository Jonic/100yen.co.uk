import ApplicationLayoutContainer from 'containers/_Application/Layout'
import { PropTypes } from 'prop-types'
import React from 'react'

const HomeContainer = ({ data }) => (
  <ApplicationLayoutContainer></ApplicationLayoutContainer>
)

HomeContainer.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HomeContainer
