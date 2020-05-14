import React from 'react';
import hero from './../../images/hero.png';
import './Hero.scss'

const Hero = () => {
  return (
    <section className="splash">
        <div className="hero-img">
          <img src={hero} alt="hero"/>
        </div>
        <div className="splash-description">
          <h1>Welcome to SpayMart</h1>
          <p>Our Mission:</p>
          <p>To end needless killing of cats and dogs in our community.</p>
        </div>
    </section>
  );
}
 
export default Hero;