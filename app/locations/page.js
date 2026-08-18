import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { MapPin, Search, Phone, Clock, ArrowRight } from 'lucide-react';
import { locations, searchTerms } from './locationData';
import LocationGridClient from '@/components/LocationGridClient';

export const metadata = {
  title: 'RO Service Areas in Pune | RO Repair Near Me | AquaguardService',
  description: 'Find RO water purifier repair and service near you in Pune, Pimpri-Chinchwad, Wakad, Hinjewadi, Baner, Kharadi, and 35+ more areas. Same day service.',
};

export default function LocationsPage() {
  return (
    <main>
      {/* HERO BANNER */}
      <PageHero
        tag={<><MapPin size={18} /> Service Areas</>}
        title={<>RO Service Near Me —<br />Pune & Pimpri-Chinchwad</>}
        subtitle="Expert RO water purifier repair, installation & AMC across all major areas of Pune and Pimpri-Chinchwad. Same-day service available in most areas."
        image="/images/ro-purifier.jpg"
        imageAlt="RO water purifier service near me"
      >
        <div className="section-banner-stats" style={{ margin: 0, justifyContent: 'flex-start', gap: '32px' }}>
          <div><span className="section-banner-stat-num" style={{ color: 'white', fontSize: '1.8rem' }}>35+</span><span className="section-banner-stat-label" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem' }}>Areas Covered</span></div>
          <div><span className="section-banner-stat-num" style={{ color: 'white', fontSize: '1.8rem' }}>2–4 hrs</span><span className="section-banner-stat-label" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem' }}>Response Time</span></div>
          <div><span className="section-banner-stat-num" style={{ color: 'white', fontSize: '1.8rem' }}>7 Days</span><span className="section-banner-stat-label" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem' }}>Open All Week</span></div>
        </div>
      </PageHero>

      {/* LOCATION CARDS GRID */}
      <section className="section" aria-labelledby="areas-heading">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag"><MapPin size={16} /> Where We Serve</div>
            <h2 id="areas-heading" className="section-title">Find RO Service in Your Area</h2>
            <p className="section-subtitle">Click on your area to see dedicated RO service details, pricing &amp; availability near you.</p>
          </div>
          <LocationGridClient locations={locations} />
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
