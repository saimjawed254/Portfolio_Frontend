import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./main.css"
import { Provider } from "react-redux";
import modeStore from './store/store.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import AllProjects from './Components/AllProjects.jsx';
import Hero from './Components/Hero.jsx';
import BlogPortfolio from './Components/BlogPortfolio.jsx';
import BlogPortfolioDesign from './Components/BlogPortfolioDesign.jsx';
import BlogExpresso from './Components/BlogExpresso.jsx';
import BlogGym from './Components/BlogGym.jsx';
import BlogSocialCrap from './Components/BlogSocialCrap.jsx';
import BlogSocialCrapDesign from './Components/BlogSocialCrapDesign.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={modeStore}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/home' element={<App/>}/>
        <Route path='/allprojects' element={<AllProjects/>}/>
        <Route path='/blog-portfolio-saim-jawed' element={<BlogPortfolio/>}/>
        <Route path='/blog-portfolio-design' element={<BlogPortfolioDesign/>}/>
        <Route path='/blog-social-crap-design' element={<BlogSocialCrapDesign/>}/>
        <Route path='/blog-social-crap' element={<BlogSocialCrap/>}/>
        <Route path='/blog-gym-website' element={<BlogGym/>}/>
        <Route path='/blog-expresso-website' element={<BlogExpresso/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
    
  </React.StrictMode>,
)
