import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import store from '../state/store';

const RouterWrapper = ({
  children
}) => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={children}></Route>
        </Routes>
      </Router>
    </Provider>
  )
}

export default RouterWrapper;
