import React, {useState} from 'react'
import Logo from '../assets/primeViewLogo.png'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false)
    const toggleNavBar = () => {
        setOpenLinks(!openLinks)
    }
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/">ABOUT</Link>
          <Link to="/menu">OUR WORKS</Link>
          <Link to="/about">DIGITAL SERVICES</Link>
          <Link to="/contact">CONTACT US</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">ABOUT</Link>
        <Link to="/menu">OUR WORKS</Link>
        <Link to="/about">DIGITAL SERVICES</Link>
        <Link to="/contact">CONTACT US</Link>
        <button onClick={toggleNavBar}>
          <MenuIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar
