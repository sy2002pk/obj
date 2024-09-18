import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h1 className="logo">Pray</h1>
        <p className="tagline">Pray for better life</p>
      </div>
      {/* <div className='gach'></div> */}
      <div className="footer-center">
          <ul className="footer-nav">
            <li><a href="#about">About</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#career">Career</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        <p>Established in 2024</p>
      </div>
      <div className="footer-right">
        <p>Follow Us</p>
        <p>Contact Us: <a href="mailto:ngonhatzpro@gmail.com">ngonhatzpro@gmail.com</a></p>
      </div>
    </footer>
  );
}

export default Footer;
