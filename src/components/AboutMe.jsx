import React from "react";
import bee from "../assets/bee.png";
import image from "../assets/coding.webp";
import "../styles/aboutme.css"


function AboutMe() {
  return (
    <div className="section-about" id="aboutme">
      <div className="aboutme-container">
        <img src={image} className="graphic" alt="3D graphic" />
        <div className="description">
          <h2>About me</h2>
          <div className="text">
            I am a beginner front-end developer skilled in HTML, CSS
            and JavaScript Web Development, as well as the React framework. I am
            a graduate of SoftUni - Front End Development module. I am
            looking to gain valuable experience in an IT environment and expand
            my competence. I am ready for challenges and eager to learn and
            acquire new skills.
            <br />
            <br /> I graduated from the D.A.Tsvenov of Economics
            in Svishtov with a degree in Business Informatics with a
            specialization in Computer Science.
            <img src={bee} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe