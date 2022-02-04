import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import store from './state/store'

import CharacterDetail from './pages/character-detail/CharacterDetail'
import CharacterEdit from './pages/character-edit/CharacterEdit';
import Home from './pages/home/Home'
import NotFound from './pages/not-found/NotFound'

import { Navbar } from './components/'

const App = () => {
  return (
    <Provider store={store}>
        <Router>
        <Navbar />

        <div className='PageContainer'>
          <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/character/:id" element={<CharacterDetail />} ></Route>
            <Route path="/character/edit/" element={<CharacterEdit />} ></Route>
            <Route path="*" element={<NotFound />} ></Route>
          </Routes>
          </div>
        </Router>
    </Provider>
  )
}

export default App;
