import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

import './index.css'
import './pages/skills.css'
import './pages/photographers.css'
import './pages/landing.css'
import './components/profilecard.css'
import './components/profilecard1.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

