import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './reset.css';
import './App.css';
import Navbar from './components/nav/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"}> <Home /> </Route>
        <Route path={process.env.PUBLIC_URL + "/about"}> <About /> </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;