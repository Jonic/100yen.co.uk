import Main from '../'

let wrapper = mount(<Main />)

describe('<Main />', () => {
  describe('Render', () => {
    it('matches its snapshot', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('renders without crashing', () => {
      expect(wrapper.find(Main)).toExist()
    })
  })
})
