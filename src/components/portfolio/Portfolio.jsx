import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import webmapping from "../../assets/webmapping.png";
import todo from "../../assets/todo.png";
import weatherplot from "../../assets/weatherplot.png";

const data = [
  {
    id: 1,
    image: webmapping,
    title: "Web Mapping",
    description:
      "Interactive web map application using Python libraries that displays the population of countries by color, elevation levels, and description of volcanoes in the US using JSON data.",
    github: "https://github.com/idygre/web-mapping",
    demo: "https://volcanoinfo.netlify.app/",
  },

  {
    id: 2,
    image: todo,
    title: "Todo List",
    description:
      "A minimalist to do list web application that can add new tasks and mark them as complete. Application was built using Python and the Streamlit framework.",
    github: "https://github.com/idygre/todo-list-web",
    demo: "https://idygre-todo-list-web-web-32n2hh.streamlit.app/",
  },

  {
    id: 3,
    image: weatherplot,
    title: "Weather Forecast",
    description:
      "Python weather web application that displays the temperature for the desired city with the selected number of days into a graph as well as the sky condition. Used a weather API to get weather information.",
    github: "https://github.com/idygre/weather-app",
    demo: "https://idygre-weather-app-main-lijmbs.streamlit.app/",
  },

  {
    id: 4,
    image: IMG1,
    title: "Portfolio title",
    description: "description",
    github: "https://github.com/idygre/portfolio-website/tree/master",
    demo: "https://github.com/idygre/portfolio-website/tree/maste",
  },

  {
    id: 5,
    image: IMG1,
    title: "Portfolio title",
    description: "description",
    github: "https://github.com/idygre/portfolio-website/tree/master",
    demo: "https://github.com/idygre/portfolio-website/tree/maste",
  },

  {
    id: 6,
    image: IMG1,
    title: "Portfolio title",
    description: "description",
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
        {data.map(({ id, image, title, description, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img className="portfolio__image" src={image} alt={title} />
              </div>

              <h3> {title} </h3>

              <div className="description-div">
                <h5 className="description"> {description} </h5>
              </div>

              <div className="portfolio__item-cta">
                <a
                  href={github}
                  rel="noreferrer"
                  target="_blank"
                  className="btn"
                >
                  Github
                </a>
                <a
                  href={demo}
                  rel="noreferrer"
                  target="_blank"
                  className="btn btn-primary"
                >
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
