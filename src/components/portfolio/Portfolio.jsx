import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import webmapping from "../../assets/webmapping.png";
import todo from "../../assets/todo.png";
import weatherplot from "../../assets/weatherplot.png";
import youtube from "../../assets/youtube-clone.png";

const data = [
  {
    id: 1,
    image: webmapping,
    title: "Web Mapping",
    description:
      "This Python-based web map displays country populations and US volcanoes with labels and icons using JSON data. Users can zoom, toggle layers, and click on countries/volcanoes for info, making for an engaging and informative visualization of geographic data.",
    github: "https://github.com/idygre/web-mapping",
    demo: "https://volcanoinfo.netlify.app/",
  },

  {
    id: 2,
    image: todo,
    title: "Todo List",
    description:
      "This Python-based to-do list web app, built with the Streamlit framework, allows users to add and mark tasks as complete. It features a minimalist interface and a simple, intuitive user experience.",
    github: "https://github.com/idygre/todo-list-web",
    demo: "https://idygre-todo-list-web-web-32n2hh.streamlit.app/",
  },

  {
    id: 3,
    image: weatherplot,
    title: "Weather Forecast",
    description:
      "This Python-based weather app displays current weather conditions and a temperature graph for a desired city using a weather API, allowing users to customize the number of days to view the forecast and stay informed about the weather.",
    github: "https://github.com/idygre/weather-app",
    demo: "https://idygre-weather-app-main-lijmbs.streamlit.app/",
  },

  {
    id: 4,
    image: youtube,
    title: "YouTube Clone",
    description:
      "This website displays an HTML/CSS-based frontend design clone of YouTube, with clickable thumbnails, profile pictures, and video titles that link to actual videos on the platform. It provides a realistic preview of the YouTube user experience.",
    github: "https://github.com/idygre/youtube-clone",
    demo: "https://greydi-youtube-clone.netlify.app/",
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
