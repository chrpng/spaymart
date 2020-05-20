import React from 'react';
import './News.scss';

const NewsItem = ({ news }) => {
  return (
    <div className="news-item">
      <div className="news-text">
        <h3>{news.title}</h3>
        <p className="news-date">{news.date}</p>
        <p>{news.body}</p>
      </div>
      <img src={`./images/${news.imgSrc}`} alt="example"/>
    </div>
  );
}
 
export default NewsItem;