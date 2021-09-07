import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Ourteam from "../../Components/Ourteam/Ourteam";
import About from "../../Components/About/about";
import Features from "../../Components/Features/features";
import News from "../../Components/News/News";
import map from "../../static/icons/map.svg";
import arrow from "../../static/icons/arrow.svg";
import { RiWallet2Fill } from "react-icons/ri";
import "./home.css";

const Home = () => {
  const [openLoginModal, setLoginModal] = useState(false);

  return (
    <React.Fragment>
      <div className="Header">
        <Navbar openLoginModal={openLoginModal} setLoginModal={setLoginModal} />

        <div className="header__getStarted">
          <img src={map} className="header__svg" alt="" />
          <div className="header__getStarted__content">
            <h1>
              Invest in <span>Bitcoin</span>
            </h1>
            <p>Use modern progressive technologies of Bitcoin to earn money</p>

            <input type="email" placeholder="Enter your email" />
            <button onClick={() => setLoginModal(true)}>Get Started</button>
          </div>
        </div>
      </div>
      <About setLoginModal={setLoginModal} />
      <Features />
      {/* Get started homepage */}
      <div className="getstarted" id="solution">
        <h1 className="getstarted__heading">Get Started With Bitcoin</h1>
        <p>
          Start learning about Bitcoin with interactive tutorials. It's fun,
          easy and takes only a few minutes!
        </p>
        <div className="getstarted__cards">
          <div className="getstarted__arrow_card">
            <img src={arrow} className="getstarted__arrow" alt="" />
            <div className="getstarted__cards__card">
              {/* <div>image</div> */}
              <RiWallet2Fill size="3em" color="#4f48cf" />
              <h1>Create Your Wallet</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </div>
          </div>
          <div className="getstarted__arrow_card">
            <img src={arrow} className="getstarted__arrow_2" alt="" />
            <div className="getstarted__cards__card">
              {/* <div>image</div> */}
              <RiWallet2Fill size="3em" color="#5170b7" />
              <h1>Create Your Wallet</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </div>
          </div>
          <div className="getstarted__cards__card">
            <div>
              {/* <img src="https://via.placeholder.com/50" alt="" /> */}
            </div>
            <RiWallet2Fill size="3em" color="#55c684" />
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
      {/* Subscribe to our newsletter */}
      <div className="newsLetter">
        <div className="newsLetter__content">
          <h2>Subscribe to our Newsletter</h2>
          <p style={{ fontSize: "1em" }}>
            Sign up for weekly industry updates, insider perspectives and
            in-depth market analysis.
          </p>
        </div>
        <div className="newsLetter__input">
          <input type="email" placeholder="Enter your Email" />
          <button onClick={() => setLoginModal(true)}>Get Started</button>
        </div>
      </div>
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingottom: "25px",
        }}
      >
        <h1>Explore our Packs</h1>
        <div style={{ width: "100%" }} className="flex">
          <div className="payCard_small">
            <h4>Extra Small</h4>
            <h1>₹5000</h1>
            <span
              style={{
                padding: "5px 20px",
                color: "red",
                backgroundColor: "rgba(255,0,0, 0.2)",
                borderRadius: "15px",
                marginTop: "55px",
              }}
            >
              Enjoy Perks
            </span>
            <ul>
              <li>This is one of the Perks single</li>
              <li>This is one of the Perks</li>
              <li>This is one of the Perks triple</li>
              <li>This is one of the Perks normal</li>
              <li>This is one of the Perks</li>
            </ul>
          </div>
          <div className="payCard_small recommend">
            <span
              style={{
                padding: "5px 20px",
                marginTop: "15px",
                color: "blue",
                backgroundColor: "rgba(0,0,250, 0.2)",
                borderRadius: "15px",
              }}
            >
              Recommended
            </span>
            <h4>Regular</h4>
            <h1>₹10000</h1>
            <span
              style={{
                padding: "5px 20px",
                color: "red",
                backgroundColor: "rgba(255,0,0, 0.2)",
                borderRadius: "15px",
                marginTop: "55px",
              }}
            >
              Enjoy Perks
            </span>
            <span
              style={{
                padding: "5px 20px",
                color: "green",
                backgroundColor: "rgba(0,255,0, 0.2)",
                borderRadius: "15px",
                marginTop: "5px",
              }}
            >
              Win Goodies
            </span>
            <ul>
              <li>This is one of the Perks single</li>
              <li>This is one of the Perks</li>
              <li>This is one of the Perks triple</li>
              <li>This is one of the Perks normal</li>
              <li>This is one of the Perks</li>
              <li>This is one of the Perks</li>
              <li>This is one of the Perks normal</li>
            </ul>
          </div>
          <div className="payCard_small">
            <h4>Extra Large</h4>
            <h1>₹15000</h1>
            <span
              style={{
                padding: "5px 20px",
                color: "red",
                backgroundColor: "rgba(255,0,0, 0.2)",
                borderRadius: "15px",
                marginTop: "55px",
              }}
            >
              Enjoy Perks
            </span>
            <span
              style={{
                padding: "5px 20px",
                color: "green",
                backgroundColor: "rgba(0,255,0, 0.2)",
                borderRadius: "15px",
                marginTop: "5px",
              }}
            >
              Win Goodies
            </span>
            <ul>
              <li>This is one of the Perks single</li>
              <li>This is one of the Perks</li>
              <li>This is one of the Perks triple</li>
              <li>This is one of the Perks normal</li>
              <li>This is one of the Perks</li>
            </ul>
          </div>
        </div>
      </div>
      <News />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
