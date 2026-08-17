import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

// Server Component — no 'use client'
export default function PageHero({ tag, title, subtitle, image, imageAlt, breadcrumb, breadcrumbLabel, children }) {
  return (
    <section
      className="page-hero has-image"
      aria-label={title}
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="container">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>›</span>
          {breadcrumb && <><Link href={breadcrumb.href}>{breadcrumb.label}</Link><span>›</span></>}
          <span className="current">{breadcrumbLabel || title}</span>
        </nav>
        <div className="page-hero-grid">
          <div>
            <div className="section-tag" style={{ marginBottom: '16px' }}>{tag}</div>
            <h1 style={{ color: 'white', marginBottom: '16px' }}>{title}</h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', maxWidth: '520px', marginBottom: '32px' }}>
              {subtitle}
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="tel:07030370076" className="btn btn-call btn-lg">
                <Phone size={14} /> 07030370076
              </a>
              <a href="https://wa.me/917030370076" className="btn btn-whatsapp btn-lg" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <WhatsAppIcon size={18} /> WhatsApp
              </a>
            </div>
            {children && (
              <div style={{ marginTop: '24px' }}>
                {children}
              </div>
            )}
          </div>
          <div className="hero-img-card">
            <Image src={image} alt={imageAlt} fill style={{ objectFit: 'cover' }} priority />
          </div>
        </div>
      </div>
    </section>
  );
}
