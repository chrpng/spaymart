import React, { useState } from 'react';
import NewsItem from './NewsItem';
import './News.scss';
import { newsJson } from './newsdata.json';

const News = () => {
  const [newsList, ] = useState(newsJson);
  
  return ( 
    <aside className="news">
      <h2>News and Announcements</h2>
      {newsList.map((news) => 
        <NewsItem news={news} key={news.title}/>
      )}
    </aside>
  );
}
 
export default News;