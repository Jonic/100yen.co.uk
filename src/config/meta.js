const twitter = '@Jonic'
const description = 'Websites and other stuff by Jonic Linley'

module.exports = {
  meta: [
    { name: 'author', content: 'Jonic' },
    { name: 'apple-mobile-web-app-title', content: '100yen' },
    { name: 'description', content: description },
    { name: 'charset', content: 'UTF-8' },
    { name: 'description', content: description },
    { name: 'format-detection', content: 'telephone=no' },
    { name: 'og:description', content: description },
    { name: 'og:site_name', content: '100yen' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:creator', content: twitter },
    { name: 'twitter:description', content: description },
    { name: 'twitter:site', content: twitter },
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=yes',
    },
  ],
}
