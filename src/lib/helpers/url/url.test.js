import { isExternal } from 'lib/helpers/url'

describe('UrlHelper', () => {
  describe('isExternal', () => {
    context('with value beginning http', () => {
      it('returns true', () => {
        expect(isExternal('https://whatevs.com')).toEqual(true)
      })
    })

    context('with value beginning /', () => {
      it('returns false', () => {
        expect(isExternal('/whatevs')).toEqual(false)
      })
    })
  })
})
