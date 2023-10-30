import React from 'react'
import { Container, Typography, Button } from '@mui/material'
import '../styles/About.css'
import background from '../assets/Servicesbg.jpg'

function About() {
  return (
    <div className="about-container">
      <div className="about-top">
        <div className="about-image">
          <img src={background} alt="Image" />
        </div>
      </div>
      <div className="about-bottom">
        <div className="about-content">
          <Typography variant="h4">
            We look forward to learning more about your business.
          </Typography>
          <Typography variant="body1">
            PrimeView is Phoenix, Arizona’s Leading Digital Marketing and Web
            Design Firm with complete lead-generating Internet Solutions. Our
            team is equipped with the latest tools and technology to create
            award-winning websites and provide exemplary e-solutions that enable
            businesses to achieve their individual goals. Our custom websites
            are designed with the following primary objectives:
          </Typography>
          <ul>
            <li>State-of-the-Art Responsive Design</li>
            <li>Client-Centric Design</li>
            <li>Search Engine Friendly Design</li>
            <li>Zero Downtime Design</li>
          </ul>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}
export default About;
