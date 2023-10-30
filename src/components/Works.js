import React, {useEffect} from 'react';
import { Container, Typography } from '@mui/material';
import '../styles/Works.css';
import logo1 from '../assets/logo-advancedImg.PNG';
import logo2 from '../assets/logo-andres.PNG';
import  logo3 from '../assets/logo-biltmore.PNG';
import logo4 from '../assets/logo-crexendo.PNG';
import logo5 from '../assets/logo-FRLaw.PNG';
import logo6 from '../assets/logo-Relux.png';
import logo7 from '../assets/logo-Kyrene.PNG';
import logo8 from '../assets/logo-newHope.png';
import work8 from '../assets/work-newhope.PNG';
import work7 from '../assets/work-kyrene.png';
import work6 from '../assets/work-therelux.PNG';
import work5 from '../assets/work-frlaw.PNG';
import work4 from '../assets/work-crexendo.PNG';
import work3 from '../assets/work-biltmore.PNG';
import work2 from '../assets/work-andres.PNG';
import work1 from '../assets/work-advanced.PNG';

const worksData = [
  {
    title: "New Hope Unlimited",
    description: "New Hope, a medical website for cancer treatment, features patient-centered website design. View PrimeView's design work!",
    workImage: work8,
    logoImage: logo8,
  },
  {
    title: "Andres Perez Jurado",
    description: "Venezuelan Naif artist Andres Perez Jurado offers art on an eCommerce site created by the web design artists at PrimeView",
    workImage: work2,
    logoImage: logo2,
  },
  {
    title: "Biltmore Loan & Jewelry",
    description: "Your financial services website is secure with us See our work for Arizona's trusted lender Biltmore Loan & Jewelry",
    workImage: work3,
    logoImage: logo3,
  },
  {
    title: "Kyrene Family Dentistry",
    description: "Kyrene Family Dentistry wanted more revenue. New website architecture and a user-friendly design delivered more patients.",
    workImage: work7,
    logoImage: logo7,
  },
  {
    title: "FR Law",
    description: "Work with lawyers you can trust and a legal industry web design firm you can count on for a winning website!",
    workImage: work5,
    logoImage: logo5,
  },
  {
    title: "Advanced Image Medical Spa",
    description: "A web design for Arizona's fitness and beauty industry has to look good, and Advanced Image Med Spa looks marvelous!",
    workImage: work1,
    logoImage: logo1,
  },
  {
    title: "The Relux",
    description: "We're known for our eCommerce web design. THE RELUX is a luxurious work by the talented PrimeView team. Now see our work!",
    workImage: work6,
    logoImage: logo6,
  },
  {
    title: "Crexendo",
    description: "For service industry web design in Arizona, view our work for Crexendo, a top provider of cloud-based VoIP Solutions.",
    workImage: work4,
    logoImage: logo4,
  },
]
function Works() {
  useEffect(() => {
    const slideInElements = document.querySelectorAll('.slide-in');

    const handleScroll = () => {
      slideInElements.forEach((element) => {
        const slideInAt = window.scrollY + window.innerHeight - element.clientHeight / 2;
        const elementBottom = element.offsetTop + element.clientHeight;
        const isHalfShown = slideInAt > element.offsetTop;
        const isNotScrolledPast = window.scrollY < elementBottom;

        if (isHalfShown && isNotScrolledPast) {
          element.classList.add('active');
        } else {
          element.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="works-container">
      <div className="work-top">
        <Typography variant="h3">Our Work</Typography>
      </div>
      <div className="work-bottom">
        {worksData.map((work, index) => (
          <div className="brand slide-in" key={index}>
            <img src={work.logoImage} alt="Brand Logo" className="brand-logo" />
            <div className="work-bg">
              <img src={work.workImage} alt="Work Image" />
            </div>
            <div className="body">
              <Typography variant="h5" className="body-title">
                {work.title}
              </Typography>
              <Typography variant="body1" className="body-desc">
                {work.description}
              </Typography>
            </div>
          </div>
        ))}
      </div>
      <button className="portfolio-button">View Portfolio</button>
    </div>
  );
}

export default Works;


