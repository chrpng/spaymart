import React from 'react';
import logo from './../../images/logo.png';
import { NavLink, withRouter } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav>
      <img className="logo" src={logo} alt="logo"/>
      <ul>
        <li><NavLink exact to={process.env.PUBLIC_URL + "/"}>Home</NavLink></li>
        <li><NavLink to={process.env.PUBLIC_URL + "/about"}>About</NavLink></li>
        <li><NavLink to={process.env.PUBLIC_URL + "/help"}>Help Out</NavLink></li>
        <li><NavLink to={process.env.PUBLIC_URL + "/events"}>Events</NavLink></li>
        <li><NavLink to={process.env.PUBLIC_URL + "/contact"}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}
 
export default withRouter(Navbar);