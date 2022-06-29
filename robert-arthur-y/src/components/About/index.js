import React from 'react';
import crawlSpace from '../../assets/pictures/crawl_space.jpg';
import bricks from '../../assets/pictures/bricks.jpg';
import tisMe from '../../assets/pictures/its-me.jpg';


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
      <img src={tisMe} className="my-2" style={{ width: "10%" }} alt="selfie of a handsom man" />
      </div>
    </section>
  );
}

export default About;