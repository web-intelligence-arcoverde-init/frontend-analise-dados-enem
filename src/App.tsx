import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { RoutesConfig } from './routes/index.routes'
import GlobalStyle from './styles/global'

import store from './store'

export const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <RoutesConfig />
      </Router>
    </Provider>
  )
}
