import React from "react";
import "./News.css";
import { FaRegComments, FaRegHeart } from "react-icons/fa";

const News = () => {
  return (
    <div className="news">
      <h1 className="news__heading">Latest News</h1>
      <p>Bitcoin is the simplest way to exchange money at very low cost.</p>
      <div className="news__cards">
        <div className="news__cards__card">
          <div className="news__card__image">
            <img src="https://via.placeholder.com/400" alt="" />
          </div>
          <div className="news__card__content">
            <span>03 JAN 2018</span>
            <p>Coinbas eto Reopen the GDAX Bitcoin Cash-Euro Order Book</p>
            <div className="news__card__footer">
              <span>Admin</span>
              <span>
                <FaRegHeart /> 234 Likes
              </span>
              <span>
                <FaRegComments /> 08 Comments
              </span>
            </div>
          </div>
        </div>
        <div className="news__cards__card">
          <div className="news__card__image">
            <img src="https://via.placeholder.com/400" alt="" />
          </div>
          <div className="news__card__content">
            <span>03 JAN 2018</span>
            <p>Coinbas eto Reopen the GDAX Bitcoin Cash-Euro Order Book</p>
            <div className="news__card__footer">
              <span>Admin</span>
              <span>
                <FaRegHeart /> 234 Likes
              </span>
              <span>
                <FaRegComments /> 08 Comments
              </span>
            </div>
          </div>
        </div>
        <div className="news__cards__card">
          <div className="news__card__image">
            <img src="https://via.placeholder.com/400" alt="" />
          </div>
          <div className="news__card__content">
            <span>03 JAN 2018</span>
            <p>Coinbas eto Reopen the GDAX Bitcoin Cash-Euro Order Book</p>
            <div className="news__card__footer">
              <span>Admin</span>
              <span>
                <FaRegHeart /> 234 Likes
              </span>
              <span>
                <FaRegComments /> 08 Comments
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
