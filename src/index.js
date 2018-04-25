import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, {
  history,
} from './redux/configureStore'
import Routes from './Routes'
import 'semantic-ui-css/semantic.min.css'
import './css/main.css'

const target = document.querySelector(
  '#root'
)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  target
)
