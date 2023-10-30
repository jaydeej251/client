import React from 'react';
import { Container, Typography } from '@mui/material';
import '../styles/Hero.css';
import BY from '../assets/26.PNG';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2-shopify.png';
import img3 from '../assets/img3-amazon.png';
import img4 from '../assets/img4-wordpress.png';
import img5 from '../assets/img5-zohocrm.png';
import img6 from '../assets/img6-magento.png';


function Hero() {
    return (
      <Container className="hero-container">
        <div className="headline">
          <h1>PRIMEVIEW Arizona’s Leading Web Design Firm</h1>
        </div>
        <div className="hero-image">
          <img src={BY} alt="Hero Image" />
        </div>
        <div className="hero-content">
          <Typography variant="h6">
            26 years in the business, with numerous web design awards, PrimeView
            has empowered brands both in and out of Arizona to make their mark
            on the web – a lasting one at that.
          </Typography>
        </div>
        <div className="clients">
          <img src={img1} alt="Client 1" />
          <img src={img2} alt="Client 2" />
          <img src={img3} alt="Client 3" />
          <img src={img4} alt="Client 4" />
          <img src={img5} alt="Client 5" />
          <img src={img6} alt="Client 6" />
        </div>
      </Container>
    );
}

export default Hero
