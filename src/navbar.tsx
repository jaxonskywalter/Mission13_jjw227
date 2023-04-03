import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// creates the navbar and links to be displayed on all pages
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blogs">My Podcasts</Link>
        </li>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
