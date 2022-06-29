import React, { useState } from 'react'
import About from './components/About/index'
import Projects from './components/Projects/index'
import ContactForm from './components/Contact/index'
import Navbar from './components/Navbar/index'

function App() {
  const [categories] = useState([
    {name:'about'},
    {name:'contact'},
    {name:'projects'},
  ])
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);


  return (
    <div>
      <Navbar
               setCurrentCategory={setCurrentCategory}
               currentCategory={currentCategory}
               contactSelected={contactSelected}
               setContactSelected={setContactSelected}
      ></Navbar>
      <main>
      
      
        {!contactSelected ? (
          <>
             {/* <Projects/>  */}
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
       
      </main>

    </div>
  );
}

export default App;
