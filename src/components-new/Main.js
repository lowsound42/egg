import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import UselessInfo from './UselessInfo';
import '../styles/main.scss';

export default function Main() {
    return (
    <>
    <div className='main'>
        <Header />
        <Home />
        <UselessInfo />
        <Footer />
    </div>
    </>
    );
  }