import React from 'react';
import "./about.css"
import Me from "../../img/iphone.png"

const About = () => {
  return <div className='a'>
      {/* left divison */}
      <div className="a-left">

          {/* create a card, this will be our background card*/}
          <div className="a-card bg"></div>

          {/* create another card */}
          <div className="a-card">
              <img src={Me} alt="" className="a-img" />

          </div>
      </div>



      {/* right division */}
      <div className="a-right">
      <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>



        
      </div>
  </div>;
};

export default About
