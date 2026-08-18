import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import PageHero from '@/components/PageHero';
import { Wrench, Settings, RefreshCw, ClipboardList, Factory, Droplets, Droplet, MapPin, Phone } from 'lucide-react';

export const metadata = {
  title: 'Our Services | RO Repair, Installation, AMC Pune | AquaguardService',
  description: 'Complete RO water purifier services in Pune — repair, installation, filter change, AMC, commercial RO plant service. All brands. Call 07030370076.',
};

const mainServices = [
  { icon: Wrench, h: 'RO Repair & Servicing', p: 'Expert diagnosis and repair for all types of RO purifier faults — low water flow, bad taste, leakage, membrane issues and more.', link: 'Book Repair →', delay: 'reveal-delay-1' },
  { icon: Settings, h: 'RO Installation', p: 'Professional installation of wall-mounted, under-sink and countertop RO systems. Proper fitting, testing & handover included.', link: 'Book Installation →', delay: 'reveal-delay-2' },
  { icon: RefreshCw, h: 'Filter & Membrane Change', p: 'Timely replacement of pre-filters, sediment filters, carbon filters and RO membranes to maintain water quality and flow rate.', link: 'Book Service →', delay: 'reveal-delay-3' },
  { icon: ClipboardList, h: 'AMC — Annual Maintenance', p: 'Worry-free RO AMC plans covering regular servicing, filter replacement and priority support throughout the year.', link: 'Get AMC Quote →', delay: 'reveal-delay-4' },
  { icon: Factory, h: 'Commercial RO Service', p: 'Industrial & commercial RO plant service — 25 LPH, 50 LPH, 100 LPH and higher capacity systems for offices, factories & housing societies.', link: 'Get Quote →', delay: 'reveal-delay-1' },
  { icon: Droplets, h: 'RO Uninstallation & Relocation', p: "Planning to shift? We safely uninstall, pack and reinstall your RO purifier at your new address without hassle.", link: 'Book Now →', delay: 'reveal-delay-2' },
];

const commercialServices = [
  { icon: Droplet, h: '25 LPH RO Plant', p: 'Ideal for small offices and clinics. Services include Aquafresh 25 LPH RO plant maintenance and repair.' },
  { icon: Droplets, h: '50 LPH RO Plant', p: 'Perfect for mid-sized offices. We service Aquagrand 50 LPH RO plant, Lexpure 50 LPH RO plant, and Aquaguard Reviva 50 LPH RO plant.' },
  { icon: Factory, h: '100 LPH RO Plant', p: 'Heavy-duty solutions for factories. Expert service for Aquaguard RO plant 100 LPH, Lexpure 100 LPH RO plant and more.' },
];

const otherBrands = ['Zero B','Aquafresh RO','Aquagrand','Aquamarine RO','Lexpure RO Service','Lexpure RO Water Purifier','Blue Mount RO','Nasaka RO Water Purifier','Usha Water Purifier','Hindware Water Purifier'];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        tag={<span><Wrench size={18} style={{ display: 'inline', verticalAlign: 'text-bottom' }} /> Our Services</span>}
        title="Complete RO Water Purifier Services in Pune"
        subtitle="From routine filter changes to complex membrane repairs — we handle everything for all brands of RO water purifiers across Pune & Pimpri-Chinchwad. Certified technicians. Same-day slots available."
        image="/images/premium-service-hero.jpg"
        imageAlt="Premium RO Service Team in Pune"
      >
        <div className="section-banner-stats" style={{ margin: 0, justifyContent: 'flex-start', gap: '32px' }}>
          <div><span className="section-banner-stat-num" style={{ color: 'white', fontSize: '1.8rem' }}>6</span><span className="section-banner-stat-label" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem' }}>Service Types</span></div>
          <div><span className="section-banner-stat-num" style={{ color: 'white', fontSize: '1.8rem' }}>15+</span><span className="section-banner-stat-label" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem' }}>Brands Covered</span></div>
          <div><span className="section-banner-stat-num" style={{ color: 'white', fontSize: '1.8rem' }}>5000+</span><span className="section-banner-stat-label" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem' }}>Jobs Done</span></div>
        </div>
      </PageHero>

      {/* SERVICES CARDS */}
      <section className="section" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Our Services</div>
            <h2 id="services-heading" className="section-title">Complete RO Water Purifier Services</h2>
            <p className="section-subtitle">From routine maintenance to complex repairs — we handle everything for all brands of RO water purifiers in Pune.</p>
          </div>
          <div className="services-grid">
            {mainServices.map((s, i) => (
              <article key={i} className={`service-card reveal ${s.delay}`}>
                <div className="service-card-icon"><s.icon size={24} /></div>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
                <Link href="/contact" className="service-card-link">{s.link}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMMERCIAL */}
      <section className="section section--bg" aria-labelledby="commercial-heading">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Commercial Solutions</div>
            <h2 id="commercial-heading" className="section-title">Commercial & Industrial RO Plants</h2>
            <p className="section-subtitle">We provide installation, repair, and AMC services for high-capacity RO plants for offices, hospitals, schools, and factories.</p>
          </div>
          <div className="services-grid">
            {commercialServices.map((s, i) => (
              <article key={i} className={`service-card reveal reveal-delay-${i+1}`}>
                <div className="service-card-icon"><s.icon size={24} /></div>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </article>
            ))}
          </div>
          <p className="reveal" style={{ textAlign: 'center', marginTop: '32px' }}>
            Looking for <strong>Commercial RO plant price</strong> details? <Link href="/contact">Contact us</Link> for a custom quote based on your requirements.
          </p>
        </div>
      </section>

      {/* OTHER BRANDS */}
      <section className="section" aria-labelledby="more-brands-heading">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">All Brands Supported</div>
            <h2 id="more-brands-heading" className="section-title">Other RO Brands We Service</h2>
          </div>
          <div className="locations-grid reveal">
            {otherBrands.map((b, i) => <div key={i} className="location-chip">{b}</div>)}
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
