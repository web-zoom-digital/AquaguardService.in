import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import FaqSection from '@/components/FaqSection';
import WhatsAppIcon from '@/components/WhatsAppIcon';
import { Phone, MessageCircle, CheckCircle, Zap, Lock, User, Coins, Clock, Wrench, Settings, RefreshCw, ClipboardList, Factory, Droplets, Droplet, Disc3, Hexagon, Gem, Tags } from 'lucide-react';

export const metadata = {
  title: 'RO Service Pune | Aquaguard, Kent, Pureit Water Purifier Repair | AquaguardService',
  description: 'Expert RO water purifier service, repair & installation in Pune & Pimpri-Chinchwad. Aquaguard, Kent RO, Pureit, AO Smith, Livpure & all brands. Call 07030370076. Same-day service.',
};

const faqs = [
  { q: 'How do I book an RO service in Pune?', a: 'Simply call us at 07030370076 or send a WhatsApp message. Tell us your location in Pune, the brand of your RO purifier, and the issue. We\'ll book a convenient time slot for you — same-day service available.' },
  { q: 'Which brands of RO water purifiers do you service?', a: 'We service all major brands including Aquaguard, Kent RO, Pureit (HUL), AO Smith, Livpure, LG, Sharp, Faber, Havells, Blue Star, Zero B, Aquafresh, Aquamarine, Lexpure, Bluemount, Nasaka, Usha, Hindware, and more.' },
  { q: 'Do you provide same-day RO service in Pune?', a: 'Yes! We offer same-day RO service across most areas of Pune and Pimpri-Chinchwad. Book before noon for guaranteed same-day service. Our technicians cover Wakad, Hinjewadi, Baner, Kharadi, Hadapsar, and 35+ more areas.' },
  { q: 'What is the cost of RO service in Pune?', a: 'Basic RO service (cleaning + checkup) starts from ₹299. Filter changes, membrane replacement, and repair costs vary by brand and issue. We provide a transparent estimate before starting any work — no hidden charges.' },
  { q: 'How often should I get my RO purifier serviced?', a: 'We recommend a full service every 6 months. Pune\'s water (especially in Wakad, Hinjewadi, and hard water zones) can clog filters faster. The membrane should be replaced every 2–3 years depending on usage.' },
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
          <div className="brand-pages-grid">
            <Link href="/aquaguard" className="brand-page-card reveal"><div className="brand-icon-wrap"><Droplet size={20} /></div><div className="brand-page-info"><h3>Aquaguard RO Service</h3><p>Aquaguard RO service, repair & installation in Pune. Eureka Forbes authorised support.</p></div></Link>
            <Link href="/kent-ro" className="brand-page-card reveal reveal-delay-1"><div className="brand-icon-wrap"><Disc3 size={20} /></div><div className="brand-page-info"><h3>Kent RO Service Pune</h3><p>Kent RO repair, filter change & AMC service near you in Pune & Pimpri-Chinchwad.</p></div></Link>
            <Link href="/pureit" className="brand-page-card reveal reveal-delay-2"><div className="brand-icon-wrap"><Disc3 size={20} /></div><div className="brand-page-info"><h3>Pureit RO Service Pune</h3><p>HUL Pureit water purifier service, installation & repair across Pune.</p></div></Link>
            <Link href="/ao-smith" className="brand-page-card reveal reveal-delay-3"><div className="brand-icon-wrap"><Hexagon size={20} /></div><div className="brand-page-info"><h3>AO Smith RO Service</h3><p>AO Smith water purifier service, RO system installation & repair in Pune.</p></div></Link>
            <Link href="/livpure" className="brand-page-card reveal"><div className="brand-icon-wrap"><Gem size={20} /></div><div className="brand-page-info"><h3>Livpure RO Service Pune</h3><p>Livpure RO repair, service center & AMC plans available in Pune.</p></div></Link>
            <Link href="/all-brands" className="brand-page-card reveal reveal-delay-1"><div className="brand-icon-wrap"><Tags size={20} /></div><div className="brand-page-info"><h3>All Other Brands</h3><p>LG, Sharp, Faber, Havells, Blue Star, Zero B, Aquafresh, Nasaka, Usha, Hindware & more.</p></div></Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" aria-labelledby="testimonials-heading">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Customer Reviews</div>
            <h2 id="testimonials-heading" className="section-title">What Our Customers Say</h2>
          </div>
          <div className="testimonials-grid">
            <article className="testimonial-card reveal"><div className="testimonial-stars">★★★★★</div><p className="testimonial-text">"Excellent service! The technician came within 2 hours and fixed my Aquaguard RO. Very professional and explained everything clearly."</p><div className="testimonial-author"><div className="testimonial-avatar">R</div><div><div className="testimonial-name">Rahul Patil</div><div className="testimonial-location">Wakad, Pune</div></div></div></article>
            <article className="testimonial-card reveal reveal-delay-1"><div className="testimonial-stars">★★★★★</div><p className="testimonial-text">"Got my Kent RO serviced and filters changed. Pricing was fair and transparent. Will definitely call again for the AMC."</p><div className="testimonial-author"><div className="testimonial-avatar">S</div><div><div className="testimonial-name">Sneha Joshi</div><div className="testimonial-location">Baner, Pune</div></div></div></article>
            <article className="testimonial-card reveal reveal-delay-2"><div className="testimonial-stars">★★★★★</div><p className="testimonial-text">"AO Smith RO installation done perfectly. The team was on time, clean and professional. Very happy with the service."</p><div className="testimonial-author"><div className="testimonial-avatar">A</div><div><div className="testimonial-name">Amit Sharma</div><div className="testimonial-location">Hinjewadi, Pune</div></div></div></article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection faqs={faqs} />

      {/* CONTACT FORM */}
      <ContactForm />

    </main>
  );
}
