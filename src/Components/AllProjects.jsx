import './AllProjects.css'
import Header from './Header'
import { useSelector } from 'react-redux';
import { RxDoubleArrowUp } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";

function AllProjects() {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [])

    const scrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };


    const modeActive = useSelector((store) => store.mode)

    return (
        <>
            <Header />
            <div className={"AllProjects-" + modeActive.mode}>

                <div className={"allprojects-" + modeActive.mode}>
                    <span className='text-A'>A</span>
                    <span className="text-ll">ll</span>
                    &nbsp;&nbsp;
                    <span className="text-P">P</span>
                    <span className="text-roject">rojects</span>
                </div>
                <div className="headingp">
                    <div className="heading-dev">
                        <div className="text-development">
                            <span className="text-bracket1">&#706;/ </span>
                            <span className={"text-develop-" + modeActive.mode}>Development&nbsp;</span>
                            <span className="text-bracket2">&#707;</span>
                        </div>
                    </div>
                    <div className="heading-design">

                        <span className="text-D">D</span>
                        <span className={"text-esign-" + modeActive.mode}>esign    <svg className="circle-svg" xmlns="http://www.w3.org/2000/svg" width="2.93vw" height="5.2vh" viewBox="0 0 68 68" fill="none">
                            <path d="M0.58308 33.3005C0.905132 14.9091 16.0754 0.261036 34.4668 0.583087C52.8582 0.905139 67.5063 16.0754 67.1842 34.4668C66.8621 52.8582 51.6919 67.5063 33.3005 67.1842C14.9091 66.8622 0.261028 51.6919 0.58308 33.3005ZM58.7666 34.3194C59.0073 20.5769 48.0619 9.24131 34.3194 9.00066C20.5769 8.76002 9.2413 19.7054 9.00065 33.4479C8.76001 47.1904 19.7054 58.526 33.4479 58.7666C47.1904 59.0073 58.526 48.0619 58.7666 34.3194Z" fill="url(#paint0_linear_97_13)" />
                            <defs>
                                <linearGradient id="paint0_linear_97_13" x1="50.7677" y1="0.868533" x2="30.1938" y2="70.7815" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.143" stop-color="#00DDFF" />
                                    <stop offset="0.5" stop-color="#F700FF" />
                                    <stop offset="0.893" stop-color="#00FF09" />
                                </linearGradient>
                            </defs>
                        </svg></span>

                    </div>
                </div>
                <div className="projects">
                    <div className="dev-projects">


                        <div className={"cards-" + modeActive.mode}>
                            <div className="img-board"><div className="img-window-dev1"></div></div>
                            <div className="tag">
                                <div className="tags1">React</div>
                                <div className="tags2">NodeJs</div>
                                <div className="tags3">Express</div>
                                <div className="tags1">MongoDB</div>
                            </div>
                            <div className={"title-" + modeActive.mode}>Portfolio Website</div>
                            <a href='https://saimjawed.vercel.app' target='_blank' className={"text-" + modeActive.mode}>https://saimjawed.vercel.app</a>
                            <div className={"line2-" + modeActive.mode}></div>
                            <Link to='/blog-portfolio-saim-jawed'>
                                <div className={"text-read-" + modeActive.mode}>Read More...
                                    <span ><MdKeyboardArrowRight className="right-arr" /></span>
                                </div>
                            </Link>
                        </div>
                        <div className={"cards-" + modeActive.mode}>
                            <div className="img-board"><div className="img-window-dev4"></div></div>
                            <div className="tag">
                                <div className="tags1">React</div>
                                <div className="tags2">NodeJs</div>
                                <div className="tags3">Selenium</div>
                                <div className="tags1">Express</div>
                                <div className="tags2">MongoDB</div>
                            </div>
                            <div className={"title-" + modeActive.mode}>Social Crap</div>
                            <a href='https://www.linkedin.com/posts/saim-jawed-6a8766294_another-cool-project-added-to-my-collection-activity-7235971083848327169-9nFQ?utm_source=share&utm_medium=member_desktop' target='_blank' className={"text-" + modeActive.mode}>https://saimjawed.social-crap.linkedin</a>
                            <div className={"line2-" + modeActive.mode}></div>
                            <Link to='/blog-social-crap'>
                                <div className={"text-read-" + modeActive.mode}>Read More...
                                    <span ><MdKeyboardArrowRight className="right-arr" /></span>
                                </div>
                            </Link>
                        </div>
                        {/* <div className={"cards-" + modeActive.mode}>
                            <div className="img-board"><div className="img-window-dev2"></div></div>
                            <div className="tag">
                                <div className="tags1">React</div>
                                <div className="tags2">Tailwind</div>
                                <div className="tags3">Express</div>
                                <div className="tags1">NodeJs</div>
                            </div>
                            <div className={"title-" + modeActive.mode}>BMI Calculator Website</div>
                            <a href="https://gym-bmi-contact-app.netlify.app" target='_blank' className={"text-" + modeActive.mode}> https://gym-app.netlify.app</a>
                            <div className={"line2-" + modeActive.mode}></div>
                            <Link to='/blog-gym-website'>
                                <div className={"text-read-" + modeActive.mode}>Read More...
                                    <span ><MdKeyboardArrowRight className="right-arr" /></span>
                                </div>
                            </Link>

                        </div> */}
                        <div className={"cards-" + modeActive.mode}>
                            <div className="img-board"><div className="img-window-dev3"></div></div>
                            <div className="tag">
                                <div className="tags1">Support</div>
                            </div>
                            <div className={"title-" + modeActive.mode}>Club Website</div>
                            <a href="https://expressonitp.vercel.app" target='_blank' className={"text-" + modeActive.mode}> https://expressonitp.vercel.app</a>
                            <div className={"line2-" + modeActive.mode}></div>
                            <Link to='/blog-expresso-website'>                           <div className={"text-read-" + modeActive.mode}>Read More...
                                <span ><MdKeyboardArrowRight className="right-arr" /></span>
                            </div>
                            </Link>
                        </div>

                    </div>
                    <div className={"line-" + modeActive.mode}></div>
                    <div className="design-projects">
                        <div className={"cards-" + modeActive.mode}>
                            <div className="img-board"><div className="img-window-d1"></div></div>
                            <div className="tag">
                                <div className="tags1">Figma</div>
                                <div className="tags2">UI</div>
                                <div className="tags3">UX</div>
                            </div>
                            <div className={"title-" + modeActive.mode}>Portfolio Website Design</div>

                            <a href="https://www.figma.com/design/qkhGdw4T1DK43on5gBgy3i/Untitled?node-id=0-1&t=w0IjIBTY9aqzFWBl-1" target='_blank' className={"text-" + modeActive.mode}>View Figma file!</a>
                            <div className={"line2-" + modeActive.mode}></div>
                            <Link to='/blog-portfolio-design'>
                                <div className={"text-read-" + modeActive.mode}>Read More...
                                    <span ><MdKeyboardArrowRight className="right-arr" /></span>
                                </div>
                            </Link>
                        </div>
                        <div className={"cards-" + modeActive.mode}>
                            <div className="img-board"><div className="img-window-d2"></div></div>
                            <div className="tag">
                                <div className="tags1">Figma</div>
                                <div className="tags2">UI</div>
                                <div className="tags3">UX</div>
                            </div>
                            <div className={"title-" + modeActive.mode}>Social Crap Design</div>

                            <a href="https://www.figma.com/design/pQZT8A2v9pAjhGoESEg0Ff/Untitled?node-id=43-122&t=uS0LRVa2Bh0wJnfa-1" target='_blank' className={"text-" + modeActive.mode}>View Figma file!</a>
                            <div className={"line2-" + modeActive.mode}></div>
                            <Link to='/blog-social-crap-design'>
                                <div className={"text-read-" + modeActive.mode}>Read More...
                                    <span ><MdKeyboardArrowRight className="right-arr" /></span>
                                </div>
                            </Link>
                        </div>
                    </div>
                    
                </div>
                <div className="footerp">
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

                    <Link to='/allprojects' onClick={scrolltoTop} className="up-arrowp" ><RxDoubleArrowUp className={"up-arrow-logop-" + modeActive.mode} /></Link>
                </div>
            </div>


        </>
    )
}

export default AllProjects