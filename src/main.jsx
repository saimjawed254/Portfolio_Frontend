import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./main.css"
import { Provider } from "react-redux";
import modeStore from './store/store.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AllProjects from './Components/AllProjects.jsx';
import Hero from './Components/Hero.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={modeStore}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/home' element={<App/>}/>
        <Route path='/allprojects' element={<AllProjects/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
    
  </React.StrictMode>,
)
