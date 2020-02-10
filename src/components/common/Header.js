import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css';

const Header = () => {

  const activeStyle = { color: "#F15B2A" };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark main-nav sticky-top ">
      <NavLink to="/" className="navbar-brand" >
        BookWorms
        </NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
        aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/books" className="nav-link" activeStyle={activeStyle}>My Books</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className="nav-link" activeStyle={activeStyle}>
              About
            </NavLink>
          </li>
        </ul >
      </div >
    </nav >
  );
};

export default Header;
