import "./AboutMe.css";
import { FaSchool } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { PiHandshakeFill } from "react-icons/pi";
import { FaCodeBranch } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AboutMe() {

    const scrolltoContact=()=>{
        const elemen=document.getElementById('Contact')
        elemen.scrollIntoView()
    }
    const timeC=()=>{
        setTimeout(scrolltoContact,100)
    }


    const scrolltoSkills=()=>{
        const elemen=document.getElementById('Skills')
        elemen.scrollIntoView()
    }
    const timeS=()=>{
        setTimeout(scrolltoSkills,100)
    }

  const modeActive=useSelector((store)=>store.mode)

    return (
        <>
            <div className={"AboutMe-"+modeActive.mode} id="AboutMe">
                <div className="about-me">
                    <div className={"text-about-"+modeActive.mode}>About</div>
                    <div className="text-me">Me</div>
                    <div className={"full-text-"+modeActive.mode}>Greetings! I’m Saim Jawed, a 20 years old Web Developer<br/>
                                                and a passionate UI/UX Designer always looking for new<br/>
                                                 ways to have fun with my design tools and use my strong <br/>
                                              foundations in coding and design principles to bring<br/>
                                                 those ideas to life.<br/>
                        <br/>
                                               Currently, I’m in my 2nd year pursuing a Bachelor’s in<br/>
                                               Computer Science and Engineering from the<br/>
                                               National Institute of Technology, Patna.<br/>
                        <br/>
                                               Recently, I have started learning about Cloud Computing and I am <br/>
                                              very hopeful I will soon be able to start<br/>
                                            building with this amazing technology.<br/>
                    </div>
                    <Link to='/' onClick={timeS} >
                    <div className={"button-skills-"+modeActive.mode}><div className="text-skills">MY SKILLS<FaCodeBranch className="code-branch"/></div></div>
                    </Link>
                    <Link to='/' onClick={timeC} >
                    <div className={"button-contact-"+modeActive.mode}><div className="text-contact">CONTACT ME<PiHandshakeFill className='aboutme-contact' /></div></div>
                    </Link>
                </div>
                <div className="education">
                    <div className="text-ed">Ed</div>
                    <div className={"text-ucation-"+modeActive.mode}>ucation</div>
                    <div className="boxes1">
                        <div className={"box1-"+modeActive.mode}><FaGraduationCap className="logo-grad"/></div>
                        <div className={"box2-"+modeActive.mode}> <div className={"text-name1-"+modeActive.mode}>National Institute of Technology, Patna </div>
                            <span className="extra1"></span>
                            <div className={"extra2-"+modeActive.mode}>Institute of National Importance</div>
                            <div className={"extra3-"+modeActive.mode}>2023-2027 (CGPA - 8.05)</div></div></div>
                    </div>
                    <div className="boxes2">
                        <div className={"box3-"+modeActive.mode}><FaSchool className="logo-school"/></div>
                        <div className={"box4-"+modeActive.mode}>  <div className={"text-name2-"+modeActive.mode}>Don Bosco Academy </div>
                            <span className={"extra4-"+modeActive.mode}>Patna, Bihar</span>
                            <div className={"extra5-"+modeActive.mode}>Indian School Certificate (ISC)</div>
                            <div className={"extra6-"+modeActive.mode}>Intermediate (89%)</div></div>
                    </div>
                    <div className="boxes3">
                        <div className={"box5-"+modeActive.mode}><FaSchool className="logo-school"/></div>
                        <div className={"box6-"+modeActive.mode}>
                            <div className={"text-name3-"+modeActive.mode}>Don Bosco Academy </div>
                            <span className={"extra7-"+modeActive.mode}>Patna, Bihar</span>
                            <div className={"extra8-"+modeActive.mode}>Indian Certificate of Secondary Education (ICSE)</div>
                            <div className={"extra9-"+modeActive.mode}>High School (94%)</div>
                        </div>
                    </div>


                </div>
        </>
    )
}

export default AboutMe;