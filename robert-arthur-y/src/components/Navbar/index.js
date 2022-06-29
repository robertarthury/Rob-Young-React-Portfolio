import React, { useEffect } from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar(props) {
  const {
    categories = [],
    setCurrentCategory,
    contactSelected,
    currentCategory,
    setContactSelected,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory])
  return (
    <header className="flex-row px-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      
          <a href="/" className="ml-3 text-xl">
            <h1>Hi, i'm rob</h1>
          </a>
      <nav>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link active" href="#about" onClick={() => setContactSelected(false)}>
              <h2>aboutMe</h2>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#projects" onClick={() => setContactSelected(false)}>
              <h2>projects</h2>
            </a>
          </li>
          <li className={`nav-item ${contactSelected && 'navActive'}`}>
            <span className="nav-link active" onClick={() => setContactSelected(true)}><h3>contactMe</h3></span>
          </li>
          {categories.map((category) => (
            <li
              className={`nav-item ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
                className="nav-link active"
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    
      </div>
    </header>
  );
}

export default Navbar;