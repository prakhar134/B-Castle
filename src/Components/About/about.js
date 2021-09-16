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
        <h1 className="about__content__heaing">About Us</h1>
        <p style={{ lineHeight: 1.5 }} className="about__content__description">
          MoneyCastle is a young and growing digital currency portfolio
          management company. We provide digital currency management services,
          market insights, investment exposure, and investment products to the
          developing digital currency asset class.
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
