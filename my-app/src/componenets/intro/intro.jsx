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
          </div>
          
      </div>
      <div className="i-right">right</div>

    </div>;
}

export default Intro

