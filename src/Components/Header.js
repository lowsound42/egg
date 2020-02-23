import React from 'react';
import '../styles/Header.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Header() {

return (
      <div className='eggHeader'>
        <img className='eggHeader__img' src='https://www.goodfreephotos.com/svgfiles/final469-fried-egg.svg' alt='cartoony egg logo' />
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
      </div>
      )
}

