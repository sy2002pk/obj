
import React from "react";
import {MehTwoTone} from '@ant-design/icons'
import image10 from "../../assets/images/10.png";
import image11 from "../../assets/images/11.png";
import image12 from "../../assets/images/12.png";
import logo from "../../assets/images/Frame.png"
import user from "../../assets/images/User.png"
import iconlogo from "../../assets/images/iconlogo.png"

import "./Charityfund.css"; // Import file CSS

function CharityfundPage() {
  return (
    <div className="charity-container">
      <div className="relative z-20 w-full">
        {/* <Navbar /> */}
      </div>

      <section className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Together can make a difference</h1>
          <p className="hero-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Congue vel
            pulvinar praesent tempus sit feugiat felis, eget.
          </p>
          <button className="donate-button">Donate Now</button>
        </div>
      </section>

      <section className="feature-section">
        <h2 className="section-title">FEATURED COURSES</h2>
        <p className="section-subtitle">Sub heading</p>
        <div className="image-grid">
          <img src={image10} alt="pray" className="featured-image" />
          <img src={image11} alt="pray" className="featured-image" />
          <img src={image12} alt="pray" className="featured-image" />
          <img src={image12} alt="pray" className="featured-image" />
        </div>
        <div className="button-container">
          <button className="donate-button">Donate Now</button>
        </div>
      </section>

      <section className="help-section">
        <h2 className="section-title">HOW CAN YOU HELP?</h2>
        <p className="section-subtitle">Sub heading</p>
        <div className="help-grid">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index} className="help-card">
              <img src={iconlogo} alt="icon_help" className="help-icon" />
              <div className="help-text">
                <h3 className="help-heading">Heading</h3>
                <p className="help-description">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="button-container">
          <button className="donate-button">Donate Now</button>
        </div>
      </section>

      <section className="testimonials-section">
        <h2 className="section-title">TESTIMONIALS</h2>
        <p className="section-subtitle">Sub heading</p>
        <div className="testimonial-grid">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className={`testimonial-card ${index % 2 === 0 ? "bg-dark" : "bg-light"}`}>
              <img src={logo} alt="comma" className="comma-icon" />
              <p className="testimonial-text">
                When our designs need an expert opinion or approval, I know I can rely on your agency. Thank you for all your help!
              </p>
              <div className="testimonial-info">
                <img src={user} alt="" className="avatar"/>
                <p className="testimonial-name">Name</p>
                <p className="testimonial-role">Designation</p>
              </div>
            </div>
          ))}
        </div>
        <div className="button-container">
          <button className="donate-button">Donate Now</button>
        </div>
      </section>

      <section className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Together can make a difference</h1>
          <p className="hero-text">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
          </p>
          <button className="donate-button">Donate Now</button>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}

export default CharityfundPage;
