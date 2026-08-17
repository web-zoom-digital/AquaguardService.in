import Link from 'next/link';
import { notFound } from 'next/navigation';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Wrench, Settings, RefreshCw, ClipboardList, ArrowLeft, CheckCircle } from 'lucide-react';
import { locations } from '../locationData';

export async function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) return {};
  return {
    title: `RO Service in ${loc.name} | RO Repair & Installation | AquaguardService`,
    description: `Expert RO water purifier repair, installation & AMC service in ${loc.name}, Pune. All brands — Aquaguard, Kent RO, Pureit, AO Smith & more. Same-day service. Call 07030370076.`,
  };
}

const services = [
  { icon: Wrench, title: 'RO Repair & Servicing', desc: 'Expert diagnosis and repair for all RO purifier faults — low water flow, bad taste, leakage, motor issues and more.' },
  { icon: Settings, title: 'RO Installation', desc: 'Professional installation of wall-mounted, under-sink and countertop RO systems. Fitting, testing & handover included.' },
  { icon: RefreshCw, title: 'Filter & Membrane Change', desc: 'Timely replacement of pre-filters, sediment filters, carbon filters and RO membranes to maintain water quality.' },
  { icon: ClipboardList, title: 'AMC – Annual Maintenance', desc: 'Worry-free AMC plans covering regular servicing, filter replacement and priority support throughout the year.' },
];

const whyUs = [
  'Same-day service available in most areas',
  'Certified & experienced technicians',
  'All RO brands covered — Aquaguard, Kent, Pureit, AO Smith, Livpure & more',
  'Transparent pricing — no hidden charges',
  'Service warranty on every repair',
  'Open Monday–Sunday, 8 AM to 11:30 PM',
];

export default async function LocationPage({ params }) {
  const { slug } = await params;
  const loc = locations.find((l) => l.slug === slug);
  if (!loc) notFound();

  // nearby locations (up to 6, excluding current)
  const nearby = locations.filter((l) => l.slug !== slug).slice(0, 6);

  return (
    <main>
      {/* HERO */}
      <div className="section-banner" id={`loc-${slug}`}>
        <div className="section-banner-bg" style={{ backgroundImage: "url('/images/ro-purifier.jpg')" }}></div>
        <div className="section-banner-overlay" style={{ background: 'linear-gradient(135deg,rgba(5,20,45,0.82) 0%,rgba(0,60,30,0.68) 60%,rgba(5,20,45,0.60) 100%)' }}></div>
        <div className="container">
          <div className="section-banner-content">
            <Link href="/locations" className="loc-back-link">
              <ArrowLeft size={15} /> All Service Areas
            </Link>
            <div className="section-tag" style={{ marginTop: '16px' }}><MapPin size={18} /> {loc.name}</div>
            <h1>RO Service in {loc.name}</h1>
            <p>Expert RO water purifier repair, installation &amp; AMC service right in {loc.name}. Certified technicians available same day. All brands covered.</p>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href="tel:07030370076" className="btn btn-call"><Phone size={14} /> Call Now — 07030370076</a>
              <a href="https://wa.me/917030370076" target="_blank" rel="noopener" className="btn btn-ghost">WhatsApp Us</a>
            </div>
            <div className="section-banner-stats">
              <div><span className="section-banner-stat-num">Same Day</span><span className="section-banner-stat-label">Service Available</span></div>
              <div><span className="section-banner-stat-num">All Brands</span><span className="section-banner-stat-label">Supported</span></div>
              <div><span className="section-banner-stat-num">7 Days</span><span className="section-banner-stat-label">Open All Week</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="section" aria-labelledby="loc-services-heading">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">What We Offer</div>
            <h2 id="loc-services-heading" className="section-title">RO Services Available in {loc.name}</h2>
            <p className="section-subtitle">We offer complete RO water purifier solutions for homes and offices in {loc.name} and surrounding areas.</p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <article key={i} className={`service-card reveal reveal-delay-${i + 1}`}>
                <div className="service-card-icon"><s.icon size={22} /></div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link href="/contact" className="service-card-link">Book Now →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section section--bg" aria-labelledby="loc-why-heading">
        <div className="container">
          <div className="loc-why-grid">
            <div className="loc-why-content reveal">
              <div className="section-tag">Why Choose Us</div>
              <h2 id="loc-why-heading">Trusted RO Service in {loc.name}</h2>
              <p>We have served hundreds of customers in {loc.name} and nearby areas. Our technicians arrive on time, diagnose accurately, and fix the issue right the first time.</p>
              <ul className="loc-why-list">
                {whyUs.map((item, i) => (
                  <li key={i}><CheckCircle size={16} className="loc-check-icon" /> {item}</li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: '12px', marginTop: '28px', flexWrap: 'wrap' }}>
                <a href="tel:07030370076" className="btn btn-primary"><Phone size={14} /> Call 07030370076</a>
                <Link href="/contact" className="btn btn-outline">Book Online</Link>
              </div>
            </div>
            <div className="loc-why-card reveal reveal-delay-2">
              <div className="loc-info-card">
                <h3>Service Info — {loc.name}</h3>
                <div className="loc-info-row"><span className="loc-info-label">Area</span><span>{loc.name}, Pune</span></div>
                <div className="loc-info-row"><span className="loc-info-label">Response Time</span><span>2–4 Hours</span></div>
                <div className="loc-info-row"><span className="loc-info-label">Availability</span><span>Mon–Sun, 8 AM–11:30 PM</span></div>
                <div className="loc-info-row"><span className="loc-info-label">Brands Serviced</span><span>All Major Brands</span></div>
                <div className="loc-info-row"><span className="loc-info-label">Phone</span><span><a href="tel:07030370076">07030370076</a></span></div>
                <a href="tel:07030370076" className="btn btn-call w-full" style={{ marginTop: '20px', justifyContent: 'center' }}>
                  <Phone size={14} /> Book RO Service Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEARBY AREAS */}
      <section className="section" aria-labelledby="nearby-heading">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag"><MapPin size={15} /> Nearby Areas</div>
            <h2 id="nearby-heading" className="section-title">We Also Serve Near {loc.name}</h2>
            <p className="section-subtitle">Our technicians cover {loc.name} and all surrounding localities. Check other service areas below.</p>
          </div>
          <div className="loc-area-grid reveal">
            {nearby.map((l) => (
              <Link key={l.slug} href={`/locations/${l.slug}`} className="loc-area-card">
                <div className="loc-area-card-icon"><MapPin size={16} /></div>
                <span className="loc-area-card-name">{l.name}</span>
                <span className="loc-area-card-cta">View →</span>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/locations" className="btn btn-outline">View All 35+ Service Areas</Link>
          </div>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
