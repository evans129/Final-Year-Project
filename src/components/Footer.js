import "./FooterStyle.css"
import  {FaHome,FaLinkedin,FaGithub} from "react-icons/fa";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
        <div className="left">
        <div className="location">
            <FaHome size={20} style={{color:"white",marginRight: "2rem"}}></FaHome>
            <div>
                <p>RANCHI</p>
                <p>INDIA</p>
            </div>
        </div>
        </div>
        <div className="right">
            <h4>
                About Me
            </h4>
            <p>This is me Devansh aspiring Software Developer and Machine learning enthusiast.</p>
            <div className="social">
           <a href="https://linkedin.com/in/devansh-kumar-a51322213"><FaLinkedin size={30} style={{color:"white",marginRight: "2rem"}}></FaLinkedin></a>
           <a href="https://github.com/evans129" ><FaGithub size={30} style={{color:"white",marginRight: "2rem"}}></FaGithub></a>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer