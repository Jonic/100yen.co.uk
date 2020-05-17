import { BrowserRouter } from 'react-router-dom'
import Footer from 'components/application/footer'
import Header from 'components/application/header'
import Main from 'components/application/main'
import { PureLayout } from 'components/layout'
import SiteHead from 'components/application/site-head'
import data from 'lib/tests-data/site.json'

let wrapper = mount(
  <BrowserRouter>
    <PureLayout data={data} />
  </BrowserRouter>
)

describe('<Layout />', () => {
  describe('Render', () => {
    it('matches its snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('renders without crashing', () => {
      expect(wrapper).toExist()
    })

    it('renders a Footer', () => {
      expect(wrapper.find(Footer)).toExist()
    })

    it('renders a Main', () => {
      expect(wrapper.find(Main)).toExist()
    })

    it('renders a SiteHead', () => {
      expect(wrapper.find(SiteHead)).toExist()
    })

    it('renders a Header', () => {
      expect(wrapper.find(Header)).toExist()
    })
  })
})
