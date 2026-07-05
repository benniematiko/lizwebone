// src/pages/people/People.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { advocates } from '../../data/advocates';
import './People.css';

export default function People() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter pipeline executing dynamically based on state
  const filteredAdvocates = advocates.filter((advocate) => {
    const matchesSearch = advocate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          advocate.role.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === 'all' || advocate.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="people-wrapper">
      <header className="people-header">
        <span className="people-subtitle">Our Leadership Team</span>
        <h1>Our People</h1>
        <p>Connect with legal counsel dedicated to high-performance corporate strategy and defense execution.</p>
      </header>

      {/* Control Panel: Filter Tabs + Search Inputs */}
      <div className="filter-control-panel">
        <div className="search-box-wrapper">
          <input 
            type="text" 
            placeholder="Search by advocate name or practice title..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-tabs-container">
          <button 
            className={`filter-tab ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            All Counsel
          </button>
          <button 
            className={`filter-tab ${activeCategory === 'partner' ? 'active' : ''}`}
            onClick={() => setActiveCategory('partner')}
          >
            Partners
          </button>
          <button 
            className={`filter-tab ${activeCategory === 'associate' ? 'active' : ''}`}
            onClick={() => setActiveCategory('associate')}
          >
            Associates
          </button>
        </div>
      </div>

      {/* Roster Output Layout */}
      {filteredAdvocates.length > 0 ? (
        <div className="people-grid">
          {filteredAdvocates.map((advocate) => (
            <div key={advocate.id} className="people-card">
              <div className="people-image-wrapper">
                <img src={advocate.image} alt={advocate.name} />
              </div>
              <div className="people-card-info">
                <h3>{advocate.name}</h3>
                <p className="people-role">{advocate.role}</p>
                <Link to={`/people/${advocate.id}`} className="people-profile-link">
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results-panel">
          <p>No legal professionals matched your current query criteria. Try adjusting your parameters.</p>
        </div>
      )}
    </div>
  );
}