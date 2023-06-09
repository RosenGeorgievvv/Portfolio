import React, { useState } from 'react';
import '../styles/main.css';
import Navbar from '../components/Navbar';
import HiIcon from '../assets/hi.png';
import LocationIcon from '../assets/place.png';
import LinkedInIcon from '../assets/linkedinIco.png';
import GitHubIcon from '../assets/githubIco.png';
import HtmlIcon from '../assets/html.png';
import CssIcon from '../assets/css.png';
import JsIcon from '../assets/js.png';
import ReactIcon from '../assets/react.png';
import Avatar from '../assets/avatar.jpg';
import BootstrapIcon from '../assets/bootstrap.png';
import { OrbitControls, Sphere, MeshDiscardMaterial } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';


function MainPage() {

    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');
    const [react, setReact] = useState('');
    const [boot, setBoot] = useState('');


    const handleMouseEnter = (e) => {
        if (e.target.id === "HTML") {
            setHtml(true);
        } else if (e.target.id === "CSS") {
            setCss(true);
        } else if (e.target.id === "JavaScript") {
            setJs(true);
        } else if (e.target.id === "Bootstrap") {
            setBoot(true);
        } else if (e.target.id === "React") {
            setReact(true);
        } 
    }
    const handleMouseLeave = () => {
        setHtml();
        setCss();
        setJs();
        setBoot();
        setReact();
    };

    return (
        <div className='main' id='home'>
            <Navbar />
            <div className='main-container'>
                <div className='leftSide-container'>
                    <span className='title'>Front-End React Developer</span>
                    <img src={HiIcon} className='hello-icon' alt='hello icon' />
                    <div className='main-description'>
                        Hi, I'm Rosen Georgiev. A passionate Front-end React Developer based in Sofia, Bulgaria.
                        <a href='https://goo.gl/maps/2XwKwV5KWzjSNi589'>
                            <img src={LocationIcon} className='localization-icon' alt='localization icon' />
                        </a>
                    </div>
                    <a href='https://www.linkedin.com/in/rosen-georgiev-253611180/'>
                        <img src={LinkedInIcon} className='social-icon' alt='linkedin icon' />
                    </a>
                    <a href='https://github.com/RosenGeorgievvv'>
                        <img src={GitHubIcon} className='social-icon' alt='github icon' />
                    </a>
                    <div className='main-description'>Tech Stack:</div>
                    <div className="tech-stack-box">
                        <div
                            className="tech-stack-single-box"
                            id="HTML"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={HtmlIcon} className="tech-icon1" alt="html icon" />
                            <span>{html ? "HTML" : ""}</span>
                        </div>
                        <div
                            className="tech-stack-single-box"
                            id="CSS"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={CssIcon} className="tech-icon1" alt="css icon" />
                            <span>{css ? "CSS/SCSS" : ""}</span>
                        </div>
                        <div
                            className="tech-stack-single-box"
                            id="JavaScript"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={JsIcon} className="tech-icon1" alt="js icon" />
                            <span>{js ? "JavaScript" : ""}</span>
                        </div>
                        <div
                            className="tech-stack-single-box"
                            id="Bootstrap"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={BootstrapIcon} className="tech-icon2" alt="bootstrap icon" />
                            <span>{boot ? "Bootstrap" : ""}</span>
                        </div>
                        <div
                            className="tech-stack-single-box"
                            id="React"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={ReactIcon} className="tech-icon2" alt="react icon" />
                            <span>{react ? "React.js" : ""}</span>
                        </div>
                    </div>
                </div>
                <div className='rightSide-container'>
                    <Canvas>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={1} />
                        <directionalLight position={(3, 2, 1)} />
                        <Sphere args={[1, 100, 200]} scale={2.2}>
                            <MeshDiscardMaterial color="blue" attach="material" distort={0.5} speed={2} />
                        </Sphere>
                    </Canvas>
                    <img src={Avatar} className='avatar' alt='avatar' />
                </div>
            </div>
        </div>
    )
}

export default MainPage;