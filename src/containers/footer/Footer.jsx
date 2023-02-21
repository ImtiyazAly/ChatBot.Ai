import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/9732/9732800.png"
          alt="chatbot.ai_logo"
        />
        <p>Cross Street, Tamil Nadu, India, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Twitter</p>
        <p>Medium</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Cross Street, Tamil Nadu, India</p>
        <p>+91-99552232XX</p>
        <p>chatbot.ai@info.co</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 ChatBot AI. </p>
    </div>
  </div>
);

export default Footer;
