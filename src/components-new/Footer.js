import React from 'react';
import '../styles/footer.scss';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer__section'>
                <li className='footer__section-list'>
                    <ul>About Us</ul>
                    <ul><a href=''>About</a></ul>
                    <ul><a href=''>Join Us</a></ul>
                </li>
            </div>
            <div className='footer__section'>
                <li className='footer__section-list'>
                    <ul>Follow Us</ul>
                    <ul><a href=''>Facebook</a></ul>
                    <ul><a href=''>Instagram</a></ul>
                    <ul><a href=''>Twitter</a></ul>
                </li>
            </div>
            <div className='footer__section'>
                <li className='footer__section-list'>
                    <ul>Contact Us</ul>
                    <ul><a href=''>Email</a></ul>
                </li>
            </div>
        </div>
    );
  }