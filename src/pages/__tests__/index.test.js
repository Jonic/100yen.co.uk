import IndexPage from '../index'

let wrapper = shallow(<IndexPage />)

describe('<IndexPage />', () => {
  describe('Render', () => {
    it('matches its snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })
})
