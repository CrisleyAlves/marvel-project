import { Provider } from 'react-redux'

import store from './state/store'

import { Navbar } from './components/'
import CharacterDetail from './pages/character-detail/CharacterDetail'

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />

      <div className='PageContainer'>
        <CharacterDetail />
      </div>
    </Provider>
  )
}

export default App;
