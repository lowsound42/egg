import React from 'react';
import Header from './Header';
import hero from '../assets/phonehen.jpg';
import '../styles/home.scss';

export default function Home() {
    return (
        <div className='hero'>
            <Header />
            <img className='hero__image' src={hero} alt='hero image of an egg' />
            <h1 className='hero__text'>The tomorrow of eggs . . .</h1>
            <h1 className='hero__text-sub'>is today</h1>
            <button className='hero__button'>Get in Touch</button>
        </div>
    );
  }