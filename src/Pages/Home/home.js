import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Ourteam from "../../Components/Ourteam/Ourteam";
import About from "../../Components/About/about";
import Features from "../../Components/Features/features";
import News from "../../Components/News/News";
import map from "../../static/icons/map.svg";
import arrow from "../../static/icons/arrow.svg";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoLogoBitcoin } from "react-icons/io";
import { GiDivergence } from "react-icons/gi";
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
            <h1 style={{ maxWidth: "600px" }}>
              India's first <span>Crypto Portfolio Management Services</span>
            </h1>
            <p>Invest confidentially in Digital Currency</p>

            <input type="email" placeholder="Enter your email" />
            <button onClick={() => setLoginModal(true)}>Get Started</button>
          </div>
        </div>
      </div>
      <About setLoginModal={setLoginModal} />
      <Features />
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
            <h4>Bronze Pack</h4>
            <h1>₹999</h1>
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
              <li>Trading view Indicator</li>
              <li>Portfolio traded</li>
              <li>Malled analysis tool</li>
              <li>Mummy 2-3 B/S</li>
              <li>Indicators</li>
              <li>Daily News</li>
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
            <h4>Silver Plan</h4>
            <h1>₹1499</h1>
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
              <li>Trading view Indicator</li>
              <li>Portfolio traded</li>
              <li>Malled analysis tool</li>
              <li>Mummy 2-3 B/S</li>
              <li>Indicators</li>
              <li>5-7 Premium Calls</li>
              <li>2 SIP Calls</li>
              <li>IPO Participation</li>
              <li>Daily News</li>
            </ul>
          </div>
          <div className="payCard_small">
            <h4>Gold Plan</h4>
            <h1>₹1999</h1>
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
              <li>Trading view Indicator</li>
              <li>Portfolio traded</li>
              <li>Malled analysis tool</li>
              <li>Mummy 2-3 B/S</li>
              <li>Indicators</li>
              <li>5-7 Premium Calls</li>
              <li>2 SIP Calls</li>
              <li>IPO Participation</li>
              <li>Dedicated portfolio Manager</li>
              <li>Private sale</li>
              <li>Daily News</li>
            </ul>
          </div>
        </div>
        <a href="/plans" className="special">
          Choose Plan
        </a>
      </div>
      {/* Get started homepage */}
      <div className="getstarted" id="solution">
        <h1 className="getstarted__heading">Why investors Choose us</h1>
        <p>
          MoneyCastle is behind a family of products that provides investors
          with access to the digital currency asset class
        </p>
        <div className="getstarted__cards">
          <div className="getstarted__arrow_card">
            <img src={arrow} className="getstarted__arrow" alt="" />
            <div className="getstarted__cards__card">
              {/* <div>image</div> */}
              <IoLogoBitcoin size="3em" color="#4f48cf" />
              <h1>Trusted & Secure</h1>
              <p>
                Because Grayscale manages the token themselves, investors can
                gain exposure to digital currency investing without the
                challenges of buying, storing, and safekeeping digital
                currencies directly.
              </p>
            </div>
          </div>
          <div className="getstarted__arrow_card">
            <img src={arrow} className="getstarted__arrow" alt="" />
            <div className="getstarted__cards__card">
              {/* <div>image</div> */}
              <RiSecurePaymentLine size="3em" color="#5170b7" />
              <h1>Familiar & Compliant Product Structures</h1>
              <p>
                Moneycastle has built transparent, familiar, and compliant
                investment products that operate within existing regulatory
                frameworks including launching the first digital currency
                investment vehicle
              </p>
            </div>
          </div>
          <div className="getstarted__cards__card">
            <div>
              {/* <img src="https://via.placeholder.com/50" alt="" /> */}
            </div>
            <GiDivergence size="3em" color="#55c684" />
            <h1>Diversified Exposure</h1>
            <p>
              In much the same way they would access other investment products,
              investors can add digital currencies to their brokerage accounts
              via Grayscale’s single-asset and diversified products.
            </p>
          </div>
        </div>
      </div>
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
      {/* <Ourteam /> */}
      <News />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
