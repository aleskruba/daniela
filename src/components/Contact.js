import React,{useContext,useRef,useEffect} from 'react';
import { ThemeContext } from '../context/themeContext';
import '@fortawesome/fontawesome-free/css/all.css';
import './contact.css';
import { motion, useAnimation, useInView } from  'framer-motion'

function Contact() {

    const { contactRef } = useContext(ThemeContext);

    const contactMotionRef = useRef(null)
    const isInView = useInView(contactMotionRef)
    const mainControls =  useAnimation()

    const formVariants = {
        hidden: { opacity: 0},
        visible: { opacity: 1},
      };
  
       useEffect(()=>{
        if (isInView) {
        mainControls.start("visible")
        }
        },[isInView,mainControls])

        
    return (
         <div    className="contact-info">
            <h1 className='contact-info-title'>Feel free to contact me via:</h1>
           <motion.div className='contact-info-inner'
                        ref={contactRef} 
                        initial="hidden"  
                        variants={formVariants}
                         animate={mainControls}
                         transition={{ type: 'spring', duration: 2.5 }}
           >
                <p className='contact-info-email'><a href="mailto:dani@hotmail.com"><i className="fas fa-envelope"></i> dani@hotmail.com</a></p>
                <p className='contact-info-facebook'><a href="https://www.facebook.com/yourfacebookpage"><i className="fab fa-facebook"></i> Your Facebook Page</a></p>
                <p ref={contactMotionRef} className='contact-info-instagram'><a href="https://www.instagram.com/yourinstagram"><i className="fab fa-instagram"></i> Your Instagram Page</a></p>
             </motion.div> 
        </div>
    );
}

export default Contact;
