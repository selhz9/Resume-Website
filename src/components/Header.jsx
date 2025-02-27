import React from 'react';
import { Link } from 'react-router-dom';

function Header () {
  return (
    <header>
      <h1 className="nav-title">Sarah Hantz</h1>
      <nav>
        <ul>
          <li><Link to="/">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/resume">Resume</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;