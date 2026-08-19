import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import FaqSection from '@/components/FaqSection';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import TestimonialsMarquee from '@/components/TestimonialsMarquee';
import BrandSpecialistsGrid from '@/components/BrandSpecialistsGrid';
import { Phone, MessageCircle, CheckCircle, Zap, Lock, User, Coins, Clock, Wrench, Settings, RefreshCw, ClipboardList, Factory, Droplets, Droplet, Disc3, Hexagon, Gem, Tags, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'RO Service Pune | Aquaguard, Kent, Pureit Water Purifier Repair | AquaguardService',
  description: 'Expert RO water purifier service, repair & installation in Pune & Pimpri-Chinchwad. Aquaguard, Kent RO, Pureit, AO Smith, Livpure & all brands. Call 07030370076. Same-day service.',
};

const faqs = [
  { q: 'Bhaiya, RO service book karne ke baad technician kitni der me aata hai?', a: 'Pune me humari koshish rehti hai ki 2 se 3 ghante ke andar technician aapke ghar pahunch jaye. Same-day service bilkul available hai, bas aap subah ya dopahar me book kar lijiye.' },
  { q: 'What is the visiting charge if I just want to get my RO checked?', a: 'Humara basic visiting and inspection charge bahut hi nominal (₹150-₹200) hai. Agar aap repair karwa lete hain, toh yeh visiting charge waive off (free) ho jata hai!' },
  { q: 'RO se continuously paani leak ho raha hai, kya problem ho sakti hai?', a: 'Leakage ke kai reason ho sakte hain - jaise loose fittings, pipe cut hona, ya filter housing ka crack hona. Humara technician aake exact issue bata dega aur wahi pe repair kar dega.' },
  { q: 'Filter change karne ka kitna kharcha aayega?', a: 'Filter change ka cost depend karta hai ki kaunsa filter kharab hai (Spun, Carbon, ya RO Membrane) aur aapka purifier kaunsi brand ka hai. Hum genuine parts use karte hain aur market se better price dete hain.' },
  { q: 'Can you service my 8-year-old local brand RO?', a: 'Haan bilkul! Hum saare branded (Aquaguard, Kent) aur unbranded (local assembled) RO purifiers ki service aur repair karte hain.' },
  { q: 'Paani ka taste thoda kadwa aa raha hai, aisa kyun?', a: 'Iska matlab aapke RO ki membrane block ho gayi hai ya TDS level galat set hai. Membrane change karne se paani ka taste wapas bisleri jaisa meetha ho jayega.' },
  { q: 'Kya aap repair mein genuine company ke parts use karte hain?', a: '100% genuine parts! Hum duplicate ya saste parts use nahi karte kyunki hume pata hai ki peene ke paani ki quality kitni important hai. Har part par warranty milti hai.' },
  { q: 'Do you provide Annual Maintenance Contracts (AMC)?', a: 'Yes, hum 1-year aur 2-year ke AMC plans offer karte hain jisme periodic servicing aur filter changes cover hote hain. Yeh plans aapke monthly kharche ko bahut bacha lete hain.' },
  { q: 'Mera RO machine bilkul on nahi ho raha, dead lag raha hai?', a: 'Aise case me mostly SMPS (power adapter) jal gaya hota hai ya wiring me issue hota hai. Ghabraiye mat, yeh bahut minor issue hai jo on-the-spot fix ho jayega.' },
  { q: 'What payment methods do you accept after service?', a: 'Aap technician ko directly Google Pay, PhonePe, Paytm, ya Cash de sakte hain. Service complete hone ke baad hi payment karni hoti hai.' },
  { q: 'Hinjewadi me service available hai kya?', a: 'Haan ji! Hum Hinjewadi, Wakad, Baner, Kothrud, Kharadi, Hadapsar aur pure Pune & Pimpri-Chinchwad me service dete hain.' }
];

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="hero" aria-label="Hero section">
        <div className="hero-grid-pattern" aria-hidden="true"></div>
        <div className="container">
          <div className="hero-inner">
            <div className="hero-content">
              <div className="hero-badge">
                <span className="hero-badge-dot" aria-hidden="true"></span>
                Pune's Trusted RO Service Center
              </div>
              <h1 className="hero-title">
                RO Water Purifier<br />Service in <span>Pune</span>
              </h1>
              <p className="hero-subtitle">
                Expert repair, installation & AMC for <strong>Aquaguard, Kent, Pureit, AO Smith, Livpure</strong> and all other brands. Same-day service across Pune & Pimpri-Chinchwad.
              </p>
              <div className="hero-actions">
                <a href="tel:07030370076" className="btn btn-call btn-lg" id="hero-call-btn">
                  <Phone size={14} /> Call: 07030370076
                </a>
                <a href="https://wa.me/917030370076" className="btn btn-whatsapp btn-lg" target="_blank" rel="noopener" id="hero-whatsapp-btn" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <WhatsAppIcon size={18} /> WhatsApp
                </a>
              </div>
              <div className="hero-stats">
                <div className="hero-stat"><span className="hero-stat-num">5000+</span><span className="hero-stat-label">Purifiers Serviced</span></div>
                <div className="hero-stat"><span className="hero-stat-num">35+</span><span className="hero-stat-label">Areas Covered</span></div>
                <div className="hero-stat"><span className="hero-stat-num">15+</span><span className="hero-stat-label">Brands Supported</span></div>
              </div>
            </div>
            <div className="hero-image-wrap" aria-hidden="true">
              <div className="hero-image-card">
                <Image src="/images/hero-technician.jpg" alt="RO water purifier service technician in Pune" width={600} height={520} priority />
              </div>
              <div className="hero-float-card card-1">
                <div className="float-icon green"><CheckCircle size={14} style={{ color: 'var(--success)' }} /></div>
                <div><div className="float-title">Same Day Service</div><div className="float-sub">Book & get serviced today</div></div>
              </div>
              <div className="hero-float-card card-2">
                <div className="float-icon blue">⭐</div>
                <div><div className="float-title">4.8/5 Rating</div><div className="float-sub">500+ happy customers</div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shape-divider">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C300,120 900,0 1200,60 V120 H0 V60 Z" className="shape-fill"></path>
          </svg>
        </div>
      </section>

      {/* BRANDS STRIP */}
      <section className="brands-strip" aria-label="Brands we service">
        <div className="container">
          <div className="brands-strip-inner">
            <Link href="/aquaguard" className="brand-chip"><span className="brand-emoji"><Droplet size={18} /></span> Aquaguard</Link>
            <Link href="/kent-ro" className="brand-chip"><span className="brand-emoji"><Disc3 size={18} /></span> Kent RO</Link>
            <Link href="/pureit" className="brand-chip"><span className="brand-emoji"><Disc3 size={18} /></span> Pureit</Link>
            <Link href="/ao-smith" className="brand-chip"><span className="brand-emoji"><Hexagon size={18} /></span> AO Smith</Link>
            <Link href="/livpure" className="brand-chip"><span className="brand-emoji"><Gem size={18} /></span> Livpure</Link>
            <Link href="/all-brands" className="brand-chip"><span className="brand-emoji"><Tags size={18} /></span> LG</Link>
            <Link href="/all-brands" className="brand-chip"><span className="brand-emoji"><Zap size={18} /></span> Sharp</Link>
            <Link href="/all-brands" className="brand-chip"><span className="brand-emoji"><Zap size={18} /></span> Havells</Link>
            <Link href="/all-brands" className="brand-chip"><span className="brand-emoji">+More</span></Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section section--bg" aria-labelledby="why-heading">
        <div className="container">
          <div className="why-grid">
            <div className="why-image-wrap reveal">
              <Image src="/images/service-team.jpg" alt="Professional RO service team in Pune" width={600} height={480} />
            </div>
            <div>
              <div className="section-tag">Why Choose Us</div>
              <h2 id="why-heading" className="section-title" style={{ textAlign: 'left', marginBottom: '32px' }}>Pune's Most Trusted RO Service Team</h2>
              <div className="why-features">
                <div className="why-feature reveal"><div className="why-feature-icon"><Zap size={20} /></div><div className="why-feature-text"><h4>Same-Day Service</h4><p>Book before noon, get service the same day. We cover 35+ areas in Pune & Pimpri-Chinchwad.</p></div></div>
                <div className="why-feature reveal reveal-delay-1"><div className="why-feature-icon"><Lock size={20} /></div><div className="why-feature-text"><h4>Genuine Parts Only</h4><p>We use only certified, genuine spare parts and filters to ensure long-lasting performance.</p></div></div>
                <div className="why-feature reveal reveal-delay-2"><div className="why-feature-icon"><User size={20} /></div><div className="why-feature-text"><h4>Certified Technicians</h4><p>Our team is trained and experienced in servicing all major RO brands and models.</p></div></div>
                <div className="why-feature reveal reveal-delay-3"><div className="why-feature-icon"><Coins size={20} /></div><div className="why-feature-text"><h4>Transparent Pricing</h4><p>No hidden charges. You get a clear estimate before work begins. Pay only for what's done.</p></div></div>
                <div className="why-feature reveal reveal-delay-4"><div className="why-feature-icon"><Clock size={20} /></div><div className="why-feature-text"><h4>Open Till 11:30 PM</h4><p>We're available 7 days a week from 8 AM to 11:30 PM for bookings and support.</p></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND PAGES */}
      <section className="section" aria-labelledby="brands-heading">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Brand Specialists</div>
            <h2 id="brands-heading" className="section-title">We Service All Major RO Brands</h2>
            <p className="section-subtitle">Select your brand to learn more about our dedicated service for your water purifier.</p>
          </div>
          <BrandSpecialistsGrid />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" aria-labelledby="testimonials-heading">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Customer Reviews</div>
            <h2 id="testimonials-heading" className="section-title">What Our Customers Say</h2>
          </div>
          <TestimonialsMarquee />
        </div>
      </section>

      {/* FAQ */}
      <FaqSection faqs={faqs} />

      {/* CONTACT FORM */}
      <ContactForm />

    </main>
  );
}
