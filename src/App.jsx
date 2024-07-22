import { useState } from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import AboutMe from './Components/AboutMe'
import Skills from './Components/Skills'
import GetinTouch from './Components/GetinTouch'
import Projects from './Components/Projects'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import Mode from './Components/mode.jsx';



function App() {
  

  return (
    <>
      <Mode/>
    <Header ></Header>
    <Hero ></Hero>
    <AboutMe></AboutMe>
    <Skills></Skills>
    <Projects></Projects>
    <GetinTouch></GetinTouch>
    <ToastContainer theme="dark" position='top-right'/>

    </>
  )
}

export default App
