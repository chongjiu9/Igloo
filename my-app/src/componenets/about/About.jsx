import React from 'react';
import "./about.css"
import Me from "../../img/1.jpeg"

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

      <div className="a-desc">
        <p>
        <span class="bolded">What brings us together?</span> Well, other than being sorority sisters, 
            is our love for a good, clean, universal, and always-stocked-with-menstrual-products bathroom. 
            The problem is, not every building on campus has great bathrooms like the Bill and Melinda Gates Center. 
            So here we are, making your restroom experience at UW be <span class="bolded">boundless</span>!
        </p>
        <p>
        <span class="bolded">Why are we here?</span> Changing social standards calls for menstrual products access, 
        disability accommodation, and hold organizations responsible for maintaining restroom hygiene. We want to 
        help address these issues!

        </p>

      </div>

       



        
      </div>
  </div>;
};

export default About
