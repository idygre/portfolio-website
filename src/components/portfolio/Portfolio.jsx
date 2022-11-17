import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import webmapping from "../../assets/webmapping.png";

const data = [
  {
    id: 1,
    image: webmapping,
    title: "Web Mapping",
    github: "https://github.com/idygre/web-mapping",
    demo: "https://volcanoinfo.netlify.app/",
  },

  {
    id: 2,
    image: IMG1,
    title: "Portfolio title",
    github: "https://github.com/idygre/portfolio-website/tree/master",
    demo: "https://github.com/idygre/portfolio-website/tree/maste",
  },

  {
    id: 3,
    image: IMG1,
    title: "Portfolio title",
    github: "https://github.com/idygre/portfolio-website/tree/master",
    demo: "https://github.com/idygre/portfolio-website/tree/maste",
  },

  {
    id: 4,
    image: IMG1,
    title: "Portfolio title",
    github: "https://github.com/idygre/portfolio-website/tree/master",
    demo: "https://github.com/idygre/portfolio-website/tree/maste",
  },

  {
    id: 5,
    image: IMG1,
    title: "Portfolio title",
    github: "https://github.com/idygre/portfolio-website/tree/master",
    demo: "https://github.com/idygre/portfolio-website/tree/maste",
  },

  {
    id: 6,
    image: IMG1,
    title: "Portfolio title",
    github: "https://github.com/idygre/portfolio-website/tree/master",
    demo: "https://github.com/idygre/portfolio-website/tree/maste",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3> {title} </h3>
              <div className="portfolio__item-cta">
                <a href={github} target="_blank" className="btn">
                  Github
                </a>
                <a href={demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
