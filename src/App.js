import { Provider } from 'react-redux'

import store from './state/store'

import Navbar from './components/navbar/navbar'

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
    </Provider>
  )
}

export default App;
