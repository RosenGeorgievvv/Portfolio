import React, { useState } from 'react'
import image from '../assets/expenses.JPG';
import CssIcon from '../assets/css.png'
import ReactIcon from '../assets/react.png'
import GitHubIcon from '../assets/githubIco.png'

function FirstProject() {

    const [css, setCss] = useState("");
    const [react, setReact] = useState("");


    const handleMouseEnter = (e) => {
        if (e.target.id === "CSS") {
            setCss(true);
        } else if (e.target.id === "React") {
            setReact(true);
        };
    }
        const handleMouseLeave = () => {
            setCss();
            setReact();
        };
    
    return (
        <div className='project-box'>
            <div className='leftSide'>
                <img src={image} className='img' />
            </div>
            <div className='rightSide'>
                <h1>Expenses Tracker</h1>
                <div className='description'>
                    "Expenses Tracker" is a website where the user can trace his expenses based on income and outcome.
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
                    <a href="https://github.com/RosenGeorgievvv/expense-tracker" target="blank"
                    >
                        <img src={GitHubIcon} className="liveIcon" alt="github icon" />
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default FirstProject;