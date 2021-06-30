import React from "react";
import "./features.css";
import { IoWalletOutline } from "react-icons/io5";
import { VscDeviceMobile } from "react-icons/vsc";
import { BiSupport } from "react-icons/bi";
import { RiExchangeDollarFill } from "react-icons/ri";

const Features = () => {
  return (
    <div className="features">
      <div className="features__heading">
        <h1>Our Features</h1>
        <p>Bitcoin is the simplest way to exchange money at very low cost.</p>
      </div>
      <div className="features__content">
        <div className="features__content__feature">
          <div className="features__content__icon">
            <VscDeviceMobile />
          </div>
          <div className="features__content__description">
            <p>Mobile Apps</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
        </div>
        <div className="features__content__feature">
          <div className="features__content__icon">Icon</div>
          <div className="features__content__description">
            <p>Safe & Secure</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
        </div>
        <div className="features__content__feature">
          <div className="features__content__icon">
            <IoWalletOutline />
          </div>
          <div className="features__content__description">
            <p>Wallet</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
        </div>
        <div className="features__content__feature">
          <div className="features__content__icon">
            <BiSupport />
          </div>
          <div className="features__content__description">
            <p>Experts Support</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
        </div>
        <div className="features__content__feature">
          <div className="features__content__icon">
            <RiExchangeDollarFill />
          </div>
          <div className="features__content__description">
            <p>Instant Exchange</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
        </div>
        <div className="features__content__feature">
          <div className="features__content__icon">Icon</div>
          <div className="features__content__description">
            <p>Recuring Buys</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
