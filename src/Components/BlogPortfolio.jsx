import './BlogPortfolio.css'
import { useSelector } from 'react-redux'
import Header from './Header'
import { Link } from 'react-router-dom'
import { RxDoubleArrowUp } from 'react-icons/rx'
import { BsArrowLeft } from 'react-icons/bs'

function BlogPortfolio(){

    const modeActive=useSelector((store)=>store.mode)

    const scrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <Header/>
        <div className={"blogPortfolio-"+modeActive.mode}>
            <div className={"blog-title-"+modeActive.mode}>
                    <span className='text-A'>M</span>
                    <span className="text-ll">y</span>
                    &nbsp;&nbsp;
                    <span className="text-P">P</span>
                    <span className="text-roject">ortfolio</span>
                    <span ><Link to='/allprojects'><BsArrowLeft className={'back-arrow-'+modeActive.mode}/></Link></span>

                
            </div>
            <div className="blog-tag">
                                <div className="blog-tags1">React</div>
                                <div className="blog-tags2">NodeJs</div>
                                <div className="blog-tags3">Express</div>
                                <div className="blog-tags1">MongoDB</div>
                                <div className="blog-tags2">Redux</div>
            </div>
            <div className={"blog-Intro-"+modeActive.mode}>
                Hi  there! Here I am writing a blog about my Portfolio Website which I made with all my efforts and skill level as of July 2024.
                This is my first major project and it uses MERN stack framework. I am really proud of this Organic, hand crafted, non-AI website (pun intended 😵) which only used pure css and my hardwork. 
                I will not be adding images to this blog as you are already on this website. Go and check the features for yourself 😑.
            </div>
            <div className={"text-KeyFeatures-"+modeActive.mode}>Key Features :</div>
            <div className={"blog-lists-"+modeActive.mode}>
            <ul>
                <li>A modern and simple, yet complex, Web Design with focus on smooth User Experience.</li>
                <li>Beautiful and interactive self made, hand crafted animations. I have not used a single image or video apart from those for project references. Everything is either css or svg.</li>
                <li>Comes with both Light and Dark mode achieved through the use of advanced concepts of Redux store accompanied with React hooks.</li>
                <li>Multiple options to connect and also a well structured schema to store the data received through contact form in a MongoDB database.</li>
                <li>Seperate Deployment of Backend and Frontend for increased performance and use of CORS for authenticated connection to Backend.</li>
            </ul>
            </div>
            <div className={"blogHero-"+modeActive.mode}>
                <div className={"blogHero-Heading-"+modeActive.mode}>Home</div>
                <br />
                The Home page or the Hero Page. This is the page which took the most time since I had to add a lot of animations and small interactions in this page.
                 Starting with the Header. <br />
                 It has three components the branding of the name on the left, navbar in the middle, and links to my social and tech accounts.
                 Now, for the first time, go and try to click the letters of the name multiple times like a bulb.  
                <br /><br />
                 Now moving to the Sidebar. It is simply linked to the Contact page. The only interaction you can have hear is through hovering.Try it.
                 <br />
                 Next is the ellipse surrounding my profile picture. That was TOUGH 😵‍💫. It took me a lot of calculations and studying an entirely new concept of cubic beizer to achieve that slow and fast back and forth movement of the gradient.
                 It's my favourite part of the entire website. Also, the smaller circles change their size when you hover on them 😉. <br />
                 <br />
                 The small circles in the bottom symbolizes the Light and Dark modes. To achieve this functionality, I used the concept of Redux store.
                 When the user clicks on either of the buttons, a toggle function is triggered using the useState hook. This hook changes the mode from light to dark and vice versa. This information is then provided to the store by dipatching the appropriate action.
                 The store then provides this information to all the Components using useSelector hook. Finally, all the Components use another hook to switch the classnames of all the required elements between light and dark. That's all 😮‍💨. <br /><br />
            </div>
            <div className={"blogHero-"+modeActive.mode}>
                <div className={"blogHero-Heading-"+modeActive.mode}>About</div>
                <br />
                Nothing new, the same old conventional About Me page with a little attempt of a more visually appealing design. <br /><br />
            </div>
            <div className={"blogHero-"+modeActive.mode}>
                <div className={"blogHero-Heading-"+modeActive.mode}>Skills</div>
                <br />
                Here I have listed all my Skills in a quantified manner. <br /><br />
            </div>
            <div className={"blogHero-"+modeActive.mode}>
                <div className={"blogHero-Heading-"+modeActive.mode}>Projects</div>
                <br />
                This is a culmination of all my hardwork in the form of the projects I made. The show all button routes you to the page where all my completed projects have been listed. <br /><br />
            </div>
            <div className={"blogHero-"+modeActive.mode}>
                <div className={"blogHero-Heading-"+modeActive.mode}>All Projects</div>
                <br />
                Personally, I think this is my best looking page. <br />
                Each card routes to the personal blog of that project and that is how you ended up here. <br /><br />
            </div>
            <div className={"blogHero-"+modeActive.mode}>
                <div className={"blogHero-Heading-"+modeActive.mode}>Contact</div>
                <br />
                Now coming to the Backend. This is the page which actually uses the functionalities of the backend.
                The Contact form has two options, one to mail from your email and the others sends me a message directly which is then stored in my database and is also mailed to me simultaneously using nodemailer. <br />
                <br />
                And thus, I conclude this blog. If you have anything to ask whether about website or anything else please feel free to connect to me. 😊
            </div>
            <div className="footer-blog">
                    {modeActive.mode == 'dark-mode' ? <svg className='svg-light-modep' xmlns="http://www.w3.org/2000/svg" width="90vw" height="13vh" viewBox="0 0 1832 132" fill="none">
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
                    </svg> : <svg className='svg-dark-modep'  xmlns="http://www.w3.org/2000/svg" width="1832" height="132" viewBox="0 0 1832 132" fill="none">
  <g filter="url(#filter0_dd_222_203)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M881.214 65.1688C868.401 52.0724 852.456 40.7048 834.135 40.7048H168.5C92.0085 40.7048 30 102.713 30 179.205C30 255.696 92.0085 317.705 168.5 317.705H1663.5C1739.99 317.705 1802 255.696 1802 179.205C1802 102.713 1739.99 40.7048 1663.5 40.7048L1054.87 40.7048C1036.54 40.7048 1020.6 52.0724 1007.79 65.1688C999.475 73.6636 989.609 80.4021 978.75 84.9995C967.892 89.5969 956.253 91.9631 944.5 91.9631C932.747 91.9631 921.108 89.5969 910.25 84.9995C899.391 80.4021 889.525 73.6636 881.214 65.1688Z" fill="black"/>
  </g>
  <defs>
    <filter id="filter0_dd_222_203" x="0" y="0.704834" width="1832" height="357" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="10"/>
      <feGaussianBlur stdDeviation="15"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_222_203"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="-10"/>
      <feGaussianBlur stdDeviation="15"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.966667 0 0 0 0 0 0 0 0 0 1 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_222_203" result="effect2_dropShadow_222_203"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_222_203" result="shape"/>
    </filter>
  </defs>
</svg>}
                   

                    <div className="text-copyrightp">&#169; 2024 Saim Jawed</div>
                    <div className="text-handcraftedp">Handcrafted by Me!</div>

                    <div onClick={scrolltoTop} className="up-arrow-blog" ><RxDoubleArrowUp className={"up-arrow-logop-" + modeActive.mode} /></div>
                </div>
        </div>

        </>
    )
}

export default BlogPortfolio