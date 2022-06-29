import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import crawlSpace from '../../assets/pictures/crawl_space.jpg';
import bricks from '../../assets/pictures/bricks.jpg';



function About() {
  return (
    <section className="my-5">
      <h1 id="about">aboutMe</h1>
      <img src={crawlSpace} className="my-2" style={{ width: "10%" }} alt="crawl-space gonzo" />
      <div className="my-2">
        <p>
      I love to build things. I used to use my hands to build things until I found javaScript.
        </p>
        <img src={bricks} className="my-2" style={{ width: "10%" }} alt="brick pavers being assembled" />
      <p>
        I still enjoy building with my hands, brick by brick. Thats how I look at coding
      </p>
      </div>
    </section>
  );
}

export default About;