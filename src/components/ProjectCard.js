import React from "react";
import { Link } from "react-router-dom";

//images
import jsQuiz from "../assets/projectImages/jsQuiz.jpg";
import PizzaHunt from "../assets/projectImages/PizzaHunt.png";
import runBuddy from "../assets/projectImages/runBuddy_preview.png";
import NoteTaker from "../assets/projectImages/note-taker.png";
import SwansonDreams from "../assets/projectImages/Swanson-Dreams.png";
import TaskMaster from "../assets/projectImages/Taskmaster.png";

function ProjectCard() {
  return (
    <div className="container">
      {/* Code Quiz */}
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
      {/* PizzaHunt */}
      <section id="project" className="card">
        <h3>Pizza Hunt</h3>
        <img src={PizzaHunt} style={{ width: "100%" }} alt="cover" />
        <p>
          A website designed for a Pizza Company where users can view a list of
          pizza creations and create their own. Users can also participate in
          discussions on the creations by posting comments and replies.
        </p>
        <div>
          <Link
            to={{
              pathname: "https://ancient-lowlands-37118.herokuapp.com/",
            }}
            target="_blank"
          >
            Visit the Website
          </Link>
        </div>
      </section>
      {/* Note Taker */}
      <section id="project" className="card">
        <h3>Note Taker</h3>
        <img src={NoteTaker} style={{ width: "100%" }} alt="cover" />
        <p>
          an application called Note Taker that can be used to write and save
          notes. This application will use an Express.js back end Server and
          will save and retrieve note data from a JSON file.
        </p>
        <div>
          <Link
            to={{
              pathname: "https://obscure-eyrie-61544.herokuapp.com/",
            }}
            target="_blank"
          >
            Visit the Website
          </Link>
        </div>
      </section>
      {/* Swanson Dreams */}
      <section id="project" className="card">
        <h3>Swanson Dreams</h3>
        <img src={SwansonDreams} style={{ width: "100%" }} alt="cover" />
        <p>
          A class collaboration project webpage using web API functionality to
          have your dreams translated for you by Ron Swanson!
        </p>
        <div>
          <Link
            to={{
              pathname: "https://robert-schwartz.github.io/project-one/",
            }}
            target="_blank"
          >
            Visit the Website
          </Link>
        </div>
      </section>
      {/* Task Master */}
      <section id="project" className="card">
        <h3>Task Master</h3>
        <img src={TaskMaster} style={{ width: "100%" }} alt="cover" />
        <p>
          HTML/CSS/Javascript webpage to track daily tasks with the ability to
          organize tasks based on progress and completion. Completed with lesson
          plan provided by the University of Arizona Bootcamp.
        </p>
        <div>
          <Link
            to={{
              pathname: "https://robert-schwartz.github.io/taskMaster/",
            }}
            target="_blank"
          >
            Visit the Website
          </Link>
        </div>
      </section>
      {/* Run Buddy */}
      <section id="project" className="card">
        <h3>Run Buddy</h3>
        <img src={runBuddy} style={{ width: "100%" }} alt="cover" />
        <p>
          HTML and CSS landing page to provide a static landing page for a
          hypothetical fitness company. Completed with lesson plan provided by
          the University of Arizona Bootcamp.
        </p>
        <div>
          <Link
            to={{
              pathname: "https://robert-schwartz.github.io/run_buddy/",
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
