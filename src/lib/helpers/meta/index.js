import { withAssetPrefix } from 'gatsby'

// eslint-disable-next-line complexity
export const opengraphImage = (imageSrc) => {
  let joinCharacter = '/'

  if (imageSrc.indexOf('/') === 0) {
    joinCharacter = ''
  }

  return ['https://www.100yen.co.uk', imageSrc].join(joinCharacter)
}

export const pageTitle = (title) => {
  const defaultTitle = 'WHO CARES'
  const siteName = '100yen'
  return [title || defaultTitle, siteName].join(' – ')
}

const MetaHelper = { opengraphImage, pageTitle }

export default MetaHelper
