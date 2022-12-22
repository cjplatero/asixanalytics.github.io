import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>DATA-DRIVEN</h1>
      <p>for better business</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey man')}
        >
          WATCH TRAILER <FontAwesomeIcon icon={faPlayCircle} /><i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;