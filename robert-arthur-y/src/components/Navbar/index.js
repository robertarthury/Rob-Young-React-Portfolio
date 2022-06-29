import React, { useEffect } from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';

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
    <header className="flex-row px-1">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      
          <a href="/" className="ml-3 text-xl">
            <h1>Hi, i'm rob</h1>
          </a>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => setContactSelected(false)}>
              <h2>aboutMe</h2>
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setContactSelected(false)}>
              <h2>projects</h2>
            </a>
          </li>
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => setContactSelected(true)}><h3>contactMe</h3></span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
                }`}
              key={category.name}
            >
              <span
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