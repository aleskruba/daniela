import React from 'react'
import './footer.css';
import '@fortawesome/fontawesome-free/css/all.css'; 

function Footer() {
  return (
   
    <footer className="footer">
      <div className="footer-container">
        <div className="social-links">
          <a href="https://www.facebook.com/teacherprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/teacherprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/teacherprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <div className="email">
          <a href="mailto:teacher@example.com">
            dani@hotmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer