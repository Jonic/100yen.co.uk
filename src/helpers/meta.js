const opengraphImage = imageSrc => {
  if (/^http/i.test(imageSrc)) {
    return imageSrc
  }

  let joinCharacter = '/'

  if (imageSrc.indexOf('/') === 0) {
    joinCharacter = ''
  }

  return ['https://www.raspberrypi.org', imageSrc].join(joinCharacter)
}

const pageTitle = title => {
  const defaultTitle = 'Teach, Learn, and Make with Raspberry Pi'
  const siteName = 'Raspberry Pi'
  return [title || defaultTitle, siteName].join(' – ')
}

export { opengraphImage, pageTitle }
