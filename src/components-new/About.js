import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../styles/about.scss';

//testing

export default function About() {
  return (
    <>
      <Header />
			<div className="about">
        <h1 className="about__header">
          Things don't just change. You have to change them.
        </h1>
      </div>
      <Footer />
    </>
  );
}
