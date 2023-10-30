import React from 'react'
import '../styles/Home.css';

import Services from '../components/Services'
import News from '../components/News';
import Footer from '../components/Footer';
import SEO from '../components/SeoHome';
import Details from '../components/Details';
import SeoContact from '../components/SeoContact';



function SeoPage() {
  return (
    <div>
      <SEO />
      <SeoContact />
      <Services />
      <News />
      <Details />
      <Footer />
    </div>
  );
}

export default SeoPage
