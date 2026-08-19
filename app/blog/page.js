import Image from 'next/image';
import PageHero from '@/components/PageHero';
import FaqSection from '@/components/FaqSection';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from './blogData';

export const metadata = {
  title: 'Blog | RO Water Purifier Tips & Guides Pune | AquaguardService',
  description: 'Expert RO water purifier tips, maintenance guides, and buying advice for Pune residents. Learn when to service your RO, RO vs UV vs UF, and more.',
};

const faqs = [
  { q: 'Pune ke water me kitna TDS safe hota hai peene ke liye?', a: 'WHO ke hisaab se peene ke paani ka TDS 50 se 150 mg/L ke bich me best hota hai. Pune me PMC water ka TDS theek hota hai, par borewell water ka TDS 500+ ja sakta hai jisme RO zaroori hai.' },
  { q: 'Kya RO machine sach me paani ke saare minerals nikal deti hai?', a: 'Haan, purane RO models 90% minerals nikal dete the. Par aaj kal ke models me Mineraliser (Alkaline filter) ya TDS controller laga hota hai, jo calcium aur magnesium wapas add kar deta hai.' },
  { q: 'RO machine me UV aur UF ka kya kaam hota hai?', a: 'RO dissolved impurities (jaise namak) nikalta hai, UV (Ultraviolet) lamp paani ke bacteria aur viruses ko marta hai, aur UF (Ultra-filtration) un mare hue germs ko paani se alag karta hai. Teeno milke paani ko 100% safe banate hain.' },
  { q: 'Sardiyon me RO ka paani thanda lagta hai, kya isme heater lag sakta hai?', a: 'Normal RO me alag se heater nahi lagta. Agar aapko direct hot water chahiye toh AO Smith Z8/Z9 ya Aquaguard ke hot water models purchase karne chahiye.' },
  { q: 'Bina light (electricity) ke RO kaam karega kya?', a: 'Nahi bhaiya, RO aur UV ko chalne ke liye electricity zaroori hoti hai kyunki pump pressure se paani push karta hai. Haan, gravity-based UF filter bina light ke chal jate hain.' },
  { q: 'RO water ka pH level kitna hona chahiye?', a: 'Ideal pH level 7.0 se 8.5 ke bich hona chahiye (slightly alkaline). Agar aapka paani acidic (kadwa) lag raha hai, toh Alkaline filter lagwana sabse best solution hai.' },
  { q: 'Alkaline water peene ke kya faide hote hain?', a: 'Alkaline water immunity badhata hai, acidity aur gas ki problem kam karta hai, aur body ko better hydrate karta hai. Hum kisi bhi normal RO ko 2000 rupaye me Alkaline RO me upgrade kar sakte hain.' },
  { q: 'Mujhe apna RO kitne mahine me service karwana chahiye?', a: 'Pune aur PCMC area (jaise Wakad, Hinjewadi) jahan borewell ka paani aata hai, wahan har 4-6 mahine me pre-filter badalna zaroori hai. Full service saal me ek baar honi chahiye.' },
  { q: 'Kya RO waste water ko use kiya ja sakta hai?', a: 'Bilkul! RO se nikalne wala reject water plants (paudho) me daalne ke liye ya farsh dhone ke liye use kiya ja sakta hai. Isse paani ki kafi bachat hoti hai.' },
  { q: 'RO filter change karte waqt kya precautions lene chahiye?', a: 'Hamesha dhyan rakhein ki nayi membrane ki seal aapke samne khule, aur filter change ke baad 1-2 tanki paani drain (faink) zaroor dein taaki carbon dust nikal jaye.' },
  { q: 'Mera RO filter 2 saal se theek chal raha hai, kya ab badalna zaroori hai?', a: 'Haan, filter bahar se theek lag sakta hai par andar se uske pores block ho jate hain aur wo bacteria trap karna band kar deta hai. 2 saal me membrane change karna bahut zaroori hai.' }
];

export default function BlogPage() {
  return (
    <main>
      <PageHero
        tag="Our Blog"
        title="Expert Water Purification Tips & Guides"
        subtitle="Your trusted source for insights on RO maintenance, water quality in Pune, and choosing the right purifier for your home. Stay informed and keep your family healthy."
        image="/images/hero-blog.jpg"
        imageAlt="Water purifier blog AquaguardService"
        breadcrumbLabel="Blog"
      />

      <section className="section" aria-labelledby="blog-articles">
        <div className="container">
          
          <div className="section-header text-center reveal">
            <div className="section-tag">Latest Articles</div>
            <h2 className="section-title">Knowledge Base</h2>
            <p className="section-subtitle mx-auto" style={{ maxWidth: '600px' }}>
              Explore our collection of 30 expert guides on everything from choosing the right RO system to daily maintenance tips.
            </p>
          </div>

          <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px', marginTop: '48px' }}>
            {blogPosts.map((post, index) => (
              <article key={post.id} className={`blog-card reveal reveal-delay-${(index % 4) + 1}`} style={{ 
                background: 'var(--bg-card)', 
                borderRadius: 'var(--radius-lg)', 
                border: '1px solid var(--border-color)', 
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}>
                <div style={{ position: 'relative', width: '100%', height: '220px' }}>
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div style={{ position: 'absolute', top: '16px', left: '16px', background: 'var(--white)', padding: '4px 12px', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: '700', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                    {post.category}
                  </div>
                </div>
                
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    <span>{post.date}</span>
                    <span style={{ display: 'inline-block', width: '4px', height: '4px', borderRadius: '50%', background: 'var(--text-light)' }}></span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={14} /> {post.readTime}
                    </span>
                  </div>
                  
                  <h3 style={{ fontSize: '1.25rem', margin: '0 0 12px', color: 'var(--text-dark)', lineHeight: '1.4' }}>
                    {post.title}
                  </h3>
                  
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: '1.6', flex: 1 }}>
                    {post.excerpt}
                  </p>
                  
                  <Link href={`/blog/${post.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: '600', textDecoration: 'none', fontSize: '0.95rem', marginTop: 'auto' }}>
                    Read Article <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      <FaqSection faqs={faqs} />
      <ContactForm />
    </main>
  );
}
