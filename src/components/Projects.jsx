import React from 'react'
import "../styles/projects.css"
import FirstProject from './FirstProject'
import SecondProject from './SecondProject'
import ThirdProject from './ThirdProject'

function Projects() {
    return (
        <div className='section-projects' id='projects'>
            <div className='projects-container'>
                <div className='projects-title'>
                    <h2>Projects</h2>
                    <span>Below you can see my projects, check out the code on GitHub</span>
                </div>
                <FirstProject />
                <SecondProject />
                <ThirdProject />
            </div>

        </div>
    )
}

export default Projects