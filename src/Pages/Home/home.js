import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Ourteam from '../../Components/Ourteam/Ourteam';
import About from '../../Components/About/about';
import Features from '../../Components/Features/features';
import News from '../../Components/News/News';
import map from '../../static/icons/map.svg';
import arrow from '../../static/icons/arrow.svg';
import { RiWallet2Fill } from 'react-icons/ri'
import './home.css';

const home = () => {
  return (
    <React.Fragment>
      <div className="Header">
        <Navbar />

        <div className="header__getStarted">
          <img src={map} className="header__svg" alt="" />
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
      <div className="getstarted" id="solution">
        <h1 className="getstarted__heading">Get Started With Bitcoin</h1>
        <p>
          Start learning about Bitcoin with interactive tutorials. It's fun,
          easy and takes only a few minutes!
        </p>
        <div className="getstarted__cards">
          <div className="getstarted__arrow_card">
            <img src={arrow} className="getstarted__arrow" alt=""/>
            <div className="getstarted__cards__card">
              {/* <div>image</div> */}
              <RiWallet2Fill size="3em" color="#4f48cf"/>
              <h1>Create Your Wallet</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </div>
          </div>
          <div className="getstarted__arrow_card">
            <img src={arrow} className="getstarted__arrow_2" alt=""/>
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
              <RiWallet2Fill size="3em" color="#55c684"/>
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
          <p  style={{fontSize: '1em'}}>
            Sign up for weekly industry updates, insider perspectives and
            in-depth market analysis.
          </p>
        </div>
        <div className="newsLetter__input">
          <input type="email" placeholder="Enter your Email" />
          <button>Get Started</button>
        </div>
      </div>
      <News />
      <Footer />
    </React.Fragment>
  );
};

export default home;
