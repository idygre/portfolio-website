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
            I'm Greydi Lora, a Software Developer working on personal projects
            improving my skills each day. I'm pursing a degree in Bachelor of
            Science in Computer Science and will soon be graduated by the end of
            2022. I enjoy learning and stay on top of the latest technologies. I
            consider myself to be a very organized person with great
            communication skills. I am a problem solver with high attention to
            detail.
          </p>
          <p>
            Extra text I consider myself to be a very organized person with great
            communication skills. I am a problem solver with high attention to
            detail.
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
