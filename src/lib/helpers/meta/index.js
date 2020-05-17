export const opengraphImage = (imageSrc) => {
  if (!imageSrc) {
    return
  }

  return ['https://www.100yen.co.uk', imageSrc].join('/')
}

export const pageTitle = (title) => {
  const defaultTitle = 'WHO CARES'
  const siteName = '100yen'
  return [title || defaultTitle, siteName].join(' – ')
}

const MetaHelper = { opengraphImage, pageTitle }

export default MetaHelper
