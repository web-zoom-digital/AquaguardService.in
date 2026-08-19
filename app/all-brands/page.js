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
  { q: 'Mera RO local assembled (unbranded) hai, kya aap uski repairing karte ho?', a: 'Haan ji bilkul! Hum saare assembled aur local unbranded RO systems ki full service aur repairing karte hain. Unke filters aur parts easily humare paas available hote hain.' },
  { q: 'LG aur Havells ke RO me normal filter lag jata hai kya?', a: 'Nahi, LG aur Havells ke models me specific twist-and-fit wale filters lagte hain. Hum dono brands ke genuine filters use karte hain taki machine me koi fitting issue na aaye.' },
  { q: 'Society ke liye 50 LPH ka commercial RO plant repair ho jayega?', a: 'Haan, hum 25 LPH, 50 LPH aur 100 LPH tak ke commercial RO plants ki servicing karte hain. Gyms, schools aur housing societies Pune me humare regular AMC clients hain.' },
  { q: 'Kya aap Blue Star aur Faber RO ki service provide karte ho?', a: 'Yes! Blue Star, Faber, Sharp, Zero B - in sabhi premium brands ke spare parts aur filters humare paas available hain.' },
  { q: 'Bhaiya, RO ki tanki full nahi ho rahi, aadha hi bhar raha hai?', a: 'Yeh problem ya toh RO membrane block hone se aati hai, ya phir booster pump ka pressure drop hone se. Hum pressure gauge se check karke aapko sahi fault bata denge.' },
  { q: 'Multiple brands hone ki wajah se kya aapke parts original hote hain?', a: 'Hum jis brand ka RO hota hai, koshish karte hain ki usi brand ka original part (filter/membrane) lagayein. Agar nahi milta toh high-grade universal fit lagate hain jo company certified hota hai.' },
  { q: 'Kya main apne kisi bhi brand ke RO ke liye aapse AMC le sakta hu?', a: 'Haan, hum "Any Brand RO AMC" offer karte hain. Chahe aapka RO kisi bhi company ka ho, humari AMC me aapko filter change aur free maintenance milega.' },
  { q: 'RO machine bohot zyada paani waste (reject) kar rahi hai, ise kaise rokein?', a: 'Thoda reject water nikalna RO process ke liye zaroori hai. Par agar bahut zyada paani bah raha hai bina tank bhare, toh sayad membrane choke hai. Usay change karna padega.' },
  { q: 'Aquafresh aur Lexpure brand ke pump jal gaye hain, repair ka cost kya hoga?', a: 'In brands ke naye pump ka cost lagbhag Rs. 1200 se Rs. 1800 ke bich aata hai (model aur GPD ke hisaab se). Repairing cost aur bhi kam padti hai.' },
  { q: 'Kothrud me Havells RO service ke liye kab tak aaoge?', a: 'Aap call karke book kar lijiye, Kothrud aur Bavdhan area me humari team maximum 2 ghante me pahunch jati hai same day service ke liye.' },
  { q: 'Machine se khat-khat (clicking) ki aawaz aa rahi hai?', a: 'Yeh aawaz solenoid valve (SV) se aati hai jab wo theek se operate nahi kar paata. SV ko replace karne se problem wahi khatam ho jayegi.' }
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
