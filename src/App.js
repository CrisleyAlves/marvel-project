import { Provider } from 'react-redux'

import store from './state/store'

import { Navbar } from './components/'
import Home from './pages/home/Home'

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />

      <div className='PageContainer'>
        <Home />
      </div>
    </Provider>
  )
}

export default App;
