import { opengraphImage, pageTitle } from '@/helpers/meta'

describe('meta helper', () => {
  describe('opengraphImage', () => {
    context('with local imageSrc', () => {
      it('prepends the Raspberry Pi domain to the imageSrc', () => {
        const result = opengraphImage('/path/to/image.jpg')
        expect(result).toEqual('https://www.raspberrypi.org/path/to/image.jpg')
      })

      it('adds a slash if necessary', () => {
        const result = opengraphImage('path/to/image.jpg')
        expect(result).toEqual('https://www.raspberrypi.org/path/to/image.jpg')
      })
    })

    context('with remote imageSrc', () => {
      it('returns the imageSrc', () => {
        const result = opengraphImage(
          'https://www.raspberrypi.org/path/to/other-image.jpg',
        )
        expect(result).toEqual(
          'https://www.raspberrypi.org/path/to/other-image.jpg',
        )
      })
    })
  })

  describe('pageTitle', () => {
    context('when title supplied', () => {
      it('returns a formatted title', () => {
        const result = pageTitle('Whatevs')
        expect(result).toEqual('Whatevs – Raspberry Pi')
      })
    })

    context('when title is not supplied', () => {
      it('returns default title', () => {
        const result = pageTitle()
        expect(result).toEqual(
          'Teach, Learn, and Make with Raspberry Pi – Raspberry Pi',
        )
      })
    })
  })
})
