import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './index.css';
import About from './components-new/About';
import Home from './components-new/Home';
import Join from './components-new/Join';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
    <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/join">
      <Join />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
</Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
