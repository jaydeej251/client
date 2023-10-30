import React from 'react';
import { Container, Typography } from '@mui/material';
import '../styles/Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-background">
        <h1>Services</h1>
      </div>
      <ul className="services-list">
        <li>
          <a href="#web-design">Web Design</a>
        </li>
        <li>
          <a href="#website-development">Website Development</a>
        </li>
        <li>
          <a href="#digital-marketing">Digital Marketing</a>
        </li>
        <li>
          <a href="#ecommerce-support">Ecommerce Support</a>
        </li>
        <li>
          <a href="/seo">SEO</a>
        </li>
        <li>
          <a href="#pay-per-click">Pay Per Click</a>
        </li>
        <li>
          <a href="#social-media-marketing">Social Media Marketing</a>
        </li>
        <li>
          <a href="#crm-solutions">CRM Solutions</a>
        </li>
        <li>
          <a href="#primeview-university">PrimeView University</a>
        </li>
      </ul>
    </div>
  );
};

export default Services;
