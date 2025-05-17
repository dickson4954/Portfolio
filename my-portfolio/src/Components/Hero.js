import React from 'react';
import './Hero.css';
import profile_img from '../../src/images/graduation.jpg';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt='Profile' className='profile-img' />
      <h1>
        <span>I'm Dickson Murithi,</span> Full Stack Developer & Digital Marketer based in Kenya.
      </h1>
      <p>
        I am a Full Stack Developer from Nairobi, Kenya, with five years of experience in building dynamic and scalable web applications.
        Passionate about crafting efficient solutions, I specialize in both front-end and back-end development to create seamless digital experiences.
      </p>
      <div className='hero-action'>
        <div className='hero-connect'>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink>
        </div>
        {/* Resume Download Button */}
        <div className='hero-resume'>
       <a href={`${process.env.PUBLIC_URL}/Resume.pdf`} download="Dickson_Murithi_Resume.pdf" className="hero-resume-button">
  Download Resume
</a>


          
        </div>
      </div>
    </div>
  );
};

export default Hero;