import React from 'react';
import "../App.css"
const NewsItem = ({ title, description, url }) => {
  return (
    <div>
      <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>
        <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#0066cc' }}>
          {title || "No Title Available"}
        </a>
      </h3>
      {description && (
        <p style={{ margin: '5px 0', color: '#666666', lineHeight: '1.4' }}>{description}</p>
      )}
    </div>
  );
}

export default NewsItem;
