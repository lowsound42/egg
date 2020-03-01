import React, {useState} from "react";
import "../styles/home.scss";
import Modal from './Modal';

export default function Home() {

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
    console.log(modal);
  }

  return (
    <>
      <div className="hero">
        <h1 className="hero__text">The tomorrow of eggs . . .</h1>
        <h1 className="hero__text-sub">is today</h1>
        {modal ? <Modal toggleModal={() => toggleModal()} /> : null}
        <button className="hero__button" onClick={() => toggleModal()}>Get in Touch</button>
      </div>
    </>
  );
}
