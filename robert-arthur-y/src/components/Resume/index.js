import React from "react";

function Resume() {
    return(
        <div style={{textAlign: "center"}}>
            <a className="resume" href="./images/Resume.pdf" target="_blank" rel="noreferrer"><i className="far fa-file"></i> Download my Resume here</a>
            <h3 style={{fontSize: 30}}>Frontend:</h3>
            <ul className="proficiency-wrapper">
                <li>
                    HTML5
                </li>
                <li>
                    CSS
                </li>
                <li>
                    Bootstrap
                </li>
                <li>
                    React
                </li>
                <li>
                    jQuery
                </li>
            </ul>
            <h3 style={{fontSize: 30}}>Backend:</h3>
            <ul className="proficiency-wrapper">
                <li>
                    MySQL
                </li>
                <li>
                    MongoDB
                </li>
                <li>
                    Express.js
                </li>
                <li> 
                    Node.js
                </li>
                <li>
                    Sequelize
                </li>
                <li>
                    Mongoose
                </li>
                <li>
                    GraphQL
                </li>
            </ul>
        </div>
    )
}

export default Resume;