import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const practiceAreas = [
    { name: "Dispute Resolution", path: "/expertise" },
    { name: "Corporate & Commercial", path: "/expertise" },
    { name: "Banking & Project Finance", path: "/expertise" },
    { name: "Mergers & Acquisitions", path: "/expertise" },
    { name: "Real Estate Conveyancing", path: "/expertise" },
    { name: "Energy & Infrastructure", path: "/expertise" }
  ];

  // Helper to cleanly close everything on mobile click actions
  const handleMobileLinkClick = () => {
    setIsMobileOpen(false);
    setDropdown(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleMobileLinkClick}>
          <div className="logo-brand">KARUIRU</div>
          <div className="logo-sub">ASSOCIATES & ADVOCATES </div>
        </Link>
        
        {/* Hamburger Toggle Icon Button */}
        <button 
          className={`hamburger-toggle ${isMobileOpen ? 'open' : ''}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation menu"
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </button>
        
        <ul className={`navbar-links ${isMobileOpen ? 'mobile-active' : ''}`}>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
              onClick={handleMobileLinkClick}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/people" 
              className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
              onClick={handleMobileLinkClick}
            >
              Our People
            </NavLink>
          </li>
          
          {/* Interactive Dropdown Element Container */}
          <li 
            className="dropdown-trigger-node"
            onMouseEnter={() => setDropdown(true)}
            onMouseLeave={() => setDropdown(false)}
            onClick={() => setDropdown(!dropdown)} // Toggle on mobile touch
          >
            <span className="nav-item mixed-dropdown-label">
              Expertise <span className={`arrow-indicator ${dropdown ? 'rotated' : ''}`}>▼</span>
            </span>
            
            {dropdown && (
              <ul className="nav-dropdown-menu">
                {practiceAreas.map((area, index) => (
                  <li key={index}>
                    <Link to={area.path} onClick={handleMobileLinkClick}>
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <NavLink 
              to="/insights" 
              className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
              onClick={handleMobileLinkClick}
            >
              News & Insights
            </NavLink>
          </li>
          <li>
            <Link to="/contact" className="nav-btn" onClick={handleMobileLinkClick}>Free consultation</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}