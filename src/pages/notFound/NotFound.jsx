import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found-wrapper">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          The legal document, profile, or directory you are looking for has been moved, 
          deleted, or does not exist on our servers.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn-primary">Return to Homepage</Link>
          <Link to="/contact" className="btn-secondary" style={{ color: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}>
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}