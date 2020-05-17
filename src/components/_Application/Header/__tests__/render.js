import Header from '../'
import { StaticRouter } from 'react-router-dom'

let wrapper = mount(
  <StaticRouter context={{}}>
    <Header />
  </StaticRouter>,
)

describe('<Header />', () => {
  describe('Render', () => {
    it('matches its snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('renders without crashing', () => {
      expect(wrapper.find(Header)).toExist()
    })
  })
})
