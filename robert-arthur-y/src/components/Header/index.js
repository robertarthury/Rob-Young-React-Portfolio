import React from "react";
import {useState} from "react";
import Project from "../Project/index";
import Footer from "../Footer/index";
import Navigation from "../Navigation/index";
import ContactForm from "../ContactForm/index";
import AboutMe from "../AboutMe";
import Resume from "../Resume/index";



function Header() {
    const [currentPage, setCurrentPage] = useState("About Me");
    
    const handlePageRender = () => {
        // console.log(currentPage);
        switch(currentPage) {
            case "About Me": {
                return(<AboutMe />);
            }
            case "Projects": {
                // pass props that give the project data, title, image, technologies used?
                const projects = [
                {
                    title: "Stat-Cat",
                    image: "../../assets/pictures/screenshot.png",
                    stack: "Front end REST API ",
                    repo: "https://robertarthury.github.io/shooting-star/",
                    deployed: "https://robertarthury.github.io/shooting-star/",
                    description: "Compare two NBA teams current team statistics side by side as well as displays the outcome of the last game by doing a GET request to a free, dynamically updated third party database"
                },
                {
                    title: "Handy-Man",
                    image: "../../assets/pictures/hand-man.png",
                    stack: "Handlebars, express.js, node.js, sequelize",
                    repo: "https://robertarthury.github.io/Handy-Man/",
                    deployed: "https://robertarthury.github.io/Handy-Man/",
                    description:"An application for contractors, allows access to dynamic database of peer reviewed sub-contractors"
                }
                ]
                return(
                    <div>
                        <h3 style={{marginLeft: "2%"}}>Click the images to see the application in action!</h3>
                        <ul className="card-wrapper">
                            {projects.map((project) => {
                                return <Project project={project} />;
                            })}
                        </ul>
                    </div>
                    
                );
            }
            case "Contact Me": {
                return (<ContactForm />);
            }
            case "Resume": {
                return (<Resume />);
            }
            default: {
                console.log("Something went wrong");
                break;
            }
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
            {handlePageRender()}
            <Footer />
        </div>
        
        );
}

export default Header;