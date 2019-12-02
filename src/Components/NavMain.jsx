import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavMain.css";

const NavMain = props => {
  return (
    <nav className="nav nav-bar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink exact to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/intro" className="nav-link">
            Intro
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/class-async" className="nav-link">
            Class Async
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/hook-async" className="nav-link">
            Hook Async
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/form" className="nav-link">
            Form Example
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMain;
