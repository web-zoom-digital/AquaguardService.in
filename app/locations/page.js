import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { MapPin, Search, Phone, Clock, ArrowRight } from 'lucide-react';
import { locations, searchTerms } from './locationData';

export const metadata = {
  title: 'RO Service Areas in Pune | RO Repair Near Me | AquaguardService',
  description: 'Find RO water purifier repair and service near you in Pune, Pimpri-Chinchwad, Wakad, Hinjewadi, Baner, Kharadi, and 35+ more areas. Same day service.',
};

export default function LocationsPage() {
  return (
    <main>
      {/* HERO BANNER */}
      <div className="section-banner" id="locations">
        <div className="section-banner-bg" style={{ backgroundImage: "url('/images/ro-purifier.jpg')" }}></div>
        <div className="section-banner-overlay" style={{ background: 'linear-gradient(135deg,rgba(5,20,45,0.82) 0%,rgba(0,60,30,0.68) 60%,rgba(5,20,45,0.60) 100%)' }}></div>
        <div className="container">
          <div className="section-banner-content" style={{ maxWidth: '700px' }}>
            <div className="section-tag"><MapPin size={18} /> Service Areas</div>
            <h1>RO Service Near Me —<br />Pune &amp; Pimpri-Chinchwad</h1>
            <p>Expert RO water purifier repair, installation &amp; AMC across all major areas of Pune and Pimpri-Chinchwad. Same-day service available in most areas.</p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '0' }}>
              <a href="tel:07030370076" className="btn btn-call"><Phone size={14} /> Call Now</a>
              <a href="https://wa.me/917030370076" target="_blank" rel="noopener" className="btn btn-ghost">WhatsApp Us</a>
            </div>
            <div className="section-banner-stats">
              <div><span className="section-banner-stat-num">35+</span><span className="section-banner-stat-label">Areas Covered</span></div>
              <div><span className="section-banner-stat-num">2–4 hrs</span><span className="section-banner-stat-label">Response Time</span></div>
              <div><span className="section-banner-stat-num">7 Days</span><span className="section-banner-stat-label">Open All Week</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* LOCATION CARDS GRID */}
      <section className="section" aria-labelledby="areas-heading">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag"><MapPin size={16} /> Where We Serve</div>
            <h2 id="areas-heading" className="section-title">Find RO Service in Your Area</h2>
            <p className="section-subtitle">Click on your area to see dedicated RO service details, pricing &amp; availability near you.</p>
          </div>
          <div className="loc-area-grid">
            {locations.map((loc, i) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className={`loc-area-card reveal reveal-delay-${(i % 4) + 1}`}
              >
                <div className="loc-area-card-icon"><MapPin size={18} /></div>
                <span className="loc-area-card-name">{loc.name}</span>
                <span className="loc-area-card-cta">View Service <ArrowRight size={13} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US STRIP */}
      <section className="section section--bg" aria-labelledby="why-heading">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Why Choose Us</div>
            <h2 id="why-heading" className="section-title">Pune&apos;s Most Trusted RO Service</h2>
            <p className="section-subtitle">We are available 7 days a week across all of Pune and Pimpri-Chinchwad for any RO brand.</p>
          </div>
          <div className="services-grid">
            {[
              { icon: '⚡', title: 'Same-Day Service', desc: 'Book before noon and get service the same day in most areas across Pune & PCMC.' },
              { icon: '🏆', title: 'All Brands Covered', desc: 'Aquaguard, Kent RO, Pureit, AO Smith, Livpure, and 15+ other RO brands serviced.' },
              { icon: '🔧', title: 'Certified Technicians', desc: 'Our technicians are trained and certified with years of hands-on RO repair experience.' },
              { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden charges. Get upfront pricing before any work begins — guaranteed.' },
              { icon: '📞', title: 'Open 7 Days', desc: 'We are available Monday to Sunday, 8:00 AM to 11:30 PM for your convenience.' },
              { icon: '✅', title: 'Service Warranty', desc: 'Every repair and service comes with a warranty. Peace of mind guaranteed.' },
            ].map((item, i) => (
              <article key={i} className={`service-card reveal reveal-delay-${(i % 4) + 1}`}>
                <div className="service-card-icon" style={{ fontSize: '22px' }}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH TERMS SEO SECTION */}
      <section className="section" aria-labelledby="search-heading">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag"><Search size={16} /> Search Near You</div>
            <h2 id="search-heading" className="section-title">Your Local RO Service Experts</h2>
            <p className="section-subtitle">No matter what you&apos;re looking for, we are just a call away in Pune &amp; Pimpri-Chinchwad.</p>
          </div>
          <div className="locations-grid reveal">
            {searchTerms.map((t, i) => (
              <div key={i} className="location-chip" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Search size={12} /> {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
