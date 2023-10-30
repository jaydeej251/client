import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import CallIcon from '@mui/icons-material/Call';
import badge from '../assets/badge.png'

const Home = () => {
  const slides = [
    {
      title: 'Web Design & E-Commerce',
      content: 'PrimeView works with each of its clients to brainstorm, develop, and create an individualized website design catered to specific client goals. After a complete analysis of the client’s business, our experienced design team works to produce an effective website design that will stand out from the rest.',
    },
    {
      title: 'Digital Marketing',
      content: 'Leverage the Internet’s power to your advantage. Establish an impactful digital presence designed to convert viewers into customers and discover your market potential with powerful paid digital campaigns, social media management, and other innovative online solutions. Attract, impress, and convert more leads for your business today.',
    },
    {
      title: 'CRM Integration / Marketing & Sales Automation',
      content: 'What is the essential element of any business? Well, the answer should be obvious, the customer, of course, someone who buys your products or services. The other important element of your business is your relationship with your customers and managing those relationships.',
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

 useEffect(() => {
  const interval = setInterval(() => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  }, 6000);

  return () => clearInterval(interval);
});


  return (
    <div className="homepage">
      <div className="background-image"></div>
      <div className="badge">
        <img src={badge}></img>
      </div>
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <h1>{slide.title}</h1>
            <p>{slide.content}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button className="phone-button">
          <CallIcon />
          <p> 480-800-4484</p>
        </button>
        <button className="portfolio-button1"> View Our Portfolio</button>
      </div>
    </div>
  );
};

export default Home;
