import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


function Navigation(props) {
    

  return(
      <div className="header">
          <h1 style={{color: "#3A506B"}}>
              Robert Young
          </h1>
          <nav>
              <ul className="navbar">
                  <li className="badge badge-primary">
                      <a className="linkDecoration" href="#home" onClick={() => props.handlePageChange("About Me")}>About Me</a>
                  </li>
                  <li className="badge badge-primary">
                      <a className="linkDecoration" href="#projects" onClick={() => props.handlePageChange("Projects")}>Projects</a>
                  </li>
                  <li className="badge badge-primary">
                      <a className="linkDecoration" href="#contactme" onClick={() => props.handlePageChange("Contact Me")}>Contact</a>
                  </li>
                  <li className="badge badge-primary">
                      <a className="linkDecoration" href="#resume" onClick={() => props.handlePageChange("Resume")}>Resume</a>
                  </li>
              </ul>
          </nav>
      </div>
  );
}

export default Navigation;