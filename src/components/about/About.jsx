import React from "react";
import "./about.css";
import aboutImg from "../../assets/about-img.jpg";

const About = () => {
  return (
    <section id="about">
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            excepturi nulla mollitia officia assumenda accusamus sunt quae
            molestiae cum omnis sint dolor, voluptas quos rerum repellat nihil
            ad quas iure!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
