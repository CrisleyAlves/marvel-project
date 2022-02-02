import { Provider } from 'react-redux'

import store from './state/store'

import { Navbar } from './components/'
import HeroDetail from './pages/hero-detail/HeroDetail'

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />

      <div className='PageContainer'>
        <HeroDetail />
      </div>
    </Provider>
  )
}

export default App;
