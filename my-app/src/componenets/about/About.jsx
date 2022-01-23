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
      <h1 className="a-title">About Us</h1>
        <p className="a-sub">
        <span class="bolded">We are four women from four different departments @ University of Washington.</span>
        </p>
        <p className="a-desc">
            What brings us together, well, other than being sorority sisters, 
            is our love for a good, clean, universal, and always-stocked-with-feminime-product bathroom. 
            The problem is, not every building on campus has great bathrooms like the Bill and Melinda Gates Center. 
            So here we are, making your restroom experience at UW be <span class="bolded">boundless</span>!
        </p>



        
      </div>
  </div>;
};

export default About
