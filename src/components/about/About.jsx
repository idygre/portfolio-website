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
            I'm a future Software Developer working on personal projects and
            improving my skills everyday. I enjoy learning and staying on top of
            the latest technologies. I consider myself to be a very organized
            individual with a great attention to detail. Previously, I had
            worked as a team to successfully implement an autonomous
            follower-leader robot for my senior design project. As an employee
            and then intern at a software development company, I was able to
            design a website for an equestrian mobile application. I held weekly
            meetings to showcase my projects and discuss my progress with the
            senior development team.
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
