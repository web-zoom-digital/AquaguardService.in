import PageHero from '@/components/PageHero';
import FaqSection from '@/components/FaqSection';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import Image from 'next/image';
import { Disc3, Phone, MessageCircle, Wrench, Settings, RefreshCw, ClipboardList, Zap, Lock, User, Coins, Clock } from 'lucide-react';

export const metadata = {
  title: 'Kent RO Service Pune | Kent RO Repair Near Me | AquaguardService',
  description: 'Kent RO service, repair, filter change & AMC in Pune. Kent RO service near me. Call 07030370076 for fast Kent water purifier service in Pune.',
};

const faqs = [
  { q: 'Kent RO ka TDS meter kaise set karte hain?', a: 'Kent models me TDS controller diya hota hai. Humare technician TDS meter se tap water aur RO water check karke TDS ko 50-150 ke bich me perfectly set kar dete hain taaki paani me minerals bani rahein.' },
  { q: 'UV lamp change karne ka kya charge hai Kent Grand me?', a: 'UV lamp ka cost around ₹450 se ₹600 ke bich aata hai depending on wattage (11W). Yeh paani ke bacteria ko marta hai, isliye agar UV fail alarm baje toh isko turant change karwana chahiye.' },
  { q: 'Mere Kent RO se lagatar aawaz aa rahi hai (beeping), kya issue hai?', a: 'Beep sound aane ke 2 main reason hote hain Kent me - ya toh UV lamp fail ho gaya hai, ya filter change alarm baj raha hai. Dono cases me technician ko bula kar part change karwana padega.' },
  { q: 'Kent RO ki membrane block ho gayi hai, original wali milegi?', a: 'Haan, hum 100% genuine Kent RO membrane (75 GPD / 100 GPD) use karte hain. Membrane block hone par paani ka flow bahut kam ho jata hai.' },
  { q: 'RO ka reject water flow band ho gaya hai, kya problem hai?', a: 'Iska matlab aapke RO ka FR (Flow Restrictor) block ho gaya hai. FR block hone se RO membrane jaldi kharab ho sakti hai. Isko jaldi se replace karwana zaroori hai.' },
  { q: 'Filter change package me kya kya cover hota hai?', a: 'Kent filter kit me normally Sediment Filter, Pre-Carbon Filter aur Post-Carbon filter change hota hai. Iske sath hum pure tank ki deep cleaning free me karte hain.' },
  { q: 'Kya aap Baner ya Wakad area me Kent RO service dete hain?', a: 'Bilkul! Baner, Wakad, Balewadi, Pimple Saudagar me humari 4 teams har roz kaam karti hain. Aap jab call karenge, within hours service mil jayegi.' },
  { q: 'Naya Kent RO shift karwana hai dusre flat me, installation ka kitna charge hai?', a: 'Uninstallation aur re-installation dono milake nominal charges hote hain. Hum pipe fitting aur leakage check proper karke dete hain.' },
  { q: 'Kent Supreme aur Kent Pearl dono ki service ho jayegi?', a: 'Haan ji, Kent Grand, Grand+, Supreme, Pearl, Pride - hum Kent ke sabhi models ka repair aur service karte hain.' },
  { q: 'Kya service ke baad parts par warranty milti hai?', a: 'Haan, jo bhi naya filter, membrane ya electrical part (pump, SMPS, SV) hum lagate hain, us par company ki taraf se proper warranty milti hai. Bill me sab likha hota hai.' },
  { q: 'Mera RO chalte chalte achanak band ho gaya, light nahi aa rahi?', a: 'Wiring loose ho sakti hai ya SMPS (adapter) kharab ho gaya hoga. Yeh bahut common issue hai jo adhe ghante me solve ho jayega aapke ghar par hi.' }
];

export default function Page() {
  return (
    <main>
      <PageHero
        tag='Kent RO Service'
        title='Kent RO Service in Pune'
        subtitle='Expert Kent RO water purifier service, repair and installation in Pune & Pimpri-Chinchwad. Same-day service available. Call 07030370076.'
        image='/images/hero-kent.jpg'
        imageAlt='Kent RO service technician Pune'
        breadcrumbLabel='Kent RO Service in Pune'
      />

      <section className="section" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Our Services</div>
            <h2 id="services-heading" className="section-title">Kent RO Service in Pune — Services We Offer</h2>
          </div>
          <div className="services-grid">
            <article className="service-card reveal reveal-delay-1"><div className="service-card-icon"><Wrench size={20} /></div><h3>Kent RO Repair</h3><p>Expert diagnosis and repair for all Kent RO purifier faults — low flow, bad taste, leakage, motor issues.</p><Link href="/contact" className="service-card-link">Book Repair →</Link></article>
            <article className="service-card reveal reveal-delay-2"><div className="service-card-icon"><Settings size={20} /></div><h3>Kent RO Installation</h3><p>Professional installation of Kent wall-mounted, under-sink and countertop RO systems.</p><Link href="/contact" className="service-card-link">Book Installation →</Link></article>
            <article className="service-card reveal reveal-delay-3"><div className="service-card-icon"><RefreshCw size={20} /></div><h3>Filter & Membrane Change</h3><p>Timely replacement of Kent pre-filters, carbon filters and RO membranes.</p><Link href="/contact" className="service-card-link">Book Service →</Link></article>
            <article className="service-card reveal reveal-delay-4"><div className="service-card-icon"><ClipboardList size={20} /></div><h3>AMC — Annual Maintenance</h3><p>Worry-free Kent RO AMC plans covering regular servicing and filter replacement.</p><Link href="/contact" className="service-card-link">Get AMC Quote →</Link></article>
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
