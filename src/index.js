import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App'
import reportWebVitals from './reportWebVitals'
import ReduxProvider from './redux/store'
import Router from './router'
import { Web3ReactProvider } from '@web3-react/core'
import { getLibrary } from './utils/web3React'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ReduxProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Router></Router>

      </Web3ReactProvider>

      {/* <App /> */}
    </ReduxProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
