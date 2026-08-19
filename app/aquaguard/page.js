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
  { q: 'Aquaguard RO me red light blink ho rahi hai aur beep sound aa raha hai, kya karun?', a: 'Bhaiya, yeh beep sound indicate karta hai ki aapka UV lamp ya filter expire ho gaya hai. Humara technician aa kar error code check karega aur filter/UV lamp replace karke isko theek kar dega.' },
  { q: 'Mere Aquaguard RO ka filter change karne ka kitna charge aayega?', a: 'Aquaguard ke filters thode premium hote hain. Exact cost model par depend karta hai (jaise Enhance, Magna, ya Geneus). Par hum market se definitely sasta rate denge, genuine parts ke sath.' },
  { q: 'Kya aap Aquaguard ke latest copper aur zinc water models ko repair kar sakte hain?', a: 'Haan ji, humari team trained hai. Active Copper aur Zinc booster cartridges dono humare paas available hote hain aur hum unko successfully install ya replace karte hain.' },
  { q: 'Aquaguard ka AMC plan lene me kya faida hai?', a: 'AMC plan me saal me 2 baar general service aur 1 baar pre-filter change cover hota hai. Agar saal bhar me machine me koi fault aata hai, toh visiting charge free rehta hai.' },
  { q: 'Tank bharne ke baad auto-cut off nahi ho raha, paani overflow ho raha hai?', a: 'Aise me tank ke andar laga float valve ya sensor kharab ho gaya hoga. Yeh bahut chota issue hai, technician aake sensor change kar dega aur paani overflow band ho jayega.' },
  { q: 'Aquaguard ka pump kharab ho gaya hai, kya naya lagana padega?', a: 'Hum pehle pump ko check karte hain. Kai baar sirf pump ka head change karne se kaam chal jata hai jisse aapka kharcha bach jata hai. Agar pura pump jala hua hai, tabhi naya lagayenge.' },
  { q: 'Paani ka taste thoda ajeeb aa raha hai pichle 2 din se?', a: 'Agar taste badal gaya hai, toh iska matlab aapka TDS level balance me nahi hai ya membrane choke ho rahi hai. Hum aake pehle TDS meter se check karenge phir hi solution denge.' },
  { q: 'Mera Aquaguard Eureka Forbes company ka hai, kya aap log same service dete ho?', a: 'Haan bilkul, hum Eureka Forbes ke sabhi Aquaguard models (RO, UV, UF) me specialized hain. Humari service unki tarah hi professional hai bas thodi zyada fast aur affordable hai.' },
  { q: 'Kya Viman Nagar me Aquaguard ki service available hai?', a: 'Haan, Viman Nagar, Kalyani Nagar aur pure Pune me humari teams active rehti hain. Call karne ke 2 ghante me service ho jayegi.' },
  { q: 'Pre-filter (bahar wala filter) kitne din me badalna chahiye?', a: 'Pune ke borewell paani me kachra zyada aata hai, isliye pre-filter ko har 3-4 mahine me change kar lena chahiye. Isse andar ki expensive membrane bachi rehti hai.' },
  { q: 'Mere Aquaguard me bilkul paani nahi aa raha, machine on hai?', a: 'Yeh solenoid valve (SV) ka issue ho sakta hai jo paani ka flow block kar deta hai kharab hone par. Technician ko aake SV aur carbon filter check karna hoga.' }
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
