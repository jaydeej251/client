import React from 'react';
import { Container, Typography } from '@mui/material';
import '../styles/Details.css';
import pinIcon from '../assets/pin-icon.png';
import telephoneIcon from '../assets/telephone-icon.png';
import emailIcon from '../assets/email-icon.png';
import timeIcon from '../assets/time-icon.png';

const Details = () => {
  return (
    <div className="details-container">
      <div className="details-background">
        <h1>PrimeView</h1>
      </div>
      <ul className="details-list">
        <li>
          <a href="#">
            <img src={pinIcon} alt="Address" className="icon" />
            1717 N. 77th St. Suite 4 Scottsdale, AZ 85257
          </a>
        </li>
        <li>
          <a href="#">
            <img src={pinIcon} alt="Address" className="icon" />
            615 Piikoi St, Suite 1503 Honolulu, Hawaii 96814
          </a>
        </li>
        <li>
          <a href="tel:480-800-4688">
            <img src={telephoneIcon} alt="Telephone" className="icon" />
            480-800-4688
          </a>
        </li>
        <li>
          <a href="mailto:support@primeview.com">
            <img src={emailIcon} alt="Email" className="icon" />
            support@primeview.com
          </a>
        </li>
        <li>
          <a href="#">
            <img src={timeIcon} alt="Time" className="icon" />
            Mon - Fri 8:00 AM to 5:00 PM Arizona Time
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Details;
