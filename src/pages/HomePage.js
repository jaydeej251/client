
import '../styles/Home.css';
import Home from '../components/Home';
import Hero from '../components/Hero';
import Works from '../components/Works';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import About from '../components/About';
import Services from '../components/Services'
import News from '../components/News';
import Details from '../components/Details';
import Footer from '../components/Footer';

const HomePage = () => {

  return (
    <div>
      <Home />
      <About />
      <Hero />
      <Works />
      <Testimonials />
      <Contact />
      <Services />
      <News />
      <Details />
      <Footer />
    </div>
  );
};

export default HomePage;
