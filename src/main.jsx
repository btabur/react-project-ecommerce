import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BasketProvidor } from './context/basketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BasketProvidor>
       <App />
    </BasketProvidor>
  </React.StrictMode>,
)
