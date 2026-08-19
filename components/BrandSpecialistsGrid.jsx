'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Droplet, Disc3, Droplets, Hexagon, Gem, CheckCircle, Tags, ArrowRight } from 'lucide-react';

export default function BrandSpecialistsGrid() {
  const [showAll, setShowAll] = useState(false);

  const brands = [
    { href: '/aquaguard', icon: Droplet, title: 'Aquaguard RO Service', desc: 'Aquaguard RO service, repair & installation in Pune. Eureka Forbes authorised support.' },
    { href: '/kent-ro', icon: Disc3, title: 'Kent RO Service Pune', desc: 'Kent RO repair, filter change & AMC service near you in Pune & Pimpri-Chinchwad.' },
    { href: '/pureit', icon: Droplets, title: 'Pureit RO Service Pune', desc: 'HUL Pureit water purifier service, installation & repair across Pune.' },
    { href: '/ao-smith', icon: Hexagon, title: 'AO Smith RO Service', desc: 'AO Smith water purifier service, RO system installation & repair in Pune.' },
    { href: '/livpure', icon: Gem, title: 'Livpure RO Service Pune', desc: 'Livpure RO repair, service center & AMC plans available in Pune.' },
    { href: '/all-brands', icon: Droplets, title: 'Blue Star RO Service', desc: 'Blue Star residential & commercial RO purifier repair and AMC service.' },
    { href: '/all-brands', icon: CheckCircle, title: 'Havells RO Service', desc: 'Havells alkaline & smart RO water purifier service and filter replacements.' },
    { href: '/all-brands', icon: Tags, title: 'All Other Brands', desc: 'LG, Sharp, Faber, Zero B, Aquafresh, Nasaka, Usha, Hindware & more.' },
  ];

  const displayedBrands = showAll ? brands : brands.slice(0, 6);

  return (
    <>
      <div className="brand-pages-grid">
        {displayedBrands.map((brand, i) => {
          const isInitial = i < 6;
          const delayClass = isInitial && (i % 3) > 0 ? ` reveal-delay-${i % 3}` : '';
          const wrapperClass = isInitial ? `reveal${delayClass}` : 'animate-in';
          const Icon = brand.icon;
          
          return (
            <Link key={i} href={brand.href} className={`brand-page-card ${wrapperClass}`}>
              <div className="brand-icon-wrap"><Icon size={24} /></div>
              <div className="brand-page-info">
                <h3>{brand.title}</h3>
                <p>{brand.desc}</p>
              </div>
              <div className="brand-arrow"><ArrowRight size={20} /></div>
            </Link>
          );
        })}
      </div>

      {brands.length > 6 && (
        <div className="reveal text-center" style={{ marginTop: '50px' }}>
          <button 
            className="btn btn-outline" 
            onClick={() => setShowAll(!showAll)}
            style={{ padding: '12px 32px', borderRadius: '50px' }}
          >
            {showAll ? 'View Less' : 'View More Brands'}
          </button>
        </div>
      )}
    </>
  );
}
