import React from 'react';
import { Container, Typography } from '@mui/material';
import '../styles/Footer.css';
import copyrightIcon from '../assets/copyright-icon.png';
import yelpIcon from '../assets/yelp-icon.png';
import facebookIcon from '../assets/facebook-icon.png';
import twitterIcon from '../assets/twitter-icon.png';
import googlePlusIcon from '../assets/google-plus-icon.png';
import instagramIcon from '../assets/instagram-icon.png';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="line"></div>
      <div className="footer-top">
        <Typography variant="body2">
          <img src={copyrightIcon} alt="Copyright" className="copyright-icon" />
          2023 PrimeView. All Rights Reserved.
          <a href="#">Privacy Policy</a>
        </Typography>
        <Typography variant="body2">
          1717 N 77th St #4 Scottsdale, AZ 85257 | 480-800-4688
        </Typography>
      </div>
      <div className="footer-bottom">
        <div className="footer-icons">
          <a href="#">
            <img src={yelpIcon} alt="Yelp" className="social-icon" />
          </a>
          <a href="#">
            <img src={facebookIcon} alt="Facebook" className="social-icon" />
          </a>
          <a href="#">
            <img src={twitterIcon} alt="Twitter" className="social-icon" />
          </a>
          <a href="#">
            <img src={googlePlusIcon} alt="Google+" className="social-icon" />
          </a>
          <a href="#">
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
        </div>
        <div className="footer-notes">
          <a href="#">Help</a> | <a href="#">Terms</a> |{" "}
          <a href="#">Company Info</a> | <a href="#">User Data Privacy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
