import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        if (!apiKey) {
          throw new Error('API Key is missing');
        }

        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`);
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`HTTP error! Status: ${response.status} - ${errorText}`);
        }
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        setError('Error fetching news');
        console.error('Error fetching news:', error);
      }
    };

    fetchArticles();
  }, [category]);

  return (
    <div style={{ padding: '20px', backgroundColor: '#ffffff', color: '#000000', fontFamily: 'Verdana, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '24px', color: '#ffcc00', textTransform: 'uppercase', letterSpacing: '2px' }}>
        Latest News
      </h2>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {articles.length > 0 ? (
          articles.map((news, index) => (
            <li key={index} style={{ marginBottom: '20px', padding: '10px', borderBottom: '1px solid #ccc' }}>
              <NewsItem
                title={news.title}
                description={news.description}
                url={news.url}
              />
            </li>
          ))
        ) : (
          <p style={{ textAlign: 'center' }}>No news available</p>
        )}
      </ul>
    </div>
  );
}

export default NewsBoard;
