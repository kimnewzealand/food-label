import React from 'react'
import { render } from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap'
//http://hydronitrogen.com/using-bootstrap-in-a-es6-webpack-application.html

import reducers from './reducers'
import App from './components/App'

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>

    </Provider>,
    document.getElementById('app')
  )
})
