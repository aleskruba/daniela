import React from 'react';
import { TypeAnimation } from "react-type-animation";
import './about.css';

function About() {


  return (
    <section className="about-main-section">
      <div className="container">
   
      <div className="about-main-imagediv">

          <div className='about-main-imagediv-inner'>
            <img className='about-main-imagediv-image' src='dani.jpeg' alt='image' />
          </div>
        </div>

        <div className="about-main-div">
        <h1 className="about-main-h1">
            <TypeAnimation
              cursor={false} 
              sequence={['Hello I\'m Daniela']}
              wrapper="span"
              sequenceIndex={0}
              repeat={1}
              wrapperClassName="about-main-h1-text"
              startDelay={500}
              interval={100}
              cursorClassName="about-main-h1-cursor"
             />
          </h1>
    
            <p className='about-main-p'>
                I'm a 20-year-old girl from Colombia. Growing up in such a diverse and vibrant country has fueled my passion for teaching Spanish to foreigners. Exploring the nuances of language and culture has always intrigued me, making teaching an incredibly rewarding experience. In my free time, I indulge in my love for travel, sampling diverse cuisines and immersing myself in new experiences. Movies are another passion of mine, offering a glimpse into different worlds and perspectives. Sharing my knowledge of Spanish and engaging in conversations about travel, food, and movies brings me immense joy. I firmly believe that through language and cultural exchange, we can bridge gaps and foster understanding among people from different backgrounds. I look forward to continuing this journey of learning and sharing with people from around the globe.
            </p>
      
        </div>
   
      </div>
    </section>
  );
}

export default About;
