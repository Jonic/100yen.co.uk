export const isExternal = url => /^(f|ht)tps?:\/\//i.test(url)

const UrlHelper = {
  isExternal,
}

export default UrlHelper
