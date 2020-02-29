import React from 'react';
import Header from './Header';
import Footer from './Footer';
import UselessInfo from './UselessInfo';
import '../styles/home.scss';

export default function Home() {
    return (
    <>
        <Header />
        <div className='hero'>
            <h1 className='hero__text'>The tomorrow of eggs . . .</h1>
            <h1 className='hero__text-sub'>is today</h1>
            <button className='hero__button'>Get in Touch</button>
        </div>
        <UselessInfo/>
        <Footer/>
    </>
    );
  }