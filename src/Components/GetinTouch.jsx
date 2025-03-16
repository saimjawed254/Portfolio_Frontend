import './GetinTouch.css'
import { BsLinkedin } from "react-icons/bs";
import { BsFillThreadsFill } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { RxDoubleArrowUp } from "react-icons/rx";
import { useEffect, useState, useRef } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function GetinTouch() {

  const scrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const modeActive = useSelector((store) => store.mode)

  const [hello, setHello] = useState("All Good")
  useEffect(() => {
    const fetchdata = async () => {
      const data = await fetch("http://54.174.198.26:4000/")
      const mess = await data.json()
      setHello(mess.hell)
    }
    fetchdata()
  }, [])


  const nameRef = useRef()
  const numberRef = useRef()
  const emailRef = useRef()
  const messageRef = useRef()

  const handleForm = async (event) => {
    event.preventDefault()
    const name = nameRef.current.value
    const number = numberRef.current.value
    const mail = emailRef.current.value
    const message = messageRef.current.value
    console.log("done " + name + " " + number + " " + mail + " " + message)
    try {
      const { data } = await axios.post("http://54.174.198.26:4000/send", {
        name,
        number,
        mail,
        message,
      })
      nameRef.current.value = ""
      numberRef.current.value = ""
      emailRef.current.value = ""
      messageRef.current.value = ""
      console.log(data.speaker)
      toast.success(data.speaker)
    }
    catch (error) {
      console.log(error.response.data)
    }
  }
  let [csschanger, setCss] = useState("")

  const handleClick = async () => {
    setCss("glow");
    await setTimeout(() => {
      setCss("");
    }, 5000)
  }

  return (
    <>
      <div className={"contact-" + modeActive.mode} id="Contact">
        <div className="text-contactme">
          <div className="C">C</div>
          <div className={"text-ontact-" + modeActive.mode}>ontact &#160;</div>
          <div className="M">M</div>
          <div className={"text-e-" + modeActive.mode}>e</div>
          <div className="ex">!</div>
        </div>
        <div className={"text-getintouch-" + modeActive.mode}>Get in touch via&#160; <div className={"text-media-" + modeActive.mode}>Social Media</div> ,</div>
        <div className="socials-icons">
          <a className="linkedin-logo">
            <a href="https://www.linkedin.com/in/saim-jawed-6a8766294" target='_blank'><BsLinkedin className='lklogo' /></a>
            <a href="https://www.linkedin.com/in/saim-jawed-6a8766294" target='_blank' className="text-linkedin">LinkedIn</a>
          </a>


          <a className="instagram-logo">
            <a href="https://www.instagram.com/s._aim_jawed?igsh=MXcyeGgzdm9scG1wMw==" target='_blank'>
              <svg className='inlogo' xmlns="http://www.w3.org/2000/svg" width="4.4vw" height="7.8125vh" viewBox="0 0 80 80" fill="none">
                <g clip-path="url(#clip0_126_18)">
                  <path d="M61.25 0H18.75C8.39466 0 0 8.39466 0 18.75V61.25C0 71.6053 8.39466 80 18.75 80H61.25C71.6053 80 80 71.6053 80 61.25V18.75C80 8.39466 71.6053 0 61.25 0Z" fill="url(#paint0_radial_126_18)" />
                  <path d="M61.25 0H18.75C8.39466 0 0 8.39466 0 18.75V61.25C0 71.6053 8.39466 80 18.75 80H61.25C71.6053 80 80 71.6053 80 61.25V18.75C80 8.39466 71.6053 0 61.25 0Z" fill="url(#paint1_radial_126_18)" />
                  <path d="M40.0028 8.75C31.5159 8.75 30.4506 8.78719 27.1175 8.93875C23.7906 9.09125 21.5197 9.61781 19.5328 10.3906C17.4772 11.1887 15.7338 12.2566 13.9969 13.9941C12.2584 15.7312 11.1906 17.4747 10.39 19.5294C9.615 21.5169 9.08781 23.7887 8.93812 27.1141C8.78906 30.4475 8.75 31.5131 8.75 40.0003C8.75 48.4875 8.7875 49.5494 8.93875 52.8825C9.09188 56.2094 9.61844 58.4803 10.3906 60.4672C11.1894 62.5228 12.2572 64.2663 13.9947 66.0031C15.7313 67.7416 17.4747 68.8119 19.5288 69.61C21.5172 70.3828 23.7884 70.9094 27.1147 71.0619C30.4481 71.2134 31.5125 71.2506 39.9991 71.2506C48.4869 71.2506 49.5487 71.2134 52.8819 71.0619C56.2088 70.9094 58.4822 70.3828 60.4706 69.61C62.5253 68.8119 64.2662 67.7416 66.0025 66.0031C67.7409 64.2663 68.8084 62.5228 69.6094 60.4681C70.3775 58.4803 70.905 56.2087 71.0612 52.8831C71.2109 49.55 71.25 48.4875 71.25 40.0003C71.25 31.5131 71.2109 30.4481 71.0612 27.1147C70.905 23.7878 70.3775 21.5172 69.6094 19.5303C68.8084 17.4747 67.7409 15.7312 66.0025 13.9941C64.2644 12.2559 62.5259 11.1881 60.4688 10.3909C58.4766 9.61781 56.2044 9.09094 52.8775 8.93875C49.5441 8.78719 48.4828 8.75 39.9931 8.75H40.0028ZM37.1994 14.3816C38.0316 14.3803 38.96 14.3816 40.0028 14.3816C48.3469 14.3816 49.3356 14.4116 52.6306 14.5613C55.6775 14.7006 57.3313 15.2097 58.4328 15.6375C59.8913 16.2038 60.9309 16.8809 62.0241 17.975C63.1178 19.0688 63.7947 20.1103 64.3625 21.5687C64.7903 22.6687 65.3 24.3225 65.4388 27.3694C65.5884 30.6638 65.6209 31.6531 65.6209 39.9931C65.6209 48.3331 65.5884 49.3228 65.4388 52.6169C65.2994 55.6637 64.7903 57.3175 64.3625 58.4178C63.7963 59.8762 63.1178 60.9147 62.0241 62.0078C60.9303 63.1016 59.8919 63.7784 58.4328 64.345C57.3325 64.7747 55.6775 65.2825 52.6306 65.4219C49.3362 65.5716 48.3469 65.6041 40.0028 65.6041C31.6584 65.6041 30.6694 65.5716 27.3753 65.4219C24.3284 65.2813 22.6747 64.7722 21.5722 64.3444C20.1141 63.7778 19.0722 63.1009 17.9784 62.0072C16.8847 60.9134 16.2078 59.8744 15.64 58.4153C15.2122 57.315 14.7025 55.6612 14.5638 52.6144C14.4141 49.32 14.3841 48.3306 14.3841 39.9853C14.3841 31.6403 14.4141 30.6559 14.5638 27.3616C14.7031 24.3147 15.2122 22.6609 15.64 21.5594C16.2066 20.1009 16.8847 19.0594 17.9788 17.9656C19.0725 16.8719 20.1141 16.1947 21.5725 15.6272C22.6741 15.1975 24.3284 14.6897 27.3753 14.5497C30.2581 14.4194 31.3753 14.3803 37.1994 14.3737V14.3816ZM56.6841 19.5703C54.6138 19.5703 52.9341 21.2484 52.9341 23.3191C52.9341 25.3894 54.6138 27.0691 56.6841 27.0691C58.7544 27.0691 60.4341 25.3894 60.4341 23.3191C60.4341 21.2488 58.7544 19.5691 56.6841 19.5691V19.5703ZM40.0028 23.9519C31.1403 23.9519 23.9547 31.1375 23.9547 40.0003C23.9547 48.8631 31.1403 56.0453 40.0028 56.0453C48.8656 56.0453 56.0488 48.8631 56.0488 40.0003C56.0488 31.1378 48.865 23.9519 40.0022 23.9519H40.0028ZM40.0028 29.5834C45.7556 29.5834 50.4197 34.2469 50.4197 40.0003C50.4197 45.7531 45.7556 50.4172 40.0028 50.4172C34.2497 50.4172 29.5863 45.7531 29.5863 40.0003C29.5863 34.2469 34.2497 29.5834 40.0028 29.5834Z" fill="white" />
                </g>
                <defs>
                  <radialGradient id="paint0_radial_126_18" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(21.25 86.1616) rotate(-90) scale(79.2859 73.7422)">
                    <stop stop-color="#FFDD55" />
                    <stop offset="0.1" stop-color="#FFDD55" />
                    <stop offset="0.5" stop-color="#FF543E" />
                    <stop offset="1" stop-color="#C837AB" />
                  </radialGradient>
                  <radialGradient id="paint1_radial_126_18" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-13.4003 5.76281) rotate(78.681) scale(35.4413 146.09)">
                    <stop stop-color="#3771C8" />
                    <stop offset="0.128" stop-color="#3771C8" />
                    <stop offset="1" stop-color="#6600FF" stop-opacity="0" />
                  </radialGradient>
                  <clipPath id="clip0_126_18">
                    <rect width="80" height="80" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
            <a href="https://www.instagram.com/s._aim_jawed?igsh=MXcyeGgzdm9scG1wMw==" target='_blank' className="text-instagram">Instagram</a>
          </a>
          <a className="threads-logo"><a href="">
            <BsFillThreadsFill className='thlogo' /></a>
            <a href="https://www.threads.net/@s._aim_jawed" target='_blank' className={"text-threads-" + modeActive.mode}>Threads</a>
          </a>

          <a className="x-logo"><a href="">
            <BsTwitterX className={'xlogo-' + modeActive.mode} /></a>
            <a href="https://x.com/saim_jawed?t=Snp2aooRuoDLqz2Vfar35w&s=09" target='_blank' className={"text-twitter-" + modeActive.mode}>Twitter-<span className="text-x">X</span></a>
          </a>
        </div>
        <div className="show-form">
          <div onClick={handleClick} className={"viamail-" + modeActive.mode}><div className="text-or">or send me a </div>
            <div className="text-message1">Message <span className="textor">&#160;&#160;&#160;&#160;&#160;or </span><span className="text-email">Mail.</span> </div>
            <BsArrowRight onClick={handleClick} className='right-arrow' />
          </div>
        </div>
        <div className="contact-form">
          <form action="" onSubmit={handleForm} className='form'>
            <div className={"square-name-" + modeActive.mode}> <div className="text-name">Name</div></div>
            <div className={"square-number-" + modeActive.mode}> <div className="text-number">Contact Number</div></div>
            <div className={"square-mail-" + modeActive.mode}> <div className="text-mail">E-mail</div></div>
            <div className={"square-message-" + modeActive.mode}> <div className="text-message">Message</div></div>
            <input type="text" ref={nameRef} className={'input-name-' + modeActive.mode} placeholder='Please enter your good name!' required />
            <input type="number" ref={numberRef} className={'input-number-' + modeActive.mode} placeholder='Optional but appreciated.' minLength="8" maxLength="15" /><br />
            <input type="email" ref={emailRef} className={'input-mail-' + modeActive.mode} placeholder='Please enter your E-mail.' required /><br />
            {/* <textarea ref={messageRef} className='input-message' placeholder={" all good "+hello} required /> */}
            <textarea ref={messageRef} className={'input-message-' + modeActive.mode} placeholder='Feel free to inquire anything!.&#10;Your thoughts are valuable to me.' required />

            <button type='submit' className={'message-button-' + modeActive.mode}>Send message</button>
          </form>
          <a href="mailto:saimjawed7404@gmail.com">
            <button className={'mail-button-' + modeActive.mode}>Mail Personally</button>
          </a>
        </div>

        <div className="footer">
          {modeActive.mode == 'dark-mode' ? <svg className='svg-light-mode' xmlns="http://www.w3.org/2000/svg" width="90vw" height="13vh" viewBox="0 0 1832 132" fill="none">
            <g filter="url(#filter0_dd_198_4)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M881.214 65.1688C868.401 52.0724 852.456 40.7048 834.135 40.7048H168.5C92.0086 40.7048 30 102.713 30 179.205C30 255.696 92.0086 317.705 168.5 317.705H1663.5C1739.99 317.705 1802 255.696 1802 179.205C1802 102.713 1739.99 40.7048 1663.5 40.7048H1054.87C1036.54 40.7048 1020.6 52.0724 1007.79 65.1688V65.1688C999.475 73.6636 989.609 80.4021 978.75 84.9995C967.892 89.5969 956.253 91.9631 944.5 91.9631C932.747 91.9631 921.108 89.5969 910.25 84.9995C899.391 80.4021 889.525 73.6636 881.214 65.1688V65.1688Z" fill="black" />
            </g>
            <defs>
              <filter id="filter0_dd_198_4" x="0" y="0.704834" width="1832" height="357" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="10" />
                <feGaussianBlur stdDeviation="15" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_198_4" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="-10" />
                <feGaussianBlur stdDeviation="15" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_198_4" result="effect2_dropShadow_198_4" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_198_4" result="shape" />
              </filter>
            </defs>
          </svg> : <svg className='svg-dark-mode' xmlns="http://www.w3.org/2000/svg" width="1832" height="132" viewBox="0 0 1832 132" fill="none">
            <g filter="url(#filter0_dd_222_203)">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M881.214 65.1688C868.401 52.0724 852.456 40.7048 834.135 40.7048H168.5C92.0085 40.7048 30 102.713 30 179.205C30 255.696 92.0085 317.705 168.5 317.705H1663.5C1739.99 317.705 1802 255.696 1802 179.205C1802 102.713 1739.99 40.7048 1663.5 40.7048L1054.87 40.7048C1036.54 40.7048 1020.6 52.0724 1007.79 65.1688C999.475 73.6636 989.609 80.4021 978.75 84.9995C967.892 89.5969 956.253 91.9631 944.5 91.9631C932.747 91.9631 921.108 89.5969 910.25 84.9995C899.391 80.4021 889.525 73.6636 881.214 65.1688Z" fill="black" />
            </g>
            <defs>
              <filter id="filter0_dd_222_203" x="0" y="0.704834" width="1832" height="357" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="10" />
                <feGaussianBlur stdDeviation="15" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_222_203" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="-10" />
                <feGaussianBlur stdDeviation="15" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.966667 0 0 0 0 0 0 0 0 0 1 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="effect1_dropShadow_222_203" result="effect2_dropShadow_222_203" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_222_203" result="shape" />
              </filter>
            </defs>
          </svg>}


          <div className="text-copyright">&#169; 2024 Saim Jawed</div>
          <div className="text-handcrafted">Handcrafted by Me!</div>

          <Link to='/' onClick={scrolltoTop} className="up-arrow" ><RxDoubleArrowUp className={"up-arrow-logo-" + modeActive.mode} /></Link>
        </div>
        <div className={csschanger + "-" + modeActive.mode}></div>
        <div className="bg">
          <div className="circleone"><svg classname="circletry" xmlns="http://www.w3.org/2000/svg" width="11vw" height="19.53vh" viewBox="0 0 245 245" fill="none">
            <g filter="url(#filter0_ii_26_4)">
              <circle cx="122.5" cy="122.5" r="122.5" fill="#D9D9D9" fill-opacity="0.5" />
            </g>
            <circle cx="122.5" cy="122.5" r="119.5" stroke="#9100FF" stroke-opacity="0.5" stroke-width="6" />
            <defs>
              <filter id="filter0_ii_26_4" x="-34" y="-18" width="304" height="288" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="25" dy="25" />
                <feGaussianBlur stdDeviation="47.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.775 0 0 0 0 0 0 0 0 0 1 0 0 0 0.6 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_26_4" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-34" dy="-18" />
                <feGaussianBlur stdDeviation="32.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.097561 0 0 0 0 0 0 0 0 0 1 0 0 0 0.59 0" />
                <feBlend mode="normal" in2="effect1_innerShadow_26_4" result="effect2_innerShadow_26_4" />
              </filter>
            </defs>
          </svg></div>
          <div className="circletwo"><svg xmlns="http://www.w3.org/2000/svg" width="7.32vw" height="13vh" viewBox="0 0 144 144" fill="none">
            <g filter="url(#filter0_ii_26_6)">
              <circle cx="72" cy="72" r="71" transform="rotate(116.894 72 72)" fill="#D9D9D9" fill-opacity="0.5" />
            </g>
            <circle cx="72" cy="72" r="68" transform="rotate(116.894 72 72)" stroke="url(#paint0_linear_26_6)" stroke-opacity="0.36" stroke-width="6" />
            <defs>
              <filter id="filter0_ii_26_6" x="-33.0153" y="-17.0152" width="201.031" height="185.03" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="25" dy="25" />
                <feGaussianBlur stdDeviation="47.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.775 0 0 0 0 0 0 0 0 0 1 0 0 0 0.6 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_26_6" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="-34" dy="-18" />
                <feGaussianBlur stdDeviation="32.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.097561 0 0 0 0 0 0 0 0 0 1 0 0 0 0.59 0" />
                <feBlend mode="normal" in2="effect1_innerShadow_26_6" result="effect2_innerShadow_26_6" />
              </filter>
              <linearGradient id="paint0_linear_26_6" x1="22.7347" y1="12.0123" x2="117.498" y2="121.265" gradientUnits="userSpaceOnUse">
                <stop stop-color="#1900FF" />
                <stop offset="1" stop-color="#DD00FF" />
              </linearGradient>
            </defs>
          </svg></div>
          <div className="circlethree"><svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="5.2vh" viewBox="0 0 66 66" fill="none">
            <g filter="url(#filter0_ii_26_7)">
              <circle cx="33" cy="33" r="33" transform="matrix(-1 0 0 1 66 0)" fill="#D9D9D9" fill-opacity="0.4" />
            </g>
            <circle cx="33" cy="33" r="30" transform="matrix(-1 0 0 1 66 0)" stroke="url(#paint0_linear_26_7)" stroke-opacity="0.36" stroke-width="6" />
            <defs>
              <filter id="filter0_ii_26_7" x="0" y="-18" width="91" height="109" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="25" dy="25" />
                <feGaussianBlur stdDeviation="47.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.775 0 0 0 0 0 0 0 0 0 1 0 0 0 0.3 0" />
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_26_7" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dx="8" dy="-18" />
                <feGaussianBlur stdDeviation="32.5" />
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.097561 0 0 0 0 0 0 0 0 0 1 0 0 0 0.3 0" />
                <feBlend mode="normal" in2="effect1_innerShadow_26_7" result="effect2_innerShadow_26_7" />
              </filter>
              <linearGradient id="paint0_linear_26_7" x1="10.102" y1="5.11837" x2="54.1469" y2="55.898" gradientUnits="userSpaceOnUse">
                <stop stop-color="#1900FF" />
                <stop offset="1" stop-color="#DD00FF" />
              </linearGradient>
            </defs>
          </svg></div>
          <div className="circlefour">
            <svg xmlns="http://www.w3.org/2000/svg" width="3vw" height="5.2vh" viewBox="0 0 66 66" fill="none">
              <g filter="url(#filter0_ii_26_7)">
                <circle cx="33" cy="33" r="33" transform="matrix(-1 0 0 1 66 0)" fill="#D9D9D9" fill-opacity="0.4" />
              </g>
              <circle cx="33" cy="33" r="30" transform="matrix(-1 0 0 1 66 0)" stroke="url(#paint0_linear_26_7)" stroke-opacity="0.36" stroke-width="6" />
              <defs>
                <filter id="filter0_ii_26_7" x="0" y="-18" width="91" height="109" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dx="25" dy="25" />
                  <feGaussianBlur stdDeviation="47.5" />
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.775 0 0 0 0 0 0 0 0 0 1 0 0 0 0.3 0" />
                  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_26_7" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dx="8" dy="-18" />
                  <feGaussianBlur stdDeviation="32.5" />
                  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0.097561 0 0 0 0 0 0 0 0 0 1 0 0 0 0.3 0" />
                  <feBlend mode="normal" in2="effect1_innerShadow_26_7" result="effect2_innerShadow_26_7" />
                </filter>
                <linearGradient id="paint0_linear_26_7" x1="10.102" y1="5.11837" x2="54.1469" y2="55.898" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#1900FF" />
                  <stop offset="1" stop-color="#DD00FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </>
  )

}

export default GetinTouch