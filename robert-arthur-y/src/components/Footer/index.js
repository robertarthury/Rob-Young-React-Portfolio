import React from "react";


function Footer() {
    return(
        <footer>
            <h2 style={{textAlign: "center", fontSize: "20px", marginTop: '20px'}}>Check out my... </h2>
            <nav >
                <ul style={{margin: 40, position: "relative", bottom: 0}} className="footerNavbar">
                    <li>
                        <a className="footerLink" href="https://github.com/robertarthury" target="_blank" rel="noreferrer">GitHub</a>
                    </li>
                    <li>
                        <a className="footerLink" href="https://www.linkedin.com/in/rob-young-09213622b//" target="_blank" rel="noreferrer">LinkedIn</a>
                    </li>
                    <li>
                        <a className="footerLink" href="robertarthury@gmail.com">email</a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;