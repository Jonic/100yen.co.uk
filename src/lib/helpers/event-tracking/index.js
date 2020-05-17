/* eslint-disable camelcase */
export const trackEvent = event => {
  if (typeof window === 'undefined' || typeof window.gtag === 'undefined') {
    return
  }

  const data = event.currentTarget.dataset
  const eventData = {
    ...(data.eventCategory && { event_category: data.eventCategory }),
    ...(data.eventLabel && { event_label: data.eventLabel }),
    ...(data.eventValue && { value: data.eventValue }),
  }

  window.gtag('event', 'click', eventData)
}

const EventTrackingHelper = {
  trackEvent,
}

export default EventTrackingHelper
