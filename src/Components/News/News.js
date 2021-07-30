import React from 'react';
import './News.css';
import { FaRegComments, FaRegHeart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';

const News = () => {

  const { news } = useSelector(state => state.News)

  return (
    <div className="news" id="news">
      <h1 className="news__heading">Latest News</h1>
      <p>Bitcoin is the simplest way to exchange money at very low cost.</p>
      <div className="news__cards">
        { news && news?.slice(0,3)?.map((ne) => (
          <div className="news__cards__card">
          <div className="news__card__image">
            <img width="400px" height="400px" style={{objectFit: 'cover'}} src={ne.image} alt="" />
          </div>
          <div className="news__card__content">
            <span><Moment format="YYYY/MM/DD HH:MM">{Date( parseInt( ne._id.toString().substring(0,8), 16 ) * 1000 )}</Moment></span>
            <p>{ne.title}</p>
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
          )) }
      </div>
    </div>
  );
};

export default News;
