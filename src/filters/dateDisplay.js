const { DateTime } = require('luxon')

module.exports = (dateObj, format = 'LLL yyyy') => {
  return DateTime.fromJSDate(dateObj, {
    zone: 'utc',
  }).toFormat(format)
}
