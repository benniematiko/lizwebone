// src/pages/insights/Insights.jsx
import React, { useState } from 'react';
import { insightsData } from '../../data/insightsData';
import './Insights.css';


export const insightArticles = [
  {
    id: "banking-act-2026",
    title: "The Banking Amendment Act: Strategic Implications for Financial Institutions",
    category: "Banking & Finance",
    date: "May 14, 2026",
    excerpt: "An executive analysis of the new operational compliance guidelines and capital asset reserve structures...",
    content: "Full analytical breakdown text goes here..."
  },
  {
    id: "afcfta-cross-border",
    title: "Navigating Cross-Border Trade Under the AfCFTA Framework",
    category: "Corporate & M&A",
    date: "April 28, 2026",
    excerpt: "Key regulatory shifts, tariff alignment protocols, and structural corporate risk management strategies...",
    content: "Full analytical breakdown text goes here..."
  }
  // ... rest of your articles here
];

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Legal Alert', 'Bill Review', 'Newsletter'];

  const filteredInsights = activeCategory === 'All'
    ? insightsData
    : insightsData.filter(item => item.category === activeCategory);

  return (
    <div className="insights-wrapper">
      <header className="insights-header">
        <span className="insights-subtitle">Knowledge Hub</span>
        <h1>News & Insights</h1>
        <p>Stay updated with our timely legal analyses, regulatory reviews, and localized legal intelligence briefings.</p>
      </header>

      {/* Category Pills Selector */}
      <div className="category-pills">
        {categories.map(cat => (
          <button 
            key={cat} 
            className={activeCategory === cat ? 'pill active' : 'pill'}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Publications Listing */}
      <div className="insights-list">
        {filteredInsights.map(item => (
          <article key={item.id} className="insight-card">
            <div className="insight-meta">
              <span className="insight-tag">{item.category}</span>
              <span className="insight-date">{item.date}</span>
            </div>
            <h2 className="insight-title">{item.title}</h2>
            <p className="insight-summary">{item.summary}</p>
            <div className="insight-footer">
              <span className="insight-author">By {item.author}</span>
              <a href={`/insights/${item.id}`} className="read-more-btn">Read Briefing →</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}