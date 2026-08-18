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
  { q: 'How do I know when my RO filter needs changing?', a: "Key signs include: change in water taste or odour, slow water flow, unusual machine noises, water leakage, or the filter alarm light blinking. Replace filters every 6–12 months depending on your usage and water quality." },
  { q: 'What is the difference between RO, UV and UF purifiers?', a: "RO (Reverse Osmosis) removes dissolved salts, heavy metals, and bacteria — best for hard water. UV kills bacteria and viruses but doesn't remove dissolved salts. UF removes bacteria and larger particles without electricity. Most modern purifiers combine two or more technologies." },
  { q: 'Is Pune tap water safe without a purifier?', a: "Pune's municipal water meets basic safety standards, but areas like Wakad, Hinjewadi, and some parts of Pimpri-Chinchwad receive water with higher TDS (Total Dissolved Solids) and hardness. A good RO purifier is strongly recommended for safe drinking water." },
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
