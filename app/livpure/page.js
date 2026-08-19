import PageHero from '@/components/PageHero';
import FaqSection from '@/components/FaqSection';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import Image from 'next/image';
import { Gem, Phone, MessageCircle, Wrench, Settings, RefreshCw, ClipboardList, Zap, Lock, User, Coins, Clock } from 'lucide-react';

export const metadata = {
  title: 'Livpure RO Service Pune | Livpure Service Center | AquaguardService',
  description: 'Livpure RO service, repair & installation in Pune. Livpure service center near me. Call 07030370076 for Livpure water purifier service in Pune.',
};

const faqs = [
  { q: 'Livpure RO ka red filter indicator light jal raha hai, kya filter change karna padega?', a: 'Haan ji, Livpure ke smart models me yeh light properly filter life track karke hi aati hai. Ise ignore na karein warna membrane damage ho sakti hai. Hum aa ke original filter set daal denge.' },
  { q: 'Livpure Zinger ya Touch model ka display kaam nahi kar raha, kya hoga?', a: 'Touch panel ya display off hone ka matlab PCB (circuit board) ya wiring me moisture chala gaya hai. Isme pura display change nahi karna padta, normally hum board repair kar lete hain.' },
  { q: 'Livpure ki HR70 technology ka filter market me asani se mil jata hai kya?', a: 'HR70 wale filters (jo water waste kam karte hain) thode special hote hain aur market me easily original nahi milte. Par humare paas 100% genuine HR70 cartridges ka stock any-time ready rehta hai.' },
  { q: 'Kya aap Livpure ki water purifier AMC provide karte ho Pune me?', a: 'Bilkul! Hum Livpure ke sabhi models ka full AMC cover dete hain. Isme 2-3 general service aur saal bhar me lagne wale filters free hote hain. Visiting charge bhi zero rehta hai.' },
  { q: 'Machine se continuously vibrating aawaz kyu aa rahi hai?', a: 'Vibration aawaz zyada aane ka matlab hai ki aapke RO ka booster pump loose ho gaya hai ya uske head ke andar kachra fasa hai. Technician adhe ghante me aake ise theek kar dega.' },
  { q: 'Agar main naya ghar le raha hu toh Livpure RO ki shifting ka process kya hai?', a: 'Aap bas ek din pehle bata de. Humara banda aake RO safely uninstall karega, usko pack karke naye ghar me deewar pe naye connection ke sath fit kar dega.' },
  { q: 'Livpure Envy model me TDS controller hota hai kya?', a: 'Haan, Envy aur uske advanced models me TDS adjuster laga hota hai. Agar paani kadwa lag raha hai, toh hum aake use 70-150 range ke aas-paas properly set kar sakte hain.' },
  { q: 'क्या आपके technician trained hain Livpure ke smart ROs theek karne me?', a: '100%! Humare ladke har saal naye smart models (jaise Bluetooth/WiFi connected) ki training lete hain. Koi bhi digital error aayega toh hum solve kar denge.' },
  { q: 'Pre-filter badalne me kitna time aur paisa lagta hai?', a: 'Pre-filter (bahar wali safed botal) change karna sirf 10 minute ka kaam hai. Aur iska kharcha bahut hi kam (Rs. 250-350 ke aas paas) hota hai. Ise har 3 mahine me badalna accha hota hai.' },
  { q: 'Baner-Balewadi area me Livpure technician kitni der me pahuchega?', a: 'Baner aur Balewadi area me humari daily 2 teams rehti hain. Call aane ke sirf 1 se 2 ghante ke andar aapke door-step pe service ho jayegi.' },
  { q: 'Paani bahut dheere dheere aa raha hai tap se, filter chocked toh nahi?', a: 'Agar paani boond-boond karke aa raha hai toh zarur sediment filter ya RO membrane block ho gayi hai borewell ki mitti se. Hum check karke batayenge kaunsa badalna hai.' }
];

export default function Page() {
  return (
    <main>
      <PageHero
        tag='Livpure RO Service'
        title='Livpure RO Service in Pune'
        subtitle='Livpure RO water purifier repair, installation, filter change & AMC in Pune & Pimpri-Chinchwad. Call 07030370076.'
        image='/images/hero-livpure.jpg'
        imageAlt='Livpure RO installation Pune'
        breadcrumbLabel='Livpure RO Service in Pune'
      />

      <section className="section" aria-labelledby="services-heading">
        <div className="container">
          <div className="section-header reveal">
            <div className="section-tag">Our Services</div>
            <h2 id="services-heading" className="section-title">Livpure RO Service in Pune — Services We Offer</h2>
          </div>
          <div className="services-grid">
            <article className="service-card reveal reveal-delay-1"><div className="service-card-icon"><Wrench size={20} /></div><h3>Livpure RO Repair</h3><p>Expert diagnosis and repair for all Livpure RO purifier faults — low flow, bad taste, leakage, motor issues.</p><Link href="/contact" className="service-card-link">Book Repair →</Link></article>
            <article className="service-card reveal reveal-delay-2"><div className="service-card-icon"><Settings size={20} /></div><h3>Livpure RO Installation</h3><p>Professional installation of Livpure wall-mounted, under-sink and countertop RO systems.</p><Link href="/contact" className="service-card-link">Book Installation →</Link></article>
            <article className="service-card reveal reveal-delay-3"><div className="service-card-icon"><RefreshCw size={20} /></div><h3>Filter & Membrane Change</h3><p>Timely replacement of Livpure pre-filters, carbon filters and RO membranes.</p><Link href="/contact" className="service-card-link">Book Service →</Link></article>
            <article className="service-card reveal reveal-delay-4"><div className="service-card-icon"><ClipboardList size={20} /></div><h3>AMC — Annual Maintenance</h3><p>Worry-free Livpure RO AMC plans covering regular servicing and filter replacement.</p><Link href="/contact" className="service-card-link">Get AMC Quote →</Link></article>
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
