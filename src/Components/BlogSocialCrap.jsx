import './BlogSocialCrap.css'
import { useSelector } from 'react-redux'
import Header from './Header'
import { Link } from 'react-router-dom'
import { RxDoubleArrowUp } from 'react-icons/rx'
import { BsArrowLeft } from 'react-icons/bs'

function BlogSocialCrap() {

    const modeActive = useSelector((store) => store.mode)

    const scrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <>
            <Header />
            <div className={"blogSocialCrap-" + modeActive.mode}>
                <div className={"blog-title-" + modeActive.mode}>
                    <span className='text-A'>S</span>
                    <span className="text-ll">ocial</span>
                    &nbsp;&nbsp;
                    <span className="text-P">C</span>
                    <span className="text-roject">rap</span>
                    <span ><Link to='/allprojects'><BsArrowLeft className={'back-arrow-' + modeActive.mode} /></Link></span>


                </div>
                <div className="blog-tag">
                    <div className="blog-tags1">React</div>
                    <div className="blog-tags2">NodeJs</div>
                    <div className="blog-tags3">Express</div>
                    <div className="blog-tags1">MongoDB</div>
                    <div className="blog-tags2">Selenium</div>
                </div>
                <div className={"blog-Intro-" + modeActive.mode}>
                    Hi  there! Here I am writing a blog about an innovative web app I made using selenium.
                    Social Crap, a web automation scraper that extracts Instagram data while evading bot detection from Instagram!
                    This is my first backend project and it uses MERN stack framework. While I won't deploy this project publicly due to
                    Instagram's terms and privacy concerns , the backend repository is available for personal use : https://lnkd.in/gxFWjEr6 .
                </div>
                <div className={"text-KeyFeatures-" + modeActive.mode}>Key Features :</div>
                <div className={"blog-lists-" + modeActive.mode}>
                    <ul>
                        <li>A generative modern web designed entirely using vanilla CSS.</li>
                        <li>An automated Instagram scraper web app using Selenium integrated with Node.js that identifies the accounts of people
                            who don’t follow you back and also provides a Content Engagement Score.</li>
                        <li>Includes OTP (One-Time Password) based authentication and subscription-based authorization.</li>
                        <li>Dynamic multi-page website utilizing MongoDB, Cloudinary, Nodemailer APIs, and facilitating multiple client-server data exchanges.</li>
                    </ul>
                </div>
                <div className={"blogHero-" + modeActive.mode}>
                    <div className={"blogHero-Heading-" + modeActive.mode}>About</div>
                    <br />
                    Social Crap provides valuable insights for social media enthusiasts:
                    <br /> <br />
                    - Content Engagement (CE) score <br />
                    - Average likes, total likes, and relative ranking <br />
                    - Premium features: identifies non-reciprocal (those who don't follow you back) followers with upto 90% accuracy <br />
                    <br />
                </div>
                <div className={"blogHero-" + modeActive.mode}>
                    <div className={"blogHero-Heading-" + modeActive.mode}>My Remarks</div>
                    <br />
                    Personally, I believe I made a very good design with this one. 
                    It looks professional and at the same time has a cool vibe to it without affecting the functionality of handling the data-exchanges. <br />
                    <br />
                    And thus, I conclude this blog. If you have anything to ask whether about this web-app or anything else please feel free to connect to me. 😊
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
                    </svg> : <svg className='svg-dark-modep' xmlns="http://www.w3.org/2000/svg" width="1832" height="132" viewBox="0 0 1832 132" fill="none">
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


                    <div className="text-copyrightp">&#169; 2024 Saim Jawed</div>
                    <div className="text-handcraftedp">Handcrafted by Me!</div>

                    <div onClick={scrolltoTop} className="up-arrow-blog" ><RxDoubleArrowUp className={"up-arrow-logop-" + modeActive.mode} /></div>
                </div>
            </div>

        </>
    )
}

export default BlogSocialCrap