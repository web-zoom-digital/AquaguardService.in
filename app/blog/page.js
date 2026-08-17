import Image from 'next/image';
import PageHero from '@/components/PageHero';
import FaqSection from '@/components/FaqSection';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import { FileText, BookOpen, Phone } from 'lucide-react';

export const metadata = {
  title: 'Blog | RO Water Purifier Tips & Guides Pune | AquaguardService',
  description: 'Expert RO water purifier tips, maintenance guides, and buying advice for Pune residents. Learn when to service your RO, RO vs UV vs UF, and more.',
};

const faqs = [
  { q: 'How do I know when my RO filter needs changing?', a: 'Key signs include: change in water taste or odour, slow water flow, unusual machine noises, water leakage, or the filter alarm light blinking. Replace filters every 6–12 months depending on your usage and water quality.' },
  { q: 'What is the difference between RO, UV and UF purifiers?', a: 'RO (Reverse Osmosis) removes dissolved salts, heavy metals, and bacteria — best for hard water. UV kills bacteria and viruses but doesn\'t remove dissolved salts. UF removes bacteria and larger particles without electricity. Most modern purifiers combine two or more technologies.' },
  { q: 'Is Pune tap water safe without a purifier?', a: 'Pune\'s municipal water meets basic safety standards, but areas like Wakad, Hinjewadi, and some parts of Pimpri-Chinchwad receive water with higher TDS (Total Dissolved Solids) and hardness. A good RO purifier is strongly recommended for safe drinking water.' },
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

          {/* Article 1 */}
          <article id="blog-articles" className="reveal" style={{ background:'var(--bg-card)', borderRadius:'20px', border:'1px solid var(--border-color)', marginBottom:'40px', boxShadow:'var(--shadow-md)', overflow:'hidden' }}>
            <Image src="/images/blog-article1.jpg" alt="Clogged RO filter vs new filter comparison" width={1200} height={400} style={{ width:'100%', height:'280px', objectFit:'cover' }} />
            <div style={{ padding:'40px' }}>
              <div className="section-tag">Maintenance</div>
              <h2 style={{ fontSize:'1.8rem', margin:'16px 0 24px', color:'var(--text-main)' }}>Top 5 Signs Your RO Purifier Needs Servicing Immediately</h2>
              <p style={{ fontSize:'1rem', color:'var(--text-muted)', marginBottom:'16px', lineHeight:'1.7' }}>
                We often take our water purifiers for granted — filling up our bottles and assuming everything is fine. But behind the scenes, the filters and membranes are working hard to trap dirt, heavy metals, and harmful pathogens. Over time, these filters get clogged. Ignoring the warning signs doesn't just damage the machine; it puts your family's health at risk. Here are the top five signs you shouldn't ignore:
              </p>
              <ul style={{ fontSize:'1rem', color:'var(--text-muted)', marginBottom:'16px', lineHeight:'1.7', paddingLeft:'20px', listStyleType:'disc' }}>
                <li style={{ marginBottom:'8px' }}><strong>1. Change in Water Taste or Odour:</strong> If your water suddenly tastes metallic, salty, or flat, it's a huge red flag. This usually means the carbon filter is exhausted and can no longer absorb chlorine and organic impurities, or the RO membrane has failed.</li>
                <li style={{ marginBottom:'8px' }}><strong>2. Drastic Drop in Water Flow:</strong> Is it taking forever to fill a single glass of water? When the pre-filters (sediment filters) become heavily choked with mud and sand, the water struggles to pass through, reducing the flow rate.</li>
                <li style={{ marginBottom:'8px' }}><strong>3. The Machine is Making Unusual Noises:</strong> A gentle hum is normal, but loud vibrations or rattling sounds often indicate that the booster pump is struggling. This happens when filters are blocked, forcing the pump to work overtime.</li>
                <li style={{ marginBottom:'8px' }}><strong>4. Water Leaking from the Unit:</strong> Puddles around your purifier can be caused by cracked O-rings, loose pipe connections, or a malfunctioning valve. Don't wait for a small drip to turn into a flooded kitchen.</li>
                <li style={{ marginBottom:'8px' }}><strong>5. Blinking Filter Replacement Alarms:</strong> Modern machines from brands like Pureit, Aquaguard, and Kent come with smart indicators. If that red light is blinking or beeping, the germ-kill kit or filters have reached their maximum capacity.</li>
              </ul>
              <p style={{ fontSize:'1rem', color:'var(--text-muted)', lineHeight:'1.7' }}>
                <strong>Pro Tip for Pune Residents:</strong> The hard water in many parts of Pune (like Wakad, Hinjewadi, and Kharadi) means your filters might choke faster than the manufacturer's standard 1-year estimate. A 6-month check-up is highly recommended to stay on the safe side.
              </p>
            </div>
          </article>

          {/* Article 2 */}
          <article className="reveal" style={{ background:'var(--bg-card)', borderRadius:'20px', border:'1px solid var(--border-color)', marginBottom:'40px', boxShadow:'var(--shadow-md)', overflow:'hidden' }}>
            <Image src="/images/blog-article2.jpg" alt="RO membrane, UV lamp, and UF filter side by side" width={1200} height={400} style={{ width:'100%', height:'280px', objectFit:'cover' }} />
            <div style={{ padding:'40px' }}>
              <div className="section-tag">Buyer's Guide</div>
              <h2 style={{ fontSize:'1.8rem', margin:'16px 0 24px', color:'var(--text-main)' }}>RO vs UV vs UF: What's the Difference and Which Do You Need?</h2>
              <p style={{ fontSize:'1rem', color:'var(--text-muted)', marginBottom:'16px', lineHeight:'1.7' }}>
                Walk into any electronics store, and the salesman will throw an alphabet soup at you — RO, UV, UF, TDS, MTDS. It can get overwhelming. Let's break down exactly what these terms mean in plain, human language, so you can make an informed decision for your home.
              </p>
              <p style={{ fontSize:'1rem', color:'var(--text-muted)', marginBottom:'16px', lineHeight:'1.7' }}>
                <strong>RO (Reverse Osmosis): The Heavy Lifter</strong><br />
                Think of RO as the ultimate bouncer. It uses a semi-permeable membrane with microscopic pores that only let pure water molecules pass through. It aggressively removes heavy metals (like lead and arsenic), dissolved salts, and hard water minerals. If your water tastes salty or comes from a borewell with a high TDS level above 500, you absolutely need an RO system.
              </p>
              <p style={{ fontSize:'1rem', color:'var(--text-muted)', marginBottom:'16px', lineHeight:'1.7' }}>
                <strong>UV (Ultraviolet): The Germ Killer</strong><br />
                UV purifiers use ultraviolet light to kill bacteria, viruses, and protozoa. They're excellent at making water microbiologically safe. However, UV does NOT remove dissolved salts, heavy metals, or chemical impurities. If your TDS is already low (below 200), a UV purifier might be sufficient.
              </p>
              <p style={{ fontSize:'1rem', color:'var(--text-muted)', marginBottom:'16px', lineHeight:'1.7' }}>
                <strong>UF (Ultrafiltration): The Gentle Filter</strong><br />
                UF uses hollow fibre membranes to remove bacteria, cysts, and larger particles — without needing electricity. It cannot remove dissolved salts or viruses. UF is often used as a pre-filter stage in combination with RO or UV systems.
              </p>
              <p style={{ fontSize:'1rem', color:'var(--text-muted)', lineHeight:'1.7' }}>
                <strong>Which One is Right for You in Pune?</strong><br />
                For most areas of Pune — especially those with borewell water, hard water zones (Wakad, Hinjewadi, Kharadi), or areas where TDS exceeds 300 ppm — an <strong>RO+UV+UF</strong> combination purifier is the safest and most effective choice. If you're on a budget and have municipal water with low TDS, a UV+UF purifier can work. When in doubt, call us on <strong>07030370076</strong> and we'll help you choose the right system for your water quality.
              </p>
            </div>
          </article>

        </div>
      </section>

      <FaqSection faqs={faqs} />
      <ContactForm />
    </main>
  );
}
