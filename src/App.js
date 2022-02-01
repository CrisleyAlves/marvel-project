import { Provider } from 'react-redux'

import store from './state/store'

const Hello = () => <h1>Hello :)</h1>

const App = () => {
  return (
    <Provider store={store}>
      <Hello />
    </Provider>
  )
}

export default App;
