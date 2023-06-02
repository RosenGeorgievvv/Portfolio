import React, { useState } from 'react'
import image from '../assets/movieland.png'
import '../styles/secondproject.css'
import CssIcon from '../assets/css.png'
import ReactIcon from '../assets/react.png'
import GitHubIcon from '../assets/githubIco.png'

function SecondProject() {

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
    <div className='second-project-box'>
      <div className='second-rightSide'>
        <h1>Movie Land</h1>
        <div className='description'>
          "Movie Land" is a website for movies. You can find any movie you like.
          By typing in the search panel it will display you all movies related to the given name.
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
          <a href="https://github.com/RosenGeorgievvv/movie-land" target="blank"
          >
            <img src={GitHubIcon} className="liveIcon" alt="github icon" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
      <div className='second-leftSide'>
        <img src={image} className='img' />
      </div>
    </div>
  )
}

export default SecondProject