import React from "react";

function Skills() {
  return (
    <section className="my-5">
      <h1>Skills</h1>
      <div className="my-2">
        <h2>
          Here are some of the technologies and coding paradigms I have learned
        </h2>
        <div className="container">
          <div className="card">
            <h3>Front End:</h3>
            <p>
              React, Redux, Handlebars, JSX HTML, CSS, JavaScript, ES6, JQuery
              Bootstrap, Bulma, Materialize and other frameworks
            </p>
          </div>

          <div className="card">
            <h3>API Creation and Implementation:</h3>
            <p>
              Web API, Third-Party APIs, Server-Side APIs, RESTful APIs, GraphQl
            </p>
          </div>

          <div className="card">
            <h3>Node.JS:</h3>
            <p>
              NPM packages: <br />
              Inquirer Jest Axios + others
            </p>
          </div>

          <div className="card">
            <h3>Server Creation:</h3>
            <p>
              Express.js, Apollo, Heroku, JawsDB, MongoDB, Atlas, Postman, and
              Insomnia
            </p>
          </div>

          <div className="card">
            <h3>Databases:</h3>
            <p>
              MySQL - Sequelize, MongoDB - Mongoose, CRUD Operations, MySQL
              Workbench, Robo 3T
            </p>
          </div>

          <div className="card">
            <h3>Coding Paradigms:</h3>
            <p>
              Object Oriented Programing (OOP), Model View Controller (MVC),
              Test Driven Development (TDD), Object-Document Mapping(ODM),
              Object-Relational Mapping (ORM)
            </p>
          </div>

          <div className="card">
            <h3>Progressive Web Applications (PWA):</h3>
            <p>IndexedDB, Webpack, Service Workers</p>
          </div>

          <div className="card">
            <h3>Source Control :</h3>
            <p>Git Projects, Github and GitLab, Git Bash</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
