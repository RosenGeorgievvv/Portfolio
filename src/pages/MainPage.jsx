import React from 'react';
import Navbar from '../components/Navbar';
import HiIcon from '../assets/hi.png';
import LocationIcon from '../assets/place.png';
import LinkedInIcon from '../assets/linkedinIco.png';
import GitHubIcon from '../assets/githubIco.png';

function MainPage() {
    return (
        <div className='main' id='home'>
            <Navbar />
            <div className='main-container'>
                <div className='leftSide'>
                    <span className='title'>Front-End React Developer</span>
                    <img src={HiIcon} className='hello-icon' alt='hello icon' />
                    <div className='description'>
                        Hi, I'm Rosen Georgiev. A passionate Front-end React Developer based in Sofia, Bulgaria.
                        <a href='/contact'>
                            <img src={LocationIcon} className='localization-icon' alt='localization icon' />
                        </a>
                    </div>
                    <a href='https://www.linkedin.com/in/rosen-georgiev-253611180/'>
                        <img src={LinkedInIcon} className='social-icon' alt='linkedin icon' />
                    </a>
                    <a href='https://github.com/RosenGeorgievvv'>
                        <img src={GitHubIcon} className='social-icon' alt='github icon' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MainPage