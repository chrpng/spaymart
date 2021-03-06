import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import './reset.css';
import './App.scss';
import Navbar from './components/nav/Navbar';
import Footer from './components/nav/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Help from './components/help/Help';
// import Container from './Container';

function App() {
  let location = useLocation();

  return (
    <>
      <Navbar />
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 3000, exit: 3000 }}
          classNames="fade"
        >
          <Switch location={location}>
            <Route exact path={process.env.PUBLIC_URL + "/"}><Home/></Route>
            <Route path={process.env.PUBLIC_URL + "/about"}><About/></Route>
            <Route path={process.env.PUBLIC_URL + "/help"}><Help/></Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  )
}

export default App;