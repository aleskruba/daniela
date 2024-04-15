import React,{useContext} from 'react';
import { ThemeContext } from '../context/themeContext';
import './experience.css';


function Experiences() {

  const { experienceRef } = useContext(ThemeContext);

  return (
    <div ref={experienceRef} className='experience-container'>
     
     <div className='experience-title'>
          <h1 className='experience-title-h'>My Spanish Teaching Experience</h1>
     </div>
     
     <div className='experience-main'>
          <div className='experience-main-left'>
              <p className='experience-main-left-p'>
              I have accumulated two years of experience teaching Spanish on Preply, an online language learning platform. My classes are tailored to meet the needs of each individual student, whether they are beginners or advanced learners. I offer a flexible approach, allowing students to focus on conversation practice, grammar, or any other aspect of the language they wish to improve. By creating a supportive and engaging learning environment, I strive to help my students achieve their language learning goals
            </p>
          </div>
         
          <div className='experience-main-right'>
          <iframe className='iframe'
                  src="https://www.youtube.com/embed/v-ddWJqQnX4" title="Conecta en ESPAÑOL conmigo!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
     </div>
      
    </div>
  )
}

export default Experiences