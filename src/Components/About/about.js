import React from "react";
import "./about.css";
import homepage from "../../static/illustrations/Homepage.jpg";

const About = (props) => {
  return (
    <div className="About" id="about">
      <div className="about__image">
        <img
          src={homepage}
          style={{ objectFit: "contain" }}
          height="500px"
          width="500px"
          alt=""
        />
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
        <div
          onClick={() => props.setLoginModal(true)}
          className="about__content__btn"
        >
          Get Started
        </div>
      </div>
    </div>
  );
};

export default About;
