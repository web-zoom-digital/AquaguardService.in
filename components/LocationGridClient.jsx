'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

export default function LocationGridClient({ locations }) {
  const [showAll, setShowAll] = useState(false);
  
  // Show 15 initially (approx 3 rows on desktop, 4 on tablet)
  const initialCount = 15;
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
            <div className="loc-area-card-icon"><MapPin size={18} /></div>
            <span className="loc-area-card-name">{loc.name}</span>
            <span className="loc-area-card-cta">View Service <ArrowRight size={13} /></span>
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
              padding: '12px 28px',
              borderRadius: 'var(--radius-full)',
              border: '1.5px solid var(--accent)',
              color: 'var(--accent)',
              backgroundColor: 'transparent',
              fontWeight: '600',
              fontSize: '0.95rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--accent)';
              e.currentTarget.style.color = 'var(--white)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--accent)';
            }}
          >
            {showAll ? (
              <>View Less <ChevronUp size={16} /></>
            ) : (
              <>View All {locations.length} Areas <ChevronDown size={16} /></>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
