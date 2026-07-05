// src/pages/expertise/Expertise.jsx
import React from 'react';
import './Expertise.css';

export default function Expertise() {
  const practices = [
    {
      id: "dispute-resolution",
      title: "Dispute Resolution & Arbitration",
      description: "Our premier litigation engine handles high-stakes commercial disputes, constitutional references, and international asset tracing recovery actions.",
      specialties: ["Commercial Litigation", "International Arbitration", "Tax Appeals", "Employment Disputes"]
    },
    {
      id: "corporate-commercial",
      title: "Corporate & Commercial Law",
      description: "Providing strategic advisory services on market entry, multi-jurisdictional compliance, restructuring, and joint venture frameworks.",
      specialties: ["Regulatory Compliance", "Antitrust & Competition", "Intellectual Property", "Data Protection"]
    },
    {
      id: "banking-finance",
      title: "Banking & Project Finance",
      description: "Advising institutional lenders and corporate borrowers on syndication structures, asset-backed securities, and capital markets transactions.",
      specialties: ["Project Finance", "Securitization", "Capital Markets", "FinTech Regulatory Support"]
    },
    {
      id: "mergers-acquisitions",
      title: "Mergers & Acquisitions (M&A)",
      description: "Guiding domestic and international conglomerates through structural due diligence, share purchase agreements, and cross-border consolidations.",
      specialties: ["Cross-Border M&A", "Legal Due Diligence", "Transaction Restructuring", "Shareholder Agreements"]
    },
    {
      id: "real-estate-conveyancing",
      title: "Real Estate & Conveyancing",
      description: "Handling large-scale property developments, commercial leasing structural frameworks, and complex agricultural land transformations.",
      specialties: ["Commercial Property Leases", "Real Estate Joint Ventures", "Land Use Zoning", "Sectional Properties Advisory"]
    },
    {
      id: "energy-infrastructure",
      title: "Energy, Infrastructure & PPPs",
      description: "Advising stakeholders on Public-Private Partnerships, large-scale clean energy generation schemes, and mining resource concessions.",
      specialties: ["Power Purchase Agreements (PPAs)", "PPP Project Frameworks", "Environmental Licensing", "Oil & Gas Advisory"]
    }
  ];

  return (
    <div className="expertise-wrapper">
      <header className="expertise-header">
        <span className="expertise-subtitle">Our Specializations</span>
        <h1>Legal Practice Areas</h1>
        <p>Providing market-leading corporate advice and dispute resolution mechanisms across Sub-Saharan Africa.</p>
      </header>

      <div className="expertise-grid">
        {practices.map((practice) => (
          <div key={practice.id} className="practice-card">
            <div className="practice-card-content">
              <h2>{practice.title}</h2>
              <p>{practice.description}</p>
              
              <div className="specialties-tags-zone">
                <h4>Core Focal Points:</h4>
                <div className="tags-flex">
                  {practice.specialties.map((spec, index) => (
                    <span key={index} className="spec-tag">{spec}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}