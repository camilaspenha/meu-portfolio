import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js' 
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/custom.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/meu-portfolio/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
