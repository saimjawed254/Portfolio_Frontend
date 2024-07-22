import './Header.css'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function Header() {

  const modeActive=useSelector((store)=>store.mode)

    let [toggle1, setToggle1] = useState(false);
    const handleClickglow1 = () => {
        setToggle1(!toggle1);
    }
    let [toggle2, setToggle2] = useState(false);
    const handleClickglow2 = () => {
        setToggle2(!toggle2);
    }
    let [toggle3, setToggle3] = useState(false);
    const handleClickglow3 = () => {
        setToggle3(!toggle3);
    }
    let [toggle4, setToggle4] = useState(false);
    const handleClickglow4 = () => {
        setToggle4(!toggle4);
    }
    let [toggle5, setToggle5] = useState(false);
    const handleClickglow5 = () => {
        setToggle5(!toggle5);
    }
    let [toggle6, setToggle6] = useState(false);
    const handleClickglow6 = () => {
        setToggle6(!toggle6);
    }
    let [toggle7, setToggle7] = useState(false);
    const handleClickglow7 = () => {
        setToggle7(!toggle7);
    }
    let [toggle8, setToggle8] = useState(false);
    const handleClickglow8 = () => {
        setToggle8(!toggle8);
    }
    let [toggle9, setToggle9] = useState(false);
    const handleClickglow9 = () => {
        setToggle9(!toggle9);
    }

    return (
        <>

            <div className="container">

                <div className={"name"+"-"+modeActive.mode}>
                    <span onClick={handleClickglow1} className={toggle1 ? "wobble" : ""}>S</span>
                    <span onClick={handleClickglow2} className={toggle2 ? "wobble" : ""}>A</span>
                    <span onClick={handleClickglow3} className={toggle3 ? "wobble" : ""}>I</span>
                    <span onClick={handleClickglow4} className={toggle4 ? "wobble" : ""}>M</span>
                    <span>&nbsp;</span>
                    <span onClick={handleClickglow5} className={toggle5 ? "wobble" : ""}>J</span>
                    <span onClick={handleClickglow6} className={toggle6 ? "wobble" : ""}>A</span>
                    <span onClick={handleClickglow7} className={toggle7 ? "wobble" : ""}>W</span>
                    <span onClick={handleClickglow8} className={toggle8 ? "wobble" : ""}>E</span>
                    <span onClick={handleClickglow9} className={toggle9 ? "wobble" : ""}>D</span>

                </div>

                <div className={"navbar-"+modeActive.mode}>

                    <a href='#Hero' className='elem' >HOME</a>
                    <a href='#AboutMe' className='elem'>ABOUT ME</a>
                    <a href='#Skills' className='elem'>SKILLS</a>
                    {/* <a href='#Education' className='elem'>EXPERIENCE</a> */}
                    <a href='#Projects' className='elem'>PROJECTS</a>
                    <a href='#Contact' className='elem'>GET IN TOUCH</a>
                </div>
                <div className="social">
                    <a href="https://www.instagram.com/s._aim_jawed" target='_blank'><FaInstagram className={'instagram-icon-'+modeActive.mode} /></a>
                    <a href="https://www.linkedin.com/in/saim-jawed-6a8766294" target='_blank'><FaLinkedin className={'linkedin-icon-'+modeActive.mode} /></a>
                    <a href="https://github.com/saimjawed254" target='_blank'><FaGithub className={'github-icon-'+modeActive.mode} /></a>
                </div>
            </div>
        </>
    )
}

export default Header;