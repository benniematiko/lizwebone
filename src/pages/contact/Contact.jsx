// src/pages/contact/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle intake form submission logic here
    alert(`Thank you ${formData.name}. Your inquiry has been sent safely.`);
  };

  return (
    <div className="contact-wrapper">
      <header className="contact-header">
        <span className="contact-subtitle">Get In Touch</span>
        <h1>Contact Our Firm</h1>
        <p>Speak with our legal counsel or schedule a formal consultation at our head offices.</p>
      </header>

      <div className="contact-grid">
        {/* Left Side: Structural Corporate Details */}
        <div className="contact-info-panel">
          <div className="info-block">
            <h3>Head Office</h3>
            <p>5th Avenue, 5th Floor</p>
            <p>Ngong Avenue</p>
            <p>Upper Hill</p>
            <p>P.O. Box 26277 - 00109</p>
            <p>Nairobi, Kenya</p>
          </div>

          <div className="info-block">
            <h3>Direct Lines</h3>
            <p><strong>Phone:</strong> +254-715-860-031</p>
            <p><strong>Email:</strong> legal@firm.co.ke</p>
          </div>

          <div className="info-block">
            <h3>Operational Hours</h3>
            <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
            <p>Closed on Weekends & Public Holidays</p>
          </div>
        </div>

        {/* Right Side: Clean Inquiry Form */}
        <div className="contact-form-panel">
          <h3>Submit an Inquiry</h3>
          <form onSubmit={handleSubmit} className="legal-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject Matter</label>
              <input 
                type="text" 
                id="subject" 
                required
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Brief Description of Legal Matter</label>
              <textarea 
                id="message" 
                rows="5" 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <button type="submit" className="form-submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}