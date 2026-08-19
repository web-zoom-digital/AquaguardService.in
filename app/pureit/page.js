import PageHero from '@/components/PageHero';
import FaqSection from '@/components/FaqSection';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import Image from 'next/image';
import { Disc3, Phone, MessageCircle, Wrench, Settings, RefreshCw, ClipboardList, Zap, Lock, User, Coins, Clock } from 'lucide-react';

export const metadata = {
  title: 'Pureit RO Service Pune | Pureit Water Purifier Near Me | AquaguardService',
  description: 'Pureit RO service, installation & repair in Pune. Pureit water purifier service near me. Call 07030370076 for same-day Pureit water purifier service.',
};

const faqs = [
  { q: 'Pureit RO me Germkill kit (GKK) change karne ka kitna kharcha aata hai?', a: 'Pureit ki GKK ki price model par depend karti hai (jaise Classic, Advanced, Marvella). GKK change karna bahut zaroori hai kyunki iske bina machine kaam nahi karti. Hum best market price me GKK replace karke dete hain.' },
  { q: 'Mera Pureit RO baar baar beep kyu kar raha hai?', a: 'HUL Pureit me ek advance alert system hota hai. Agar aapko lagatar beep sunayi de rahi hai, toh iska matlab aapka filter ya Germkill kit khatam hone wala hai. Aap abhi call karke advance me change karwa sakte hain.' },
  { q: 'Pureit Classic model me paani leak ho raha hai tank se, kya karein?', a: 'Yeh problem aksar tap ke loose hone ya tank me hair-line crack aane se hoti hai. Humara technician aa kar check karega aur wahi spot pe tap ya part replace kar dega.' },
  { q: 'Pureit Copper+ RO ki servicing ho jayegi kya?', a: 'Haan ji bilkul! Pureit Copper+ RO me special copper charge technology hoti hai. Hum uske specific filters aur copper plates ko acche se clean aur service karte hain.' },
  { q: 'Machine on hai par paani nahi aa raha, kya reason ho sakta hai?', a: 'Aise me ho sakta hai ki aapka pre-filter puri tarah choke ho gaya ho, ya phir solenoid valve kharab ho. Hum aake pressure check karenge aur jo fault hoga wahi fix karenge.' },
  { q: 'Kya Pureit RO ka AMC plan available hai?', a: 'Haan, hum HUL Pureit ke sabhi models ka AMC plan dete hain. Isme saal me filters change hote hain aur machine break-down hone par labor charge free rehta hai.' },
  { q: 'Kharadi area me same-day service mil jayegi?', a: 'Haan! Hum Kharadi, Viman Nagar, Magarpatta aur pure Pune me same day service offer karte hain. Subah book karne par shaam tak kaam pakka ho jata hai.' },
  { q: 'Kya aap original HUL ke parts lagate ho?', a: '100% genuine HUL parts aur GKK hi use karte hain. Saste local parts lagane se aapki machine ki life kam ho jati hai aur paani bhi safe nahi rehta.' },
  { q: 'RO ke andar se ajeeb si aawaz aa rahi hai jab wo chalta hai?', a: 'Yeh aawaz booster pump se aa rahi hogi. Pump purana hone par aawaz karne lagta hai. Kabhi kabhi sirf repairing se kaam chal jata hai, warna naya pump lagana padega.' },
  { q: 'Purana Pureit nikaal ke naye flat me lagwana hai, kya process hai?', a: 'Hum uninstallation aur installation dono ki service dete hain. Pimpri-Chinchwad ya Pune me aap kahin bhi shift ho rahe hon, hum safe shifting karwa denge.' },
  { q: 'Paani ka taste thoda kadwa (bitter) lag raha hai, aisa kyun?', a: 'Iska matlab aapke RO ka post-carbon filter expire ho gaya hai ya TDS galat hai. Post-carbon filter change karte hi paani wapas meetha aur normal ho jayega.' }
];

export default function Page() {
  return (
    <main>
      <PageHero
        tag='Pureit RO Service'
        title='Pureit RO Service in Pune'
        subtitle='HUL Pureit water purifier repair, filter change, installation & AMC in Pune. Same-day service. Call 07030370076.'
        image='/images/hero-pureit.jpg'
        imageAlt='Pureit RO service Pune'
        breadcrumbLabel='Pureit RO Service in Pune'
      />

      <section className="section" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Our Services</div>
            <h2 id="services-heading" className="section-title">Pureit RO Service in Pune — Services We Offer</h2>
          </div>
          <div className="services-grid">
            <article className="service-card reveal reveal-delay-1"><div className="service-card-icon"><Wrench size={20} /></div><h3>Pureit RO Repair</h3><p>Expert diagnosis and repair for all Pureit RO purifier faults — low flow, bad taste, leakage, motor issues.</p><Link href="/contact" className="service-card-link">Book Repair →</Link></article>
            <article className="service-card reveal reveal-delay-2"><div className="service-card-icon"><Settings size={20} /></div><h3>Pureit RO Installation</h3><p>Professional installation of Pureit wall-mounted, under-sink and countertop RO systems.</p><Link href="/contact" className="service-card-link">Book Installation →</Link></article>
            <article className="service-card reveal reveal-delay-3"><div className="service-card-icon"><RefreshCw size={20} /></div><h3>Filter & Membrane Change</h3><p>Timely replacement of Pureit pre-filters, carbon filters and RO membranes.</p><Link href="/contact" className="service-card-link">Book Service →</Link></article>
            <article className="service-card reveal reveal-delay-4"><div className="service-card-icon"><ClipboardList size={20} /></div><h3>AMC — Annual Maintenance</h3><p>Worry-free Pureit RO AMC plans covering regular servicing and filter replacement.</p><Link href="/contact" className="service-card-link">Get AMC Quote →</Link></article>
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
