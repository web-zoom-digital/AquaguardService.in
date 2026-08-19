'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

export default function LocationGridClient({ locations }) {
  const [showAll, setShowAll] = useState(false);
  
  // Show 12 initially (3 rows on desktop with 4 columns)
  const initialCount = 12;
  const visibleLocations = showAll ? locations : locations.slice(0, initialCount);

  return (
    <div>
      <div className="loc-area-grid">
        {visibleLocations.map((loc, i) => (
          <Link
            key={loc.slug}
            href={`/locations/${loc.slug}`}
            className={`loc-area-card reveal reveal-delay-${(i % 4) + 1} visible`}
          >
            <div className="loc-area-card-icon-wrap">
              <div className="loc-area-card-icon-pulse"></div>
              <div className="loc-area-card-icon"><MapPin size={24} /></div>
            </div>
            <span className="loc-area-card-name">{loc.name}</span>
            <span className="loc-area-card-cta">View Service <ArrowRight size={14} /></span>
          </Link>
        ))}
      </div>
      
      {locations.length > initialCount && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
          <button 
            onClick={() => setShowAll(!showAll)}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px',
              padding: '14px 32px',
              borderRadius: 'var(--radius-full)',
              border: '2px solid var(--accent)',
              color: 'var(--accent)',
              backgroundColor: 'transparent',
              fontWeight: '700',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 24px rgba(0, 150, 136, 0.15)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--accent)';
              e.currentTarget.style.color = 'var(--white)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 28px rgba(0, 150, 136, 0.3)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--accent)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 150, 136, 0.15)';
            }}
          >
            {showAll ? (
              <>View Less <ChevronUp size={18} /></>
            ) : (
              <>View More <ChevronDown size={18} /></>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
