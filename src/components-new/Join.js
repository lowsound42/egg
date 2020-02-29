import React from 'react';
import Header from './Header';
import '../styles/join.scss';
import Footer from './Footer';

export default function Join() {
    return (
        <>
        <Header />
        <div className="join">
        <h1 className="join__card1">
          Are you eggcited?<br/><br/>Are you up for a challenge?<br/><br/>Are you diverse? (seriously tho?)<br/><br/>Check out our values
        </h1>
        </div>
        <h1 className="join__card2">
        </h1>
        <Footer />
        </>
    );  }