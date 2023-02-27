import React from "react";
import "./about.css";
import aboutImg from "../../assets/about-img.jpg";

const About = () => {
  return (
    <section id="about" className="about__section">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={aboutImg} alt="" />
          </div>
        </div>

        <div className="about__content">
          <p>
            I am a computer science graduate with a passion for software
            development. I gained valuable experience during my Python
            internship and employment at a software development company, where I
            designed a website for an equestrian mobile application. I held
            weekly meetings to showcase my projects and progress with senior
            development teams, and I am constantly learning and working on new
            projects.
          </p>
          <p></p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
