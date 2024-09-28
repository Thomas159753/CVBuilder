import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ParentComponent from './components/ParentComponent.jsx'
import './components/styles/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ParentComponent />
  </StrictMode>,
)
