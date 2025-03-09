import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import "./recipeFinder.css"; // Import styles

export default function Navbar() { // the navbar component
  return (
    <nav className="navbar"> {/* Creates a navigation bar */}
      <NavLink className="add-recipe-btn" to="/create">  {/* creates a link to create a recipe */}
        Add Recipe
      </NavLink>
    </nav>
  );
}
