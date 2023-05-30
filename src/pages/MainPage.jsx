import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HiIcon from '../assets/hi.png';
import LocationIcon from '../assets/place.png';
import LinkedInIcon from '../assets/linkedinIco.png';
import GitHubIcon from '../assets/githubIco.png';
import HtmlIcon from '../assets/html.png';
import CssIcon from '../assets/css.png';
import JsIcon from '../assets/js.png';
import ReactIcon from '../assets/react.png';
import ThreeIcon from '../assets/three.png';
import Avatar from '../assets/avatar.jpg';
import BeeIcon from '../assets/bee.png';
import BootstrapIcon from '../assets/bootstrap.png';


import { OrbitControls, Sphere, MeshDiscardMaterial } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';




function MainPage() {

    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');
    const [react, setReact] = useState('');
    const [boot, setBoot] = useState('');
    const [three, setThree] = useState('');

    const handleMouseEnter = (e) => {
        if (e.target.id == "HTML") {
            setHtml(true);
        } else if (e.target.id == "CSS") {
            setCss(true);
        } else if (e.target.id == "JavaScript") {
            setJs(true);
        } else if (e.target.id == "Bootstrap") {
            setBoot(true);
        } else if (e.target.id == "React") {
            setReact(true);
        } else if (e.target.id == "Three.js") {
            setThree(true);
        };
    }
    const handleMouseLeave = () => {
        setHtml();
        setCss();
        setJs();
        setBoot();
        setReact();
        setThree();
    };

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
                    <div className='description'>Tech Stack:</div>
                    <div className='tech-stack-box'>
                        <div className='tech-stack-single-box' id='HTML' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <img src={HtmlIcon} className='tech-icon1' alt='html icon' />
                            <span>{html ? "HTML" : ""}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage;