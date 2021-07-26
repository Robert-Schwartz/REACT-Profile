import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={`flex-row px-1 ${classes.header}`}>
      <div className={classes.logo}> Robert Schwartz Development</div>
      <nav>
        <ul className="flex-row">
          <li>
            {/* Link internally adds an onclick internally and will update the URL and load appropriate components */}
            <Link to="/">Home</Link>
          </li>
          <li className="mx-2">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="mx-2">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="mx-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="mx-2">
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
