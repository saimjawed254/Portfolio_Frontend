
import './Hero.css'
import { useSelector } from 'react-redux';
import { FaRegArrowAltCircleDown, FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const width=screen.width;
const height=screen.height;

function Hero() {

  const scrolltoAbout=()=>{
    const elemen=document.getElementById('AboutMe')
    elemen.scrollIntoView()
}
const timeA=()=>{
    setTimeout(scrolltoAbout,100)
}


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
            <div className={"Hero-"+modeActive.mode} id="Hero">
                <Link to='/' onClick={timeC} className={"sidebar-"+modeActive.mode}></Link>
                <Link to='/' onClick={timeC} className={"talk2-"+modeActive.mode}>LETS TALK </Link>
                <div className={"top-heading-"+modeActive.mode}>Hi! I'm <span className={"Saim"}>Saim Jawed</span></div>
                <div className={"heading1-"+modeActive.mode}>I'm a</div>
                <div className={"main-text-"+modeActive.mode}>
                <span className={"heading2"}>&#706;/&nbsp; </span>
                Developer&nbsp;
                <span className={"heading4"}>&#707;</span>
                </div>
              
                <div className={"content-"+modeActive.mode}> 
                  <span className={"first-line-"+modeActive.mode}>I’m an Indian-based Web Developer and an aspiring <br /> </span> 
                  <span className={"second-line-"+modeActive.mode}> UI/UX Designer trying to make the most out of my <br /> </span>
                  <span className={"third-line-"+modeActive.mode}> creative thoughts. I want to design amazing web apps <br /> </span>
                  <span className={"fourth-line-"+modeActive.mode}> and write clean solutions for achieving those designs <br /> </span>
                   <span className={"fifth-line-"+modeActive.mode}> and functionalities. <br /> </span>
                   </div>
                   <Link to='/' onClick={timeA} >
                    <button className={"button1-"+modeActive.mode}><div className={"text1"}>MORE ABOUT ME </div><FaRegArrowAltCircleDown className={'down-arrow'}/></button>
                    </Link>
                    <a href="/RESUME_2306049_SAIM_JAWED_CSE.pdf" download>
                    <button className={"button2-"+modeActive.mode}><div className={"text2"}>DOWNLOAD CV</div><FaCloudDownloadAlt className={'download'}/></button>
                    </a>
                    <div className={"circles-"+modeActive.mode}>
                    <div className={"circle-cover1-"+modeActive.mode}>
                      <div className={"circle-cover2-"+modeActive.mode}></div>
                    </div>
                    
                    </div>
                    <div className={"image-box-"+modeActive.mode}>
                    <div className={'image'}></div>
                    <div className="circle1"><svg classname="circletry" xmlns="http://www.w3.org/2000/svg" width="11vw" height="19.53vh" viewBox="0 0 245 245" fill="none">
  <g filter="url(#filter0_ii_26_4)">
    <circle cx="122.5" cy="122.5" r="122.5" fill="#D9D9D9" fill-opacity="0.5"/>
  </g>
  <circle cx="122.5" cy="122.5" r="119.5" stroke="#9100FF" stroke-opacity="0.5" stroke-width="6"/>
  <defs>
    <filter id="filter0_ii_26_4" x="-34" y="-18" width="304" height="288" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="25" dy="25"/>
      <feGaussianBlur stdDeviation="47.5"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.775 0 0 0 0 0 0 0 0 0 1 0 0 0 0.6 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_26_4"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="-34" dy="-18"/>
      <feGaussianBlur stdDeviation="32.5"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.097561 0 0 0 0 0 0 0 0 0 1 0 0 0 0.59 0"/>
      <feBlend mode="normal" in2="effect1_innerShadow_26_4" result="effect2_innerShadow_26_4"/>
    </filter>
  </defs>
                    </svg></div>
                    <div className="circle2"><svg xmlns="http://www.w3.org/2000/svg" width="7.32vw" height="13vh" viewBox="0 0 144 144" fill="none">
  <g filter="url(#filter0_ii_26_6)">
    <circle cx="72" cy="72" r="71" transform="rotate(116.894 72 72)" fill="#D9D9D9" fill-opacity="0.5"/>
  </g>
  <circle cx="72" cy="72" r="68" transform="rotate(116.894 72 72)" stroke="url(#paint0_linear_26_6)" stroke-opacity="0.36" stroke-width="6"/>
  <defs>
    <filter id="filter0_ii_26_6" x="-33.0153" y="-17.0152" width="201.031" height="185.03" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="25" dy="25"/>
      <feGaussianBlur stdDeviation="47.5"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.775 0 0 0 0 0 0 0 0 0 1 0 0 0 0.6 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_26_6"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="-34" dy="-18"/>
      <feGaussianBlur stdDeviation="32.5"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.097561 0 0 0 0 0 0 0 0 0 1 0 0 0 0.59 0"/>
      <feBlend mode="normal" in2="effect1_innerShadow_26_6" result="effect2_innerShadow_26_6"/>
    </filter>
    <linearGradient id="paint0_linear_26_6" x1="22.7347" y1="12.0123" x2="117.498" y2="121.265" gradientUnits="userSpaceOnUse">
      <stop stop-color="#1900FF"/>
      <stop offset="1" stop-color="#DD00FF"/>
    </linearGradient>
  </defs>
                    </svg></div>
                    <div className="circle3"><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="5.2vh" viewBox="0 0 66 66" fill="none">
  <g filter="url(#filter0_ii_26_7)">
    <circle cx="33" cy="33" r="33" transform="matrix(-1 0 0 1 66 0)" fill="#D9D9D9" fill-opacity="0.4"/>
  </g>
  <circle cx="33" cy="33" r="30" transform="matrix(-1 0 0 1 66 0)" stroke="url(#paint0_linear_26_7)" stroke-opacity="0.36" stroke-width="6"/>
  <defs>
    <filter id="filter0_ii_26_7" x="0" y="-18" width="91" height="109" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="25" dy="25"/>
      <feGaussianBlur stdDeviation="47.5"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.775 0 0 0 0 0 0 0 0 0 1 0 0 0 0.3 0"/>
      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_26_7"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dx="8" dy="-18"/>
      <feGaussianBlur stdDeviation="32.5"/>
      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.097561 0 0 0 0 0 0 0 0 0 1 0 0 0 0.3 0"/>
      <feBlend mode="normal" in2="effect1_innerShadow_26_7" result="effect2_innerShadow_26_7"/>
    </filter>
    <linearGradient id="paint0_linear_26_7" x1="10.102" y1="5.11837" x2="54.1469" y2="55.898" gradientUnits="userSpaceOnUse">
      <stop stop-color="#1900FF"/>
      <stop offset="1" stop-color="#DD00FF"/>
    </linearGradient>
  </defs>
                    </svg></div>
                </div>
            </div>
        </>
    )
}

export default Hero;