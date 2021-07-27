import React from "react";
import { Route, Link } from "react-router-dom";

//images
import jsQuiz from "../assets/projectImages/jsQuiz.jpg";

function ProjectCard() {
  return (
    <div>
      <section id="project" className="card">
        <h3>Code Quiz</h3>
        <img src={jsQuiz} style={{ width: "100%" }} alt="cover" />
        <p>
          This web page was built using Javascript functionality to deliver a
          single page quiz game that will dynamically update the page for each
          question and will display a final score at the end of the questions.
        </p>
        <div>
          <Link
            to={{
              pathname:
                "https://robert-schwartz.github.io/JavaScript-codeQuiz/",
            }}
            target="_blank"
          >
            Visit the Website
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ProjectCard;
