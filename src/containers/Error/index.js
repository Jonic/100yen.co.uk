import ApplicationLayoutContainer from 'Containers/_Application/Layout'
import Error404 from 'Components/_Error/404'
import { PropTypes } from 'prop-types'
import React from 'react'

const ErrorContainer = ({ data }) => (
  <ApplicationLayoutContainer>
    <Error404 />
  </ApplicationLayoutContainer>
)

ErrorContainer.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ErrorContainer
