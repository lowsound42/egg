import React, {useState} from 'react';
import '../styles/header-new.scss'; 
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import menu from '../assets/menu1-512.png';

export default function Header() {

const [open, setOpen] = useState(false);

let clicked = () => {
  setOpen(!open);
}

return (
  <>
  <div className='header__container'>
      <div className='eggHeader'>
        <img className='eggHeader__img' src='https://www.goodfreephotos.com/svgfiles/final469-fried-egg.svg' alt='cartoony egg logo' />
        <img className='eggHeader__hamburger' onClick={() => clicked()} src={menu} alt='hamburger menu button' />
      </div>
      <nav className={open ? 'active' : 'nav'}>
      <ul className='active-list'>
        <li className='active-list--item'>
          <Link className='active-list--item_name' to="/">Home</Link>
        </li>
        <li className='active-list--item'>
          <Link className='active-list--item_name' to="/about">About</Link>
        </li>
        <li className='active-list--item'>
          <Link className='active-list--item_name' to="/join">Ready to be Poached?</Link>
        </li>
      </ul>
    </nav>
  </div>
  </>
      )
}

