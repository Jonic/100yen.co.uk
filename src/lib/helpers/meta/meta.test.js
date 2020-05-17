import { opengraphImage, pageTitle } from 'lib/helpers/meta'

describe('MetaHelper', () => {
  describe('opengraphImage', () => {})

  describe('pageTitle', () => {
    context('when title supplied', () => {
      it('returns a formatted title', () => {
        const result = pageTitle('Whatevs')
        expect(result).toEqual('Whatevs – 100yen')
      })
    })

    context('when title is not supplied', () => {
      it('returns default title', () => {
        const result = pageTitle()
        expect(result).toEqual('WHO CARES – 100yen')
      })
    })
  })
})
