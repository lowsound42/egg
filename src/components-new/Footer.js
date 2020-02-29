import React from 'react';
import '../styles/footer.scss';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer__section'>
                <li className='footer__section-list'>
                    <ul className='footer__section-list--title'>About Us</ul>
                    <ul className='footer__section-list--item'><a href=''>About</a></ul>
                    <ul className='footer__section-list--item'><a href=''>Join Us</a></ul>
                </li>
            </div>
            <div className='footer__section'>
                <li className='footer__section-list'>
                    <ul className='footer__section-list--title'>Follow Us</ul>
                    <ul className='footer__section-list--item'><a href=''>Facebook</a></ul>
                    <ul className='footer__section-list--item'><a href=''>Twitter</a></ul>
                    <ul className='footer__section-list--item'><a href=''>Instagram</a></ul>
                </li>
            </div>
            <div className='footer__section'>
                <li className='footer__section-list'>
                    <ul className='footer__section-list--title'>Contact Us</ul>
                    <ul className='footer__section-list--item'><a href=''>Email</a></ul>
                </li>
            </div>
        </div>
    );
  }