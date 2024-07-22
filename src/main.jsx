import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./main.css"
import { Provider } from "react-redux";
import modeStore from './store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={modeStore}>
    <App />
    </Provider>
    
  </React.StrictMode>,
)
