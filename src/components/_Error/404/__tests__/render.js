import NotFound from '../'
import { StaticRouter } from 'react-router-dom'

let wrapper = mount(
  <StaticRouter context={{}}>
    <NotFound />
  </StaticRouter>,
)

describe('<NotFound />', () => {
  describe('Render', () => {
    it('matches its snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('renders without crashing', () => {
      expect(wrapper.find(NotFound)).toExist()
    })
  })
})
