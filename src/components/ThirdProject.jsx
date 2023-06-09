import React, { useState } from 'react'
import '../styles/thirdproject.css'
import image from '../assets/calc.jpg'
import CssIcon from '../assets/css.png'
import ReactIcon from '../assets/react.png'
import GitHubIcon from '../assets/githubIco.png'

function ThirdProject() {

  const [css, setCss] = useState("");
  const [react, setReact] = useState("");


  const handleMouseEnter = (e) => {
    if (e.target.id === "CSS") {
      setCss(true);
    } else if (e.target.id === "React") {
      setReact(true);
    }
  };
  const handleMouseLeave = () => {
    setCss();
    setReact();
  };

  return (
    <div className='project-box'>
      <div className='third-leftSide'>
        <img src={image} className='third-img' alt='' />
      </div>
      <div className='third-rightSide'>
        <h1>Calculator</h1>
        <div className='description'>
          "Calculator" is a small project, in which you can make any calculating operations. 
          The idea to create this project is coming from the Apple Iphone calculator. It was one of my very first project created.
        </div>
        <div className='tech-box'>
          <div className='single-box' id='React' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={ReactIcon} className='tech-icon1' alt='html icon' />
            <span>{react ? "React" : ""}</span>
          </div>
          <div className="single-box" id="CSS" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={CssIcon} className="tech-icon2" alt="html icon" />
            <span>{css ? "CSS" : ""}</span>
          </div>
        </div>
        <div className='links'>
          <a href="https://github.com/RosenGeorgievvv/react-calculator" target="blank"
          >
            <img src={GitHubIcon} className="liveIcon" alt="github icon" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ThirdProject