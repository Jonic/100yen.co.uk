import SiteHead from '../'
import siteData from 'lib/tests-data/site.json'

const wrapper = mount(
  <SiteHead
    opengraphImageSrc={opengraphImageSrc}
    data={siteData.site.siteMetadata}
  />
)

describe('<SiteHead />', () => {
  describe('Render', () => {
    it('matches its snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('renders without crashing', () => {
      expect(wrapper.find(SiteHead)).toExist()
    })
  })
})
