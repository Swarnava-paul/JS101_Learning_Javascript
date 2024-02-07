import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
export const ContextApivalue=React.createContext()

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContextApivalue.Provider value={{Value:1}}>
    <App />
  </ContextApivalue.Provider>
)
