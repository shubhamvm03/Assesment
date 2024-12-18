import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>
            JobFinder is your one-stop platform for finding and applying to the best job opportunities worldwide.
          </p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#jobs">Jobs</a></li>
            <li><a href="#employers">Employers</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <p>Email: support@jobfinder.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Main Street, New York, NY</p>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 JobFinder. All rights reserved.</p>
      </div>
      <div className="chatbot-icon">
        <a href="#"><i className="fas fa-comment-dots"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
