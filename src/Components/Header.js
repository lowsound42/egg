import React from 'react';
import '../styles/Header.scss';
import eggImg from '../assets/eggheads.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Header() {

return (
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
      </div>
      )
}

