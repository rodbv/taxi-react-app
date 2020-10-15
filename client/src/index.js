import './index.css'
import 'bootswatch/dist/lumen/bootstrap.css'
import { HashRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import App from './App'
import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
