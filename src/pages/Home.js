import React from "react";
// Import Image
import coverImage from "../assets/me.jpeg";

function Home() {
  return (
    <section className="my-5">
      <h1>Hi, I'm Robert!</h1>
      <img src={coverImage} style={{ width: "50%" }} alt="cover" />
      <div className="my-2">
        <p>
          I am a Full Stack Web Developer from Phoenix, Arizona currently
          enrolled in the University of Arizona Full Stack Boot Camp. When I'm
          not coding you will find me playing with my border collie Mika,
          mountain biking, or enjoying sports. Go Suns!
          <br />
          <br />
          My passion for web development came from my love of solving the
          complex problems that require new and unique solutions. In previous
          professional experiences I would often look for new ways to innovate
          processes and create new tools. I love to work together on a team to
          bring new perspectives and deliver creative solutions from conception
          to deployment.
          <br />
          <br />
          Please take a look around to see what I have learned so far!
        </p>
      </div>
    </section>
  );
}

export default Home;
