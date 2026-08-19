import PageHero from '@/components/PageHero';
import FaqSection from '@/components/FaqSection';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import Image from 'next/image';
import { Hexagon, Phone, MessageCircle, Wrench, Settings, RefreshCw, ClipboardList, Zap, Lock, User, Coins, Clock } from 'lucide-react';

export const metadata = {
  title: 'AO Smith RO Service Pune | AO Smith Water Purifier Near Me | AquaguardService',
  description: 'AO Smith water purifier service, RO system installation & repair in Pune. AO Smith RO service near me. Call 07030370076.',
};

const faqs = [
  { q: 'AO Smith RO me hot water aana band ho gaya hai, kya kharab hua hoga?', a: 'AO Smith ke hot water models (jaise Z8, Z9) me heater tank ya thermostat me fault aa sakta hai. Humara technician heater coil aur sensors check karke use repair kar dega.' },
  { q: 'AO Smith Z9 model ki servicing ka kitna charge hota hai?', a: 'Z8 aur Z9 thode premium models hain jinme ART (Advance Recovery Technology) aur hot water hota hai. Iski service ₹499 se start hoti hai aur filters ka rate check karke bataya jata hai.' },
  { q: 'Kya aapke paas AO Smith ke original MIN-TECH (Mineraliser) filter milenge?', a: 'Haan ji bilkul. AO Smith ka MIN-TECH filter paani me calcium aur magnesium add karta hai. Hum 100% original mineralizer hi lagate hain taaki paani ka taste natural rahe.' },
  { q: 'Machine se continuously beep ki aawaz aa rahi hai, band kaise hogi?', a: 'Yeh filter change alert hai. Display par red light bhi blink ho rahi hogi. Technician ko bula kar filter (SCMT ya RO membrane) change karwana padega tabhi aawaz band hogi.' },
  { q: 'Paani ka flow pehle se bahut kam ho gaya hai, tank nahi bhar raha?', a: 'Iska sabse common reason hai pre-filter block hona ya pump ka pressure kam ho jana. Pune ke hard water me filter jaldi block hote hain, hum use clean ya replace kar denge.' },
  { q: 'Kya AO Smith ki Green RO series ko repair kar sakte ho aap?', a: 'Yes! Green RO series (jo paani save karti hai) ki hume puri knowledge hai. Uske advanced ART elements aur reject water valves hum theek kar sakte hain.' },
  { q: 'Kya Pimpri-Chinchwad me same-day AO Smith service mil jayegi?', a: 'Haan, humara ek service center Pimpri-Chinchwad area ko cover karta hai. Pimple Saudagar, Wakad aur Nigdi me same-day service guarantee hai.' },
  { q: 'Purane filter nikaal ke naye dalwane me kitna time lagta hai?', a: 'Service me mushkil se 30-40 minute lagte hain. Technician aapke samne seal khol kar naye filters lagayega aur machine ko andar bahar se clean karega.' },
  { q: 'TDS bahut low (under 20) ho gaya hai, health ke liye theek nahi hai na?', a: 'Sahi baat hai, bahut low TDS theek nahi hota. AO Smith me hum MIN-TECH filter ya TDS controller adjust karke TDS ko healthy level (50-150) par set kar denge.' },
  { q: 'AO Smith AMC plan me hot water tank ki warranty milti hai?', a: 'Comprehensive AMC me sabhi electrical aur heating parts cover hote hain. Agar heater kharab ho jaye toh free me replace hota hai.' },
  { q: 'Machine ke andar se jalne ki (burning) smell aa rahi hai?', a: 'Iska matlab current fluctuation se adapter (SMPS) jal gaya hai ya wiring short hui hai. Turant power off karein aur hume call karein, hum half-hour me fix kar denge.' }
];

export default function Page() {
  return (
    <main>
      <PageHero
        tag='AO Smith RO Service'
        title='AO Smith RO Service in Pune'
        subtitle='AO Smith RO water purifier repair, under-sink installation, filter replacement and AMC in Pune. Call 07030370076.'
        image='/images/hero-ao-smith.jpg'
        imageAlt='AO Smith RO service Pune'
        breadcrumbLabel='AO Smith RO Service in Pune'
      />

      <section className="section" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Our Services</div>
            <h2 id="services-heading" className="section-title">AO Smith RO Service in Pune — Services We Offer</h2>
          </div>
          <div className="services-grid">
            <article className="service-card reveal reveal-delay-1"><div className="service-card-icon"><Wrench size={20} /></div><h3>AO Smith RO Repair</h3><p>Expert diagnosis and repair for all AO Smith RO purifier faults — low flow, bad taste, leakage, motor issues.</p><Link href="/contact" className="service-card-link">Book Repair →</Link></article>
            <article className="service-card reveal reveal-delay-2"><div className="service-card-icon"><Settings size={20} /></div><h3>AO Smith RO Installation</h3><p>Professional installation of AO Smith wall-mounted, under-sink and countertop RO systems.</p><Link href="/contact" className="service-card-link">Book Installation →</Link></article>
            <article className="service-card reveal reveal-delay-3"><div className="service-card-icon"><RefreshCw size={20} /></div><h3>Filter & Membrane Change</h3><p>Timely replacement of AO Smith pre-filters, carbon filters and RO membranes.</p><Link href="/contact" className="service-card-link">Book Service →</Link></article>
            <article className="service-card reveal reveal-delay-4"><div className="service-card-icon"><ClipboardList size={20} /></div><h3>AMC — Annual Maintenance</h3><p>Worry-free AO Smith RO AMC plans covering regular servicing and filter replacement.</p><Link href="/contact" className="service-card-link">Get AMC Quote →</Link></article>
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
