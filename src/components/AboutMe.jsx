import React from 'react';
import image from '../assets/coding.webp';
import bee from '../assets/bee.png';

function AboutMe() {
    return (
        <div className='about' id='aboutme'>
            <div className='container'>
                <img src={image} className='graphic' alt='3D graphic' />
                <div className='description'>
                    <h2>About Me</h2>
                    <div className='text'>
                        I am a beginner front-end developer skilled in HTML, CSS
                        and JavaScript Web Development, as well as the React framework. I am
                        a graduate of SoftUni with Javascript. I am
                        looking to gain valuable experience in an IT environment and expand
                        my competence. I am ready for challenges and eager to learn and
                        acquire new skills.
                        <br />
                        <br />I graduated from the AGH University of Science and Technology
                        in Svishtov with a degree in Business Informatics with a
                        specialization in Computer Science.
                        <br />
                        <br />
                        Privately, in addition to developing web applications, I am
                        interested in beekeeping (I have my own apiary), kayaking and
                        off-roading.
                        <img src={bee} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe