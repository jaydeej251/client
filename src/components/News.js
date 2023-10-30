import React from 'react';
import { Container, Typography } from '@mui/material';
import '../styles/News.css';
import icon from '../assets/icon-document.png';
const newsData = [
  'Zoho CRM vs. ERP: Do you need Both?',
  'GA4: The Most Straightforward Guide You will Ever Read',
  'The FAQ-tastic Benefits of FAQ PAGES for Your Business',
  "Don't Miss out on the Busines-Booming Benefits of Customer Journey Mapping",
  'Let\'s Get Personal: Ways to tailor and Improve CX Using Zoho',
  "The Truth About Your Competitor's High-Performing Websites",
];

const News = () => {
  return (
    <div className="news-container">
      <div className="news-background">
        <h1>Recent Topics</h1>
      </div>
      <ul className="news-list">
        {newsData.map((topic, index) => (
          <li key={index}>
            <img src= {icon} alt="Document Icon" className="document-icon" />
            <a href={`#${topic}`}>{topic}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
