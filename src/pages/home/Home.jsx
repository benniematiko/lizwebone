// src/pages/home/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { insightArticles } from '../insights/Insights'; 
import parliamentBg from '../../assets/parliament.png';
import elizaImg from '../../assets/elizakaruiru.png';
import gaudenciaImg from '../../assets/gaudenciakedogo.png';
import royomondiImg from '../../assets/royomondi.png';
import maureenImg from '../../assets/maureenwechuli.png';
import './Home.css';

export default function Home() {
  // Pull the two most recent executive briefs for the homepage panel
  const featuredInsights = insightArticles.slice(0, 2);

  const pillars = [
    {
      title: "Regional Footprint",
      description: "Deeply anchored in East Africa with multi-jurisdictional networks capable of executing intricate cross-border transactions and cross-border disputes smoothly."
    },
    {
      title: "Tier-One Counsel",
      description: "Our roster features highly specialized Senior Counsel and certified arbitrators equipped to tackle complex corporate structural challenges and high-stakes litigation."
    },
    {
      title: "Commercial Agility",
      description: "We don't just provide static legal opinions; we deliver strategic, highly tailored risk assessments designed to protect your institutional commercial value."
    }
  ];

  // Six featured team members configured with their asset images or default monograms
  const featuredPartners = [
    {
      id: "1",
      name: "Senior Counsel Elizabeth Karuiru",
      role: "Managing Partner & Senior Counsel",
      expertise: "Dispute Resolution & Commercial Arbitration",
      image: elizaImg,
      initials: "EK"
    },
    {
      id: "2",
      name: "Gaudencia Kedogo",
      role: "Partner",
      expertise: "Banking, Project Finance & Infrastructure",
      image: gaudenciaImg,
      initials: "GK"
    },
    {
      id: "3",
      name: "Roy Omondi",
      role: "Partner",
      expertise: "Corporate Mergers & Acquisitions",
      image: royomondiImg,
      initials: "RO"
    },
    {
      id: "4",
      name: "Maureen Wechuli",
      role: "Partner",
      expertise: "Conveyancing, Real Estate & Environmental Law",
      image: maureenImg,
      initials: "MW"
    },
    {
      id: "5",
      name: "Patrick Kamau",
      role: "Senior Associate",
      expertise: "Intellectual Property, Technology & Venture Capital",
      image: null,
      initials: "PK"
    },
    {
      id: "6",
      name: "Grace Mutua",
      role: "Senior Associate",
      expertise: "Taxation Systems & Corporate Restructuring",
      image: null,
      initials: "GM"
    }
  ];

  return (
    <div className="home-wrapper">
      {/* 1. Hero Structural Presentation Section (Clean Standard Divs) */}
      <section className="hero-section" style={{ backgroundImage: `url(${parliamentBg})` }}>
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          <span className="hero-tag">Market-Leading African Law Firm</span>
          <h1>Karuiru Associates & Advocates</h1>
          <p>
            Established with a strong focus on exceptional legal service, 
            combining local expertise with global perspectives.
          </p>
          <div className="hero-actions">
            <Link to="/people" className="btn-primary">Our Advocates</Link>
            <Link to="/expertise" className="btn-secondary">Practice Areas</Link>
          </div>
        </div>
      </section>

      {/* 2. Core Corporate Briefing/About Section */}
      <section id="about" className="home-about-section">
        <div className="about-container">
          <h2>An Elite Heritage of Legal Defense</h2>
          <p>
            Headquartered in Nairobi, Karuiru Associates & Advocates provides full-spectrum corporate transactional 
            advisory and high-stakes dispute resolution services to financial institutions, multinationals, and public sectors across East Africa.
          </p>
        </div>
      </section>

      {/* 3. Why Choose Us / Value Pillars Section */}
      <section className="why-us-section">
        <div className="why-us-container">
          <header className="why-us-header">
            <span className="section-tag">Value Proposition</span>
            <h2>Why Karuiru Advocates</h2>
          </header>

          <div className="why-us-grid">
            {pillars.map((pillar, index) => (
              <div key={index} className="why-us-card">
                <div className="pillar-index">0{index + 1}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Expanded Leadership Spotlight Section */}
      <section className="home-team-section">
        <div className="team-container">
          <div className="section-header-split">
            <div>
              <span className="section-tag">Leadership</span>
              <h2>Featured Team</h2>
            </div>
            <Link to="/people" className="section-action-link">
              View All Partners & Associates &rarr;
            </Link>
          </div>

          <div className="home-team-grid">
            {featuredPartners.map((partner) => (
              <div key={partner.id} className="home-team-card">
                
                {/* Image layout container supporting assets and text-based avatars perfectly */}
                <div className="partner-card-image-wrapper">
                  {partner.image ? (
                    <img 
                      src={partner.image} 
                      alt={partner.name} 
                      className="partner-avatar-image" 
                    />
                  ) : (
                    <div className="partner-avatar-fallback">
                      <span>{partner.initials}</span>
                    </div>
                  )}
                </div>

                <div className="partner-card-details">
                  <h3>{partner.name}</h3>
                  <p className="partner-card-role">{partner.role}</p>
                  <p className="partner-card-expertise">{partner.expertise}</p>
                  <Link to={`/people/${partner.id}`} className="partner-card-link">
                    View Full Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Insights Panel Section */}
      <section className="featured-insights-section">
        <div className="section-header-split">
          <div>
            <span className="section-tag">Publications</span>
            <h2>Latest Insights & Legal Briefs</h2>
          </div>
          <Link to="/insights" className="section-action-link">
            View All Publications &rarr;
          </Link>
        </div>

        <div className="featured-insights-grid">
          {featuredInsights.map((article) => (
            <article key={article.id} className="featured-insight-card">
              <div className="card-meta">
                <span className="insight-category">{article.category}</span>
                <span className="insight-date">{article.date}</span>
              </div>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
              <Link to="/insights" className="read-more-accent">
                Read Executive Briefing
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}