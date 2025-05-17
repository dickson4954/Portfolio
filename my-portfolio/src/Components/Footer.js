import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si'; // TikTok icon from react-icons

import user_icon from '../../src/images/user.jpg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <h1>Dickson<span style={{ color: '#ff0080' }}>M</span></h1>
          <p>
            I am a Full Stack Developer and a Digital Marketer from Nairobi, Kenya, with five years of experience in building dynamic and scalable web applications. Passionate about crafting efficient solutions, I specialize in both front-end and back-end development to create seamless digital experiences.
          </p>
          <div className="footer-social-links">
            <a href="https://github.com/dickson4954?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/dickson-murithi-34bb10311" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="mailto:dicksonmurithi155@gmail.com" aria-label="Email">
              <FaEnvelope className="social-icon" />
            </a>
            <a href="https://www.instagram.com/nkathawa_jr?igsh=MTNxZGc5NnNiMTNrcg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="social-icon" />
            </a>
           
            <a href="https://www.tiktok.com/@_its_chief?_t=ZM-8wQVrKUetpX&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <SiTiktok className="social-icon" />
            </a>
            <a href="https://x.com/nkathawa_jr?t=9I5-xkGwijjS9Qt6jbuvvw&s=09" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="social-icon" />
            </a>
          </div>
        </div>
        <div className='footer-email-container'>
          <div className='footer-email-input'>
            <img src={user_icon} alt='User Icon' />
            <input type='email' placeholder='Enter your email' />
          </div>
          <button className='footer-subscribe'>Subscribe</button>
        </div>
      </div>
      <div className='footer-bottom'>
        <p className='footer-bottom-left'>© 2025 Dickson Murithi. All rights reserved.</p>
        <div className='footer-bottom-right'>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="#contact">Connect with me</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
