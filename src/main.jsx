import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'

// ← NEW: Import Vercel Analytics
import { Analytics } from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
      {/* ← NEW: Add the Analytics component here */}
      <Analytics />
    </HashRouter>
  </React.StrictMode>,
)