import React from "react";
import "./Footer.css";
import { MdEmail } from "react-icons/md";
import logo from "../../static/icons/LOGO.png";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="footer__logo">
        <img alt="" className="logo" src={logo} height="70px" width="70px" />
        <p>
          MoneyCastle is a young and growing digital currency portfolio
          management company. We provide digital currency management services,
          market insights, investment exposure, and investment products to the
          developing digital currency asset class.
        </p>
      </div>
      <div className="footer__resources">
        <p>Centralised Exchanges</p>
        <div className="footer__resources__list">
          <a
            href="https://www.binance.com/en"
            target="__blank"
            rel="noreferrer"
          >
            Binance
          </a>
          <a
            href="https://www.huobi.com/en-us/"
            target="__blank"
            rel="noreferrer"
          >
            Huobi Global
          </a>
          <a
            href="https://www.coinbase.com/exchange"
            target="__blank"
            rel="noreferrer"
          >
            {" "}
            Coinbase Exchange
          </a>
          <a href="https://www.bitfex.com/#/" target="__blank" rel="noreferrer">
            Fex
          </a>
          <a href="https://www.kucoin.com/" target="__blank" rel="noreferrer">
            KuCoin
          </a>
        </div>
      </div>
      <div className="footer__quickLinks">
        <p>Decentralised Exchanges</p>
        <div className="footer__quickLinks__list">
          <a href="https://uniswap.org/" target="__blank" rel="noreferrer">
            Uniswap
          </a>
          <a
            href="https://pancakeswap.finance/swap"
            target="__blank"
            rel="noreferrer"
          >
            Pancake Swap
          </a>
          <a href="https://sushi.com/" target="__blank" rel="noreferrer">
            Sushi Swap
          </a>
          <a href="https://1inch.io/" target="__blank" rel="noreferrer">
            1 Inch
          </a>
          <a href="https://terraswap.io/" target="__blank" rel="noreferrer">
            Teraswap
          </a>
        </div>
      </div>
      <div className="footer__followUs">
        <p>Contact us</p>
        <div className="footer__followUs__icons">
          <a href="mailto:moneycastle1301@gmail.com">
            <MdEmail className="facebookIcon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
