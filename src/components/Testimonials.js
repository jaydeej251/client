import React, { useEffect, useRef, useState } from 'react';
import { Container, Typography } from '@mui/material';
import '../styles/Testimonials.css';
import star from '../assets/rating-5star.png';

const testimonialsData = [
  {
    starLogo: star,
    name: "John Doe",
    subject: "Great Experience",
    message:
      "Exceptional service! PrimeView delivered top-notch results, boosting our website's performance and ranking. Their team's expertise and commitment to excellence make them the go-to choice for SEO and digital marketing.",
  },
  {
    starLogo: star,
    name: "Jane Smith",
    subject: "Outstanding Service",
    message:
      "I can't express how satisfied we are with PrimeView. They transformed our online presence. The expert SEO strategies they used brought our site to the top in search results, boosting our traffic and conversions. Their team's dedication and understanding of our business set them apart.",
  },
  {
    starLogo: star,
    name: "Mike Johnson",
    subject: "Highly Recommend",
    message:
      "Outstanding service! PrimeView's team exceeded my expectations. Our website's traffic and ranking improved significantly. Highly recommend their SEO services.",
  },
];

function Testimonials() {
  const containerRef = useRef(null);
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const rect = containerRef.current.getBoundingClientRect();
      setInViewport(rect.left < window.innerWidth && rect.right > 0);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`testimonials-highlight ${inViewport ? 'in-viewport' : ''}`}>
      <Container ref={containerRef} className="testimonials-container">
        <div className="title">
          <h3>customer testimonials</h3>
        </div>
        <div className="testimonials-content">
          {testimonialsData.map((testimonial, index) => (
            <div className={`testimonial ${inViewport ? 'in-viewport' : ''}`} key={index}>
              <img
                src={testimonial.starLogo}
                alt="Star Reviews"
                className="star-image"
              />
              <div className="name">{testimonial.name}</div>
              <div className="subject">{testimonial.subject}</div>
              <div className="message">{testimonial.message}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Testimonials;
