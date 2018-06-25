import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './core/app'
import store from './core/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
