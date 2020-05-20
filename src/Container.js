import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from './components/home/Home';
import About from './components/about/About';
import Help from './components/help/Help';

function Container({location}) {
  return (
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          timeout={300}
          classNames="fade"
        >
          <Switch location={location}>
            <Route exact path={process.env.PUBLIC_URL + "/"}><Home/></Route>
            <Route path={process.env.PUBLIC_URL + "/about"}><About/></Route>
            <Route path={process.env.PUBLIC_URL + "/help"}><Help/></Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
  );
}

export default withRouter(Container);
