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
        <Route exact path="/"> <Home /> </Route>
        <Route path="/about"> <About /> </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;