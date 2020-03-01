import React from 'react';
import '../styles/modal.scss';

export default function Modal(props) {


    return (
        <>
        <div className='modal'>
        <h1 className='modal__header'>
          TEST
        </h1>
        <button className='modal__button' onClick={() => props.toggleModal()}>Close</button>
        </div>
        </>
    );  }