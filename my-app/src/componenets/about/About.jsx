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
        <p>Computer Science | Business | Human Centered Design & Engineering | Industrial Design</p>
        </p>

      <div className="a-desc">
        <p>
        <span class="bolded">What brings us together?</span> Well, other than being sorority sisters, 
            is our love for a good, clean, universal, and always-stocked-with-menstrual-products bathroom. 
            The problem is, not every building on campus has great bathrooms like the Bill and Melinda Gates Center. 
        </p>
        <p>
        <span class="bolded">Why are we here? </span> 
        Through this project, we are "embracing the new" changing cultural standards, 
        which call for widespread access to menstrual products, disability accommodations,
        and holding organizations responsible for maintaining restroom hygiene. So here we are, making your restroom experience at UW be <span class="bolded">boundless</span>!

        </p>

      </div>

       



        
      </div>
  </div>;
};

export default About
