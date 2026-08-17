import PageHero from '@/components/PageHero';
import FaqSection from '@/components/FaqSection';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import Image from 'next/image';
import { Droplet, Phone, MessageCircle, Wrench, Settings, RefreshCw, ClipboardList, Zap, Lock, User, Coins, Clock } from 'lucide-react';

export const metadata = {
  title: 'Aquaguard RO Service Pune | Aquaguard Service Centre | AquaguardService',
  description: 'Expert Aquaguard RO service, repair & installation in Pune. Aquaguard water purifier service near me. Call 07030370076 for same-day Aquaguard RO service.',
};

const faqs = [
  { q: 'Do you provide Aquaguard service at home in Pune?', a: 'Yes! We provide doorstep Aquaguard RO water purifier service across all areas of Pune and Pimpri-Chinchwad. Same-day slots available.' },
  { q: 'How much does Aquaguard RO service cost in Pune?', a: 'Basic Aquaguard RO service starts from ₹299. Filter change, membrane replacement, and repair costs vary by model. We give a transparent estimate before starting.' },
  { q: 'How often should I service my Aquaguard water purifier?', a: "We recommend servicing your Aquaguard RO every 6 months. Pune's hard water can clog filters faster. Annual Maintenance Contracts (AMC) are also available." },
  { q: 'Do you use genuine Aquaguard spare parts?', a: 'Yes, we use only genuine or high-quality compatible parts for Aquaguard RO purifiers — filters, membranes, pumps and more.' }
];

export default function Page() {
  return (
    <main>
      <PageHero
        tag='Aquaguard RO Service'
        title='Aquaguard RO Service in Pune'
        subtitle='Certified Aquaguard RO water purifier repair, installation, filter change and AMC in Pune & Pimpri-Chinchwad. Call 07030370076 for same-day service.'
        image='/images/hero-aquaguard.jpg'
        imageAlt='Aquaguard RO service technician Pune'
        breadcrumbLabel='Aquaguard RO Service in Pune'
      />

      <section className="section" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Our Services</div>
            <h2 id="services-heading" className="section-title">Aquaguard RO Service in Pune — Services We Offer</h2>
          </div>
          <div className="services-grid">
            <article className="service-card reveal reveal-delay-1"><div className="service-card-icon"><Wrench size={20} /></div><h3>Aquaguard RO Repair</h3><p>Expert diagnosis and repair for all Aquaguard RO purifier faults — low flow, bad taste, leakage, motor issues.</p><Link href="/contact" className="service-card-link">Book Repair →</Link></article>
            <article className="service-card reveal reveal-delay-2"><div className="service-card-icon"><Settings size={20} /></div><h3>Aquaguard RO Installation</h3><p>Professional installation of Aquaguard wall-mounted, under-sink and countertop RO systems.</p><Link href="/contact" className="service-card-link">Book Installation →</Link></article>
            <article className="service-card reveal reveal-delay-3"><div className="service-card-icon"><RefreshCw size={20} /></div><h3>Filter & Membrane Change</h3><p>Timely replacement of Aquaguard pre-filters, carbon filters and RO membranes.</p><Link href="/contact" className="service-card-link">Book Service →</Link></article>
            <article className="service-card reveal reveal-delay-4"><div className="service-card-icon"><ClipboardList size={20} /></div><h3>AMC — Annual Maintenance</h3><p>Worry-free Aquaguard RO AMC plans covering regular servicing and filter replacement.</p><Link href="/contact" className="service-card-link">Get AMC Quote →</Link></article>
          </div>
        </div>
      </section>

      <section className="section section--bg" aria-labelledby="why-heading">
        <div className="container">
          <div className="why-grid">
            <div className="why-image-wrap reveal">
              <Image src="/images/service-team.jpg" alt="RO service team Pune" width={600} height={480} />
            </div>
            <div>
              <div className="section-tag">Why Choose Us</div>
              <h2 id="why-heading" className="section-title" style={{ textAlign:'left', marginBottom:'32px' }}>Pune's Most Trusted RO Service Team</h2>
              <div className="why-features">
              <div className="why-feature reveal "><div className="why-feature-icon"><Zap size={20} /></div><div className="why-feature-text"><h4>Same-Day Service</h4><p>Book before noon, get service the same day across 35+ areas in Pune.</p></div></div>
              <div className="why-feature reveal reveal-delay-1"><div className="why-feature-icon"><Lock size={20} /></div><div className="why-feature-text"><h4>Genuine Parts Only</h4><p>We use only certified, genuine spare parts and filters.</p></div></div>
              <div className="why-feature reveal reveal-delay-2"><div className="why-feature-icon"><User size={20} /></div><div className="why-feature-text"><h4>Certified Technicians</h4><p>Trained and experienced in servicing all major RO brands.</p></div></div>
              <div className="why-feature reveal reveal-delay-3"><div className="why-feature-icon"><Coins size={20} /></div><div className="why-feature-text"><h4>Transparent Pricing</h4><p>No hidden charges. Clear estimate before work begins.</p></div></div>
              <div className="why-feature reveal reveal-delay-4"><div className="why-feature-icon"><Clock size={20} /></div><div className="why-feature-text"><h4>Open 7 Days, Till 11:30 PM</h4><p>Available Monday to Sunday, 8 AM to 11:30 PM.</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection faqs={faqs} />
      <ContactForm />
    </main>
  );
}
