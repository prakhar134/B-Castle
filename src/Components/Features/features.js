import React from "react";
import "./features.css";
import { MdTouchApp, MdTrackChanges, MdSlowMotionVideo } from "react-icons/md";
import { RiSkull2Fill } from "react-icons/ri";
import { GiTimeBomb, GiHumanTarget } from "react-icons/gi";

const Features = () => {
  return (
    <div className="features" id="services">
      <div className="features__heading">
        <h1>Our Services</h1>
        <p>Bitcoin is the simplest way to exchange money at very low cost.</p>
      </div>
      <div className="features__content">
        <div className="features__content__feature">
          <div className="features__content__icon">
            <MdTouchApp />
          </div>
          <div className="features__content__description">
            <p>Interactive learning</p>
            <p>
              Detailed Technical & Fundamental Analysis, Market Sentiments,
              Exchange Uses and Risk Management Strategies are Provided.
            </p>
          </div>
        </div>
        <div className="features__content__feature">
          <div className="features__content__icon">
            <GiTimeBomb />
          </div>
          <div className="features__content__description">
            <p>Real Time AI Based Analysis</p>
            <p>
              Here you can grab some extra perks like heat-map, fear & greed
              index meter, alt-coins risk calculator, market hike chart and
              upcoming events.
            </p>
          </div>
        </div>
        <div className="features__content__feature">
          <div className="features__content__icon">
            <MdTrackChanges />
          </div>
          <div className="features__content__description">
            <p>Portfolio Tracker</p>
            <p>
              We will help you to divide fundamental coins for optimal portfolio
              management.
            </p>
          </div>
        </div>
        <div className="features__content__feature">
          <div className="features__content__icon">
            <MdSlowMotionVideo />
          </div>
          <div className="features__content__description">
            <p>Premium Live video</p>
            <p>
              Exclusive Youtube Live Sessions Only for Our Premium Community on
              Regular Updates & Queries.
            </p>
          </div>
        </div>
        <div className="features__content__feature">
          <div className="features__content__icon">
            <GiHumanTarget />
          </div>
          <div className="features__content__description">
            <p>Accurate Premium Signals</p>
            <p>
              Accurate and Analyzed calls are given by our Crypto Experts, and
              Experienced Analyst based on Technical & Fundamental Analysis and
              Insider News.
            </p>
          </div>
        </div>
        <div className="features__content__feature">
          <div className="features__content__icon">
            <RiSkull2Fill />
          </div>
          <div className="features__content__description">
            <p>Better Risk Management</p>
            <p>
              To ensure the security of our community, SmartViewAI is providing
              verified strategies to invest in fundamental based coins.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
