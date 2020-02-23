import React from 'react';
import '../styles/Header.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import eggImg from '../assets/eggheads.png';
import About from './About';
import Home from './Home';
import Join from './Join';

export default function Header() {

return (
    <Router>
      <div className='eggHeader'>
        <img className='eggHeader__img' src={eggImg} alt='Logo made of three cartoony eggs' />
        <nav className='eggHeader__nav'>
          <ul className='eggHeader__nav-list'>
            <li className='eggHeader__nav-list--item'>
              <Link to="/">Home</Link>
            </li>
            <li className='eggHeader__nav-list--item'>
              <Link to="/about">About</Link>
            </li>
            <li className='eggHeader__nav-list--item'>
              <Link to="/join">Join</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
      </div>
    </Router>
  );
}

