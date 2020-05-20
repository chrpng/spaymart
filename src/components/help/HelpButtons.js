import React from 'react';
import './HelpButtons.scss';
import { NavLink, withRouter } from 'react-router-dom';

const HelpButtons = () => {
  return (
    <header className="help-btns-container">
      <button>Donate</button>
      <NavLink to={process.env.PUBLIC_URL + "/help"}>
        <button>Adopt</button>
      </NavLink>
      <button>Volunteer</button>
    </header>
  );
}
 
export default withRouter(HelpButtons);