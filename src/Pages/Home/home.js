import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Ourteam from "../../Components/Ourteam/Ourteam";
import About from "../About/about";
import Features from "../Features/features";
import "./home.css";

const home = () => {
  return (
    <React.Fragment>
      <div className="Header">
        <Navbar />
        <div className="header__getStarted">
          <div className="header__getStarted__content">
            <h1>
              Invest in <span>Bitcoin</span>
            </h1>
            <p>Use modern progressive technologies of Bitcoin to earn money</p>

            <input type="email" placeholder="Enter your email" />
            <button>Get Started</button>
          </div>
        </div>
      </div>
      <About />
      <Features />
      {/* Get started homepage */}
      <div className="getstarted">
        <h1 className="getstarted__heading">Get Started With Bitcoin</h1>
        <p>
          Start learning about Bitcoin with interactive tutorials. It's fun,
          easy and takes only a few minutes!
        </p>
        <div className="getstarted__cards">
          <div className="getstarted__cards__card">
            <div>image</div>
            <h1>Create Your Wallet</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
          <div className="getstarted__cards__card">
            <div>image</div>
            <h1>Create Your Wallet</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
          <div className="getstarted__cards__card">
            <div>image</div>
            <h1>Create Your Wallet</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </p>
          </div>
        </div>
      </div>
      <Ourteam />
    </React.Fragment>
  );
};

export default home;
