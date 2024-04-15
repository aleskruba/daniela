import React,{useContext,useState,useEffect,useRef} from 'react';
import { ThemeContext } from '../context/themeContext';
import './courses.css';
import { motion, useAnimation, useInView } from  'framer-motion'

function Courses() {

   const { coursesRef } = useContext(ThemeContext);
      const ref = useRef(null)
     const isInView = useInView(ref)
     const mainControls =  useAnimation()

     const formVariants = {
      hidden: { x: '-100%',opacity: 0},
      visible: { x: '0%' ,opacity: 1},
    };

     useEffect(()=>{
      if (isInView) {
      mainControls.start("visible")
      }
      },[isInView,mainControls])

  return (
    <div className='courses-container' ref={coursesRef}>
   {/* <h1 className="courses-main-h1">I can offer you these courses</h1> */}
      <div className="gridDiv">

      <motion.div
   
        className='textDiv'
     //   initial={{ opacity: 0, x: '-30%', y: '0%' }} // Set initial properties
       initial="hidden"  
       variants={formVariants}
        animate={mainControls}
        transition={{ type: 'spring', duration: 1.5 }}
        //  animate={{ opacity: 1, x: '0%', y: '0%', transition: { delay: 0, duration: 1 } }} // Animate properties with delay and duration
      //  exit={{ x: [0, -10, 10, -10, 10, 0], transition: { duration: 1 } }} // Add exit animation for the shake effect
     
    >
       <div className='textDivText'><p>Take advantage of a</p>
            <p className='free'>FREE</p>
            <p ref={ref} >20-minute trial lesson</p> 
        </div> 
      </motion.div>


          <div className="flow">
        
            <div className="flowtext">
              <div className='kids-image-div'> 
                  <img src="kid.png" alt="" className='kids-image' />   
              </div>
              
            </div>
            <div className='right-side'>
                <div className="right-side-title">
                   Spanish for kids
                </div>

                <div className="right-side-text">
                  <p>Interactive learning adventure for kids 8 and up!</p>

                <p>
                Join us for exciting activities and creative lessons designed to make learning fun and engaging
                </p>
                </div>

                <div className="right-side-price">
                   1 HOUR FROM $10 
                </div>
            </div>
          </div>




          <div className="flow">
              <div className="conversation-left-side">
                <p>Let's practice conversation!</p>
              We can chat about anything you like, whether it's your favorite hobbies, travel experiences, or even just everyday life. Practice speaking Spanish in a relaxed and friendly environment.
              </div>

              <div className="conversation-right-side">
                 <div className="conversation-right-side-image-div">
                     <img src="talking.png" alt="" className='conversation-right-side-image' />   
                  </div>

              </div>
              <div className="conversation-right-side-title">
                 Spanish conversation
              </div>              
              <div className="conversation-right-side-price">
                 1 HOUR FROM $6 
              </div>   
     
          </div>

          <div className="flow">
              <div className="conversation-left-side">
                <p>Let's practice grammar!</p>
                Join me to explore Spanish grammar! From verb conjugation to sentence structure, we'll practice together in a relaxed setting. Improve your skills and boost your confidence.
              </div>

              <div className="conversation-right-side">
                 <div className="grammar-right-side-image-div">
                     <img src="grammar.png" alt="" className='conversation-right-side-image' />   
                  </div>

              </div>
              <div className="grammar-right-side-title">
                 Spanish grammar
              </div>              
              <div className="conversation-right-side-price">
                 1 HOUR FROM $8 
              </div>   
     
          </div>

      </div>


    
    </div>
  )
}

export default Courses