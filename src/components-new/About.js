import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../styles/useless.scss';

//testing

export default function About() {
  return (
    <>
      <Header />
			<div className="useless">
        <h1 className="useless__header">
          Things don't just change. You have to change them.
        </h1>
      </div>
      <Footer />
    </>
  );
}
