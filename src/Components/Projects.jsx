import './Projects.css'
import { FaCloudDownloadAlt } from "react-icons/fa";
import { PiHandshakeFill } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'

function Projects() {


    const scrolltoContact=()=>{
        const elemen=document.getElementById('Contact')
        elemen.scrollIntoView()
    }
    const timeC=()=>{
        setTimeout(scrolltoContact,100)
    }

  const modeActive=useSelector((store)=>store.mode)

    return (
        <>
            <div className={"project-"+modeActive.mode} id='Projects'>
                <div className="project-heading">
                    <div className="text-myprojects">
                        <div className="text-my">M</div>
                        <div className={"text-my-y-"+modeActive.mode}>y &#160;</div>
                        <div className="text-projects-P">P</div>
                        <div className={"text-rojects-"+modeActive.mode}>rojects</div>
                    </div>
                    <div className={"text-project-content-"+modeActive.mode}>
                        These are some of my recent projects. <br />
                        There is more to come. I will update some more as soon as <br />
                        I complete them. <br />
                        <br />
                        If you want to discuss about any projects or functionality, <br />
                        feel free to ping me. <br />
                        <br />
                        To read detailed insights of the featured projects, <br />
                        click on the show all button. <br /> <br />
                    </div>

                    <div className="project-buttons">
                        <div className="project-buttons-in">
                            <a href="/Resume1.pdf" download>
                                <button className={"button-cv-project-"+modeActive.mode}><div className="text-inbutton2">DOWNLOAD CV</div><FaCloudDownloadAlt className='download-project' /></button>
                            </a>
                            <Link to='/' onClick={timeC} >
                            <button className={"button-contact-project-"+modeActive.mode}><div className="text-inbutton1">CONTACT ME </div><PiHandshakeFill className='project-contact' /></button>
                            </Link>
                        </div>

                        <Link to='/allprojects' className={"show-all-button-"+modeActive.mode}>
                            <div className="text-showall">Show all... <BsArrowRight className='right-arrow-projects' />
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="gallery">
                    <div className="gallery-box1">
                        <div className="aero1"><div className="img-aero1"></div></div>
                        <div className="aero-box">
                            <div className="aero2"><div className="img-aero2"></div></div>
                            <div className="aero3"><div className="img-aero3"></div></div>
                        </div>
                    </div>
                    <div className="gallery-box2">
                        <div className="aero-box2">
                            <div className="aero4"><div className="img-aero4"></div></div>
                            <div className="aero5"><div className="img-aero5"></div></div>
                            <div className="aero6"><div className="img-aero6"></div></div>
                        </div>
                        <div className="aero7"><div className="img-aero7"></div></div>

                    </div>


                </div>


            </div>
        </>
    )
}

export default Projects