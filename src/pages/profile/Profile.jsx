// src/pages/profile/Profile.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { advocates } from '../../data/advocates';
import './Profile.css';

export default function Profile() {
  const { id } = useParams();
  
  // Find the advocate whose data matches the URL ID parameter
  const advocate = advocates.find(adv => adv.id === id);

  if (!advocate) {
    return (
      <div className="profile-error">
        <h2>Advocate Profile Not Found</h2>
        <p>The profile you are looking for does not exist or has been relocated.</p>
        <Link to="/people" className="back-link">← Return to Our People</Link>
      </div>
    );
  }

  return (
    <div className="profile-wrapper">
      <div className="profile-container">
        {/* Left Side: Photo and Contact details Card */}
        <aside className="profile-sidebar">
          <div className="profile-image-card">
            <img src={advocate.image} alt={advocate.name} />
          </div>
          <div className="profile-contact-info">
            <h3>Contact Details</h3>
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <a href={`mailto:${advocate.email}`}>{advocate.email}</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Office:</span>
              <span>Nairobi, HQ</span>
            </div>
          </div>
        </aside>

        {/* Right Side: Detailed Professional Biography */}
        <main className="profile-main-content">
          <span className="profile-role-tag">{advocate.role}</span>
          <h1 className="profile-name">{advocate.name}</h1>
          <hr className="title-divider" />
          
          <section className="profile-bio-section">
            <h2>Biography</h2>
            <p>{advocate.bio}</p>
          </section>

          <section className="profile-qualifications-section">
            <h2>Practice Expertise</h2>
            <ul className="qualifications-list">
              <li>Commercial Litigation</li>
              <li>Arbitration & Alternative Dispute Resolution</li>
              <li>Banking, Finance & Securities Law</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}