import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import crawlSpace from '../../assets/pictures/crawl_space.jpg';
import bricks from '../../assets/pictures/bricks.jpg';
import itsMe from '../../assets/pictures/its-me.jpg';



function AboutMe() {
  return (
    <section>
      <div className="card m-4">
        <h1 className="card-title m-4" id="about">aboutMe</h1>
        <img src={itsMe} className="card-image-top" style={{ width: "34%" }} alt="crawl-space gonzo" />
      <div className="card m-4">
          <p className="card-text m-4">
          I still enjoy building with my hands, brick by brick. Thats how I look at coding
           </p>
        <img src={bricks} className="card-image-top m-4" style={{ width: "25%" }} alt="brick pavers being assembled" />
      </div>
      <div className="card m-4">
      <p className="card-text m-4">
       
        I love to build things. I used to use my hands to build things until I found javaScript.
      </p>
      <img src={crawlSpace} className="card-image-top m-4" style={{ width: "25%" }} alt="brick pavers being assembled" />
      </div>
      


    </div>
    </section>
  );
}

export default AboutMe;