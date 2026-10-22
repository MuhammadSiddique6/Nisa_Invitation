import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import EngagementWebsite from './components/EngagementWebsite'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EngagementWebsite />
  </StrictMode>,
)
