// eslint-disable-next-line no-underscore-dangle
global.___loader = {
  enqueue: jest.fn(),
}
global.bootstrapEnzymeEnvironment = true
global.fetch = require('jest-fetch-mock')
global.IntersectionObserver = jest.fn(() => {
  return {
    observe: jest.fn(),
  }
})
