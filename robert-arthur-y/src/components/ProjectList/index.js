import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const ProjectList = ({ category }) => {
  const [currentProject, setCurrentProject] = useState();

  const projects = useState([
    {
      name: "Stat-Cat",
      category: "Front-End",
      description:
        "Compare two NBA teams current team statistics side by side as well as displays the outcome of the last game by doing a GET request to a free, dynamically updated third party database",
      link: "https://robertarthury.github.io/shooting-star/"
    },

    {
      name: "Handy-Man",
      category: "full stack application",
      description:
        "An application for contractors, allows access to dynamic database of peer reviewed sub-contractors",
      link: "https://robertarthury.github.io/Handy-Man/",
    }
  ]);
  const currentProjects = projects.filter(projects => projects.category === category);

  return (
    <div>
      <div className="flex-row">
       <h2>{currentProjects.name}</h2>
       <h3>{currentProjects.category}</h3>
       <p>{currentProjects.description}</p>
      </div>
    </div>
  );
};

export default ProjectList;