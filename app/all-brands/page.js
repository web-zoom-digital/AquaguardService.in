import PageHero from '@/components/PageHero';
import FaqSection from '@/components/FaqSection';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import { Tags, Monitor, Zap, Flame, Settings, Snowflake, Waves, Droplets, Droplet, Disc, Hexagon } from 'lucide-react';

export const metadata = {
  title: 'All RO Brands Service Pune | LG, Sharp, Faber, Havells, Zero B | AquaguardService',
  description: 'RO water purifier service for all brands in Pune — LG, Sharp, Faber, Havells, Blue Star, Zero B, Aquafresh, Lexpure, Nasaka, Usha, Hindware & commercial RO plants.',
};

const faqs = [
  { q: 'Do you service all RO brands in Pune?', a: 'Yes! We service all major and minor RO brands including LG, Sharp, Faber, Havells, Blue Star, Zero B, Aquafresh, Aquagrand, Aquamarine, Lexpure, Bluemount, Nasaka, Usha, Hindware, and commercial RO plants.' },
  { q: 'Do you service commercial RO plants in Pune?', a: 'Yes! We service 25 LPH, 50 LPH, 100 LPH and higher capacity commercial RO plants for offices, factories, hospitals, schools, and housing societies.' },
  { q: 'How do I book RO service for my brand?', a: 'Simply call 07030370076 or WhatsApp us. Tell us your brand, model, and issue. We will schedule a technician visit at your convenience.' },
];

export default function AllBrandsPage() {
  return (
    <main>
      <PageHero
        tag="All RO Brands"
        title="All RO Brand Service & Repair in Pune"
        subtitle="We service all major RO water purifier brands in Pune — LG, Sharp, Faber, Havells, Blue Star, Zero B, Aquafresh, Aquagrand, Aquamarine, Lexpure, Bluemount, Nasaka, Usha, Hindware and commercial RO plants (25 LPH, 50 LPH, 100 LPH). Call 07030370076 for same-day service."
        image="/images/hero-all-brands.jpg"
        imageAlt="All RO brand filters and service Pune"
        breadcrumbLabel="All RO Brands Service Pune"
      />

      <section className="section" aria-labelledby="all-brands-heading">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">All Brands</div>
            <h2 id="all-brands-heading" className="section-title">RO Brands We Service in Pune</h2>
            <p className="section-subtitle">From premium brands to local brands — we repair and service all RO water purifiers in Pune & Pimpri-Chinchwad.</p>
          </div>
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))' }}>
            <article className="service-card reveal"><div className="service-card-icon"><Monitor size={24} /></div><h3>LG Water Purifier Service Pune</h3><p>LG RO service, repair and installation near you in Pune. All LG water purifier models covered.</p><Link href="/contact" className="service-card-link">Book Service →</Link></article>
            <article className="service-card reveal reveal-delay-1"><div className="service-card-icon"><Zap size={24} /></div><h3>Sharp RO Water Purifier Pune</h3><p>Sharp RO water purifier repair and installation in Pune. Sharp water purifier service near you.</p><Link href="/contact" className="service-card-link">Book Service →</Link></article>
            <article className="service-card reveal reveal-delay-2"><div className="service-card-icon"><Flame size={24} /></div><h3>Faber RO Service Pune</h3><p>Faber water purifier service, repair and maintenance in Pune and Pimpri-Chinchwad.</p><Link href="/contact" className="service-card-link">Book Service →</Link></article>
            <article className="service-card reveal reveal-delay-3"><div className="service-card-icon"><Settings size={24} /></div><h3>Havells RO Service Pune</h3><p>Havells RO service and water filter service in Pune. All Havells models — Max, Max Alkaline.</p><Link href="/contact" className="service-card-link">Book Service →</Link></article>
            <article className="service-card reveal"><div className="service-card-icon"><Snowflake size={24} /></div><h3>Blue Star Water Purifier Service</h3><p>Blue Star RO service, water filter service and installation in Pune.</p><Link href="/contact" className="service-card-link">Book Service →</Link></article>
            <article className="service-card reveal reveal-delay-1"><div className="service-card-icon"><Waves size={24} /></div><h3>Zero B RO Services Pune</h3><p>Zero B RO water purifier service, filter change and repair in Pune.</p><Link href="/contact" className="service-card-link">Book Service →</Link></article>
            <article className="service-card reveal reveal-delay-2"><div className="service-card-icon"><Droplets size={24} /></div><h3>Aquafresh RO Service Pune</h3><p>Aquafresh RO service, repair and installation near you in Pune. Aquafresh 25 LPH RO plant service.</p><Link href="/contact" className="service-card-link">Book Service →</Link></article>
            <article className="service-card reveal reveal-delay-3"><div className="service-card-icon"><Droplet size={24} /></div><h3>Aquagrand RO Pune</h3><p>Aquagrand RO service and Aquagrand 50 LPH RO plant installation and repair in Pune.</p><Link href="/contact" className="service-card-link">Book Service →</Link></article>
            <article className="service-card reveal"><div className="service-card-icon"><Disc size={24} /></div><h3>Aquamarine RO Service Pune</h3><p>Aquamarine RO service, repair and installation in Pune and nearby areas.</p><Link href="/contact" className="service-card-link">Book Service →</Link></article>
            <article className="service-card reveal reveal-delay-1"><div className="service-card-icon"><Hexagon size={24} /></div><h3>Lexpure RO Service Pune</h3><p>Lexpure RO service, water purifier repair, Lexpure 50 LPH and 100 LPH RO plant service.</p><Link href="/contact" className="service-card-link">Book Service →</Link></article>
            <article className="service-card reveal reveal-delay-2"><div className="service-card-icon"><Droplets size={24} /></div><h3>Nasaka RO Water Purifier</h3><p>Nasaka RO water purifier service, repair and installation in Pune.</p><Link href="/contact" className="service-card-link">Book Service →</Link></article>
            <article className="service-card reveal reveal-delay-3"><div className="service-card-icon"><Waves size={24} /></div><h3>Usha Water Purifier Service</h3><p>Usha water purifier service, repair and installation in Pune and Pimpri-Chinchwad.</p><Link href="/contact" className="service-card-link">Book Service →</Link></article>
            <article className="service-card reveal"><div className="service-card-icon"><Settings size={24} /></div><h3>Hindware Water Purifier</h3><p>Hindware water purifier service, repair and AMC in Pune. All Hindware models covered.</p><Link href="/contact" className="service-card-link">Book Service →</Link></article>
            <article className="service-card reveal reveal-delay-1"><div className="service-card-icon"><Monitor size={24} /></div><h3>Commercial RO Plant Service</h3><p>Commercial and industrial RO plant service — 25 LPH, 50 LPH, 100 LPH systems for offices and factories.</p><Link href="/contact" className="service-card-link">Get Quote →</Link></article>
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <ContactForm />
    </main>
  );
}
