import Layout from 'components/layout'
import NotFoundPage from '../404'

const wrapper = shallow(<NotFoundPage />)

describe('<NotFoundPage />', () => {
  describe('Render', () => {
    it('matches its snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('renders without crashing', () => {
      expect(wrapper.find(Layout)).toExist()
    })
  })
})
