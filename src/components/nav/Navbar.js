import React from 'react';
import logo from './../../images/logo.png';
import { NavLink, withRouter } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <img className="logo" src={logo} alt="logo"/>
      <ul>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/volunteer">Help Out</NavLink></li>
        <li><NavLink to="/events">Events</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}
 
export default withRouter(Navbar);