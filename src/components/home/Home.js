import React from 'react';
import Hero from './Hero';
import HelpButtons from './../help/HelpButtons';
import News from './../events/News';

import { withRouter } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';

const Home = ({ location }) => {
  return ( 
    <section className="route-section">
      <Hero />
      <HelpButtons />
      <News />
    </section>
  );
}
 
export default withRouter(Home);