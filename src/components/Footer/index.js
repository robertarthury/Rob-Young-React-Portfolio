import React from "react";




function Footer() {
    return(
        <footer>
            <h2 style={{textAlign: "center", fontSize: "20px", marginTop: '20px'}}>Check out my... </h2>
            <nav >
                <ul style={{margin: 40, position: "relative", bottom: 0}} className="btn-group footerNavbar">
                    <li>
                        <button type='button' class='btn btn-primary'>
                            <a className="m-1 p-1 footerLink" style={{color:"white"}} href="https://github.com/robertarthury" target="_blank" rel="noreferrer">GitHub</a>
                        </button>
                    </li>
                    <li>
                        <button type='button' class='btn btn-primary'>
                            <a className="m-1 p-1 footerLink"  style={{color:"white"}} href="https://www.linkedin.com/in/rob-young-09213622b//" target="_blank" rel="noreferrer">LinkedIn</a>
                        </button>
                    </li>
                    <li>
                        <button type='button' class='btn btn-primary'>
                            <a className="m-1 p-1 footerLink"  style={{color:"white"}} href="robertarthury@gmail.com">email</a>
                        </button>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;