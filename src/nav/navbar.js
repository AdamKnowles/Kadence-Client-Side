import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = props => {
  return (
    <nav className="navbar">
      <ul className="nav nav-pills">
        <li className="nav-item">
            <Link className="nav-link" to="/">Runs List</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/runform">Run Form</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar
