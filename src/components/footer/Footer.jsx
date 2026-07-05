// src/components/footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="global-footer">
      <div className="footer-container">
        
        <div className="footer-column brand-column">
          <h2>KARUIRU <span className="footer-logo-sub">ADVOCATES</span></h2>
          <p className="brand-desc">
            A full-service market-leading African law firm specializing in elite dispute resolution and corporate commercial law frameworks.
          </p>
        </div>

        <div className="footer-column links-column">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home Base</Link></li>
            <li><Link to="/people">Our People</Link></li>
            <li><Link to="/insights">News & Insights</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-column contact-column">
          <h3>Nairobi Headquarters</h3>
          <p>5th Avenue, Office Suites, 5th Floor</p>
          <p>Ngong Avenue, Nairobi</p>
          <p className="footer-directs"><strong>T:</strong> +254-715-860-031</p>
          <p className="footer-directs"><strong>E:</strong> legal@karuiruadvocates.co.ke</p>
        </div>

      </div>

      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          <p>&copy; {currentYear} Karuiru Advocates & Associates. All Rights Reserved.</p>
          <div className="legal-notices-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="divider">|</span>
            <a href="#terms">Legal Notices</a>
          </div>
        </div>
      </div>
    </footer>
  );
}