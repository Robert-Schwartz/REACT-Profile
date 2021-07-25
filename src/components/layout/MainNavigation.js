import React from "react";
import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
  <header className ={classes.header}>
    <h1> Robert Schwartz Development</h1>
    <ul>
      <li>
        {/* Link internally adds an onclick internally and will update the URL and load appropriate components */}
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/skills">Skills</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      <li>
        <Link to="/resume">Resume</Link>
      </li>
    </ul>
  </header>
  );
}

export default MainNavigation;
