import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="About" id="about">
      <div className="about__image">
        <a href="https://placeholder.com/">
          <img src="https://via.placeholder.com/500" />
        </a>
      </div>
      <div className="about__content">
        <h1 className="about__content__heaing">What is Bitcoin</h1>
        <p className="about__content__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laborisLorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris
        </p>
        <div className="about__content__btn">Get Started</div>
      </div>
    </div>
  );
};

export default About;
