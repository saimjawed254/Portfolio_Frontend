import './Skills.css'
import { FaGithub } from 'react-icons/fa';
import { TbBrandLeetcode } from "react-icons/tb";
import { useSelector } from 'react-redux';

function Skills() {

  const modeActive=useSelector((store)=>store.mode)

    return (
    <>
        <div className={"Skills-"+modeActive.mode} id='Skills'>
            <div className={"text-my-skills-"+modeActive.mode}>
                <div className="text-M">M</div>
                <div className="text-y">y</div>
                <div className="text-S">S</div>
                <div className="text-kills">kills</div>
            </div>
            <div className="development">
                <div className="text-development">
                    <span className="text-bracket1">&#706;/ </span>
                    <span className={"text-develop-"+modeActive.mode}>Development&nbsp;</span>
                    <span className="text-bracket2">&#707;</span>
                </div>
                <div className={"text-mongodb-"+modeActive.mode}>MONGODB</div>
                <div className={"text-mongodbp-"+modeActive.mode}>85%</div>
                <div className="status-fill1"></div>
                <div className="status-bar1"></div>
                <div className={"text-javascript-"+modeActive.mode}>JAVASCRIPT</div>
                <div className={"text-javascriptp-"+modeActive.mode}>80%</div>
                <div className="status-fill2"></div>
                <div className="status-bar2"></div>
                <div className={"text-react-"+modeActive.mode}>REACT</div>
                <div className={"text-reactp-"+modeActive.mode}>90%</div>
                <div className="status-fill3"></div>
                <div className="status-bar3"></div>
                <div className={"text-css-"+modeActive.mode}>CSS</div>
                <div className={"text-cssp-"+modeActive.mode}>85%</div>
                <div className="status-bar4"></div>
                <div className="status-fill4"></div>
                <div className={"text-nodejs-"+modeActive.mode}>NODEJS</div>
                <div className={"text-nodejsp-"+modeActive.mode}>80%</div>
                <div className="status-fill5"></div>
                <div className="status-bar5"></div>
                <div className={"text-html-"+modeActive.mode}>HTML</div>
                <div className={"text-htmlp-"+modeActive.mode}>95%</div>
                <div className="status-fill6"></div>
                <div className="status-bar6"></div>
            </div>
            <div className="design">
                <div className="text-design">
                    <span className="text-D">D</span>
                    <span className={"text-esign-"+modeActive.mode}>esign    <svg className="circle-svg" xmlns="http://www.w3.org/2000/svg" width="2.93vw" height="5.2vh" viewBox="0 0 68 68" fill="none">
  <path d="M0.58308 33.3005C0.905132 14.9091 16.0754 0.261036 34.4668 0.583087C52.8582 0.905139 67.5063 16.0754 67.1842 34.4668C66.8621 52.8582 51.6919 67.5063 33.3005 67.1842C14.9091 66.8622 0.261028 51.6919 0.58308 33.3005ZM58.7666 34.3194C59.0073 20.5769 48.0619 9.24131 34.3194 9.00066C20.5769 8.76002 9.2413 19.7054 9.00065 33.4479C8.76001 47.1904 19.7054 58.526 33.4479 58.7666C47.1904 59.0073 58.526 48.0619 58.7666 34.3194Z" fill="url(#paint0_linear_97_13)"/>
  <defs>
    <linearGradient id="paint0_linear_97_13" x1="50.7677" y1="0.868533" x2="30.1938" y2="70.7815" gradientUnits="userSpaceOnUse">
      <stop offset="0.143" stop-color="#00DDFF"/>
      <stop offset="0.5" stop-color="#F700FF"/>
      <stop offset="0.893" stop-color="#00FF09"/>
    </linearGradient>
  </defs>
</svg></span>
                
                </div>
               
                <div className={"text-photoshop-"+modeActive.mode}>PHOTOSHOP</div>
                <div className={"text-photoshopp-"+modeActive.mode}>75%</div>
                <div className="status-bar7"></div>
                <div className="status-fill7"></div>
                <div className={"text-figma-"+modeActive.mode}>FIGMA</div>
                <div className={"text-figmap-"+modeActive.mode}>80%</div>
                <div className="status-bar8"></div>
                <div className="status-fill8"></div>
                <div className={"text-illustrator-"+modeActive.mode}>ILLUSTRATOR</div>
                <div className={"text-illustratorp-"+modeActive.mode}>70%</div>
                <div className="status-fill9"></div>
                <div className="status-bar9"></div>
            </div>

            <div className="dsa">
                <div className="text-dsa">
                    <span className="text-DSA">D</span>
                    <span className={"text-SA-"+modeActive.mode}>SA    <svg className="circle-svg" xmlns="http://www.w3.org/2000/svg" width="2.93vw" height="5.2vh" viewBox="0 0 68 68" fill="none">
  <path d="M0.58308 33.3005C0.905132 14.9091 16.0754 0.261036 34.4668 0.583087C52.8582 0.905139 67.5063 16.0754 67.1842 34.4668C66.8621 52.8582 51.6919 67.5063 33.3005 67.1842C14.9091 66.8622 0.261028 51.6919 0.58308 33.3005ZM58.7666 34.3194C59.0073 20.5769 48.0619 9.24131 34.3194 9.00066C20.5769 8.76002 9.2413 19.7054 9.00065 33.4479C8.76001 47.1904 19.7054 58.526 33.4479 58.7666C47.1904 59.0073 58.526 48.0619 58.7666 34.3194Z" fill="url(#paint0_linear_97_13)"/>
  <defs>
    <linearGradient id="paint0_linear_97_13" x1="50.7677" y1="0.868533" x2="30.1938" y2="70.7815" gradientUnits="userSpaceOnUse">
      <stop offset="0.143" stop-color="#00DDFF"/>
      <stop offset="0.5" stop-color="#F700FF"/>
      <stop offset="0.893" stop-color="#00FF09"/>
    </linearGradient>
  </defs>
</svg></span>
                
                </div>
                <div className={"text-java-"+modeActive.mode}>JAVA</div>
                <div className={"text-javap-"+modeActive.mode}>80%</div>
                <div className="status-fill10"></div>
                <div className="status-bar10"></div>
            </div>
                    
<a href="https://leetcode.com/u/SaimJawed" target='_blank'><TbBrandLeetcode className={'leetcode-'+modeActive.mode} /></a>
<a href="https://github.com/saimjawed254" target='_blank'><FaGithub className={'github-'+modeActive.mode} /></a>

        </div>
    </>
    )
}


export default Skills;