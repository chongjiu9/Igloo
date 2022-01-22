import React from 'react';
import "./intro.css"

const Intro = () => {
  return <div className='i'>
      {/* split up the screen to left and right */}
      <div className="i-left">

           {/* wrapper of website intro name */}
          <div className="i-left-wrapper">
              <h2 className='i-intro'>Hello, My name is</h2>
              <h1 className='i-name'>Igloo</h1>
              <div className="i-title">
                  {/* wrapper is used for animation */}
                  <div className="i-title-wrapper">
                      <div className="i-title-item">Bathroom</div>
                      <div className="i-title-item">User rating</div>
                      <div className="i-title-item">Easy to use</div>
                      <div className="i-title-item">Place holder</div>
                      <div className="i-title-item">Place holder</div>
                  </div>
              </div>

              {/* insert description here */}
              <div className="i-desc">
                  I help people locate bathrooms, rate bathrooms, find out what's 
                  in a bathroom and all the good stuff. Here's more place holder text:
                  blah blah blah blah blah ahahah hahahah ahahahahhahahhhhhhh yayayayayayayyaya
              </div>



          </div>

      </div>
      <div className="i-right">right</div>

    </div>;
}

export default Intro

