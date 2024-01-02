import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

export const themeCtx = createContext('')

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <themeCtx.Provider value="dark">
      <App/>
    </themeCtx.Provider>
  </React.StrictMode>,
)
