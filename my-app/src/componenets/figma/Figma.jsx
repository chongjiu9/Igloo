import React from 'react';
import "./figma.css"
import FigmaEmbed from 'react-figma-embed';


const Figma = () => {
    return <div className="fig-div">
        <h2 className='f-intro'>Our Figma Prototype</h2>
        <FigmaEmbed url="https://www.figma.com/proto/s3w8QGOIkMs5vfpbOQu4CG/WINFO-Hackathon-Team-Igloo?node-id=208%3A152&scaling=min-zoom&page-id=209%3A79&starting-point-node-id=208%3A152" />

        <div className="sc">
            <p>Shout out to 
                <a href='https://www.youtube.com/channel/UCOxWrX5MIdXIeRNaXC3sqIg'> Lama Dev's </a> amazing website tutorial! | <a href='https://github.com/er9966/Igloo'>Our Github Repo </a>
                </p>
        </div>

    </div>  
    
  };
  
  export default Figma
