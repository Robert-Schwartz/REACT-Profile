import React from "react";
import ProjectCard from "../components/ProjectCard"

function Projects() {
  return (
    <section>
    <div>
      <h1> Recent Projects</h1>
      <h2>
        Here are some Projects that I have worked on
      </h2>
      <div className="container">
        <ProjectCard id="projects"/>
      </div>
    </div>
    </section>
  );
}

export default Projects;
