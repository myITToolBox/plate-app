import LayoutContainer from '../containers/LayoutContainer'
import Login from '../components/Login/Login'
import withData from '../lib/withData'

export default withData(() => (
  <LayoutContainer>
    <Login />
  </LayoutContainer>
))
