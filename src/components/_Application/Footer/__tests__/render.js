import Footer from '../'
import { StaticRouter } from 'react-router-dom'

let wrapper = mount(
  <StaticRouter context={{}}>
    <Footer />
  </StaticRouter>,
)

describe('<Footer />', () => {
  describe('Render', () => {
    it('matches its snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('renders without crashing', () => {
      expect(wrapper.find(Footer)).toExist()
    })
  })
})
