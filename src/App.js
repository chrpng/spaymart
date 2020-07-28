import React from 'react';
import { Switch, Route, useLocation, matchPath } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './reset.css';
import './App.scss';
import Navbar from './components/nav/Navbar';
import Footer from './components/nav/Footer';
import Home from './components/home/Home';
import Hero from './components/home/Hero';
import HelpButtons from './components/help/HelpButtons';
import About from './components/about/About';
import Help from './components/help/Help';
// import Container from './Container';
import Anime, { anime } from 'react-anime';

const transition = {
  opacity: [0, 1],
  translateY: ['20vh', 0],
  easing: 'easeInOutCubic',
  delay: anime.stagger(100),
};

function App() {
  let location = useLocation();

  // Routes:
  // Hero
  // HelpButton
  return (
    <>
      <Navbar />
      <TransitionGroup className="transition-group">
        <div class='stand-in'>
          <Anime {...transition}>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Hero}></Route>
            <Route exact path={[`${process.env.PUBLIC_URL}/`, `${process.env.PUBLIC_URL}/help`]}><HelpButtons/></Route>
            <Switch location={location}>
              <Route exact path={`${process.env.PUBLIC_URL}/`}><Home/></Route>
              <Route path={`${process.env.PUBLIC_URL}/about`}><About/></Route>
              <Route path={`${process.env.PUBLIC_URL}/help`}><Help/></Route>
            </Switch>
          </Anime>
        </div>
      </TransitionGroup>
      <Anime opacity={[0,1]} delay={1000} easing='easeInSine'>
        <Footer />
      </Anime>
    </>
  )
}

export default App;