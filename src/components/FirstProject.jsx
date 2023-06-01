import React from 'react'
import image from '../assets/expenses-tracker.jpg'
import CssIcon from '../assets/css.png'
import ReactIcon from '../assets/react.png'
import GitHubIcon from '../assets/githubIco.png'

function FirstProject() {
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

export default FirstProject