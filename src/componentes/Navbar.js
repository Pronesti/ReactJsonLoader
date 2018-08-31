import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Diego Pronesti</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <NavLink to='/' className="nav-link"> Home </NavLink>
      </li>

      <li className="nav-item">
      <NavLink to='/users' className="nav-link"> Usuarios </NavLink>
      </li>

      <li className="nav-item">
      <NavLink to='/about' className="nav-link"> About </NavLink>
      </li>
      <li className="nav-item">
      <NavLink to='/contact' className="nav-link"> Contact </NavLink>
      </li>
      <li className="nav-item">
      <NavLink to='/login' className="nav-link"> Log In </NavLink>
      </li>
    </ul>
  </div>
</nav>
    );
  }
}

export default Navbar;
