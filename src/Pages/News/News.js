import React from 'react';
import './News.css';
import { FaRegComments, FaRegHeart } from 'react-icons/fa';

const News = () => {
  return (
    <div className="news" id="news">
      <h1 className="news__heading">Latest News</h1>
      <p>Bitcoin is the simplest way to exchange money at very low cost.</p>
      <div className="news__cards">
        <div className="news__cards__card">
          <div className="news__card__image">
            <img src="https://images.unsplash.com/photo-1605792657660-596af9009e82?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Yml0Y29pbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="" />
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
            <img src="https://images.unsplash.com/photo-1580519542036-c47de6196ba5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bW9uZXl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="" />
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
            <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt="" />
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
