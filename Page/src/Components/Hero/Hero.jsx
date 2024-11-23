import React from 'react';
import arrow_btn from '../../assets/arrow_btn.png';
import play_icon from '../../assets/play_icon.png';
import pause_icon from '../../assets/pause_icon.png';
import './Hero.css';

function Hero({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) {
  return (
    <div className='hero'>
      <div className="hero-txt">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className='explore'>
        <p>Explore the features</p>
        <img src={arrow_btn} alt="Arrow icon pointing to the features" />
      </div>
      <div className="hero-dot-plays">
        <ul className="hero-dots">
          <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}></li>
          <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}></li>
        </ul>
      </div>
      <div className="hero-play">
        <img onClick={() => setPlayStatus(!playStatus)} src={playStatus ? pause_icon : play_icon} alt={playStatus ? "Pause video" : "Play video"} />
        <p>See the video</p>
      </div>
    </div>
  );
}

export default Hero;
