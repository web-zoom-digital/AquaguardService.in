import Image from 'next/image';
import Link from 'next/link';
import { Phone, CheckCircle } from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

// Server Component — no 'use client'
export default function PageHero({ tag, title, subtitle, image, imageAlt, breadcrumb, breadcrumbLabel, children }) {
  return (
    <section className="hero" aria-label={title}>
      <div className="hero-grid-pattern" aria-hidden="true"></div>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <nav className="breadcrumb" aria-label="Breadcrumb" style={{ marginBottom: '24px' }}>
              <Link href="/">Home</Link>
              <span>›</span>
              {breadcrumb && <><Link href={breadcrumb.href}>{breadcrumb.label}</Link><span>›</span></>}
              <span className="current">{breadcrumbLabel || title}</span>
            </nav>
            
            <div className="hero-badge">
              <span className="hero-badge-dot" aria-hidden="true"></span>
              {tag}
            </div>
            
            <h1 className="hero-title">{title}</h1>
            <p className="hero-subtitle">{subtitle}</p>
            
            <div className="hero-actions">
              <a href="tel:07030370076" className="btn btn-call btn-lg">
                <Phone size={14} /> Call: 07030370076
              </a>
              <a href="https://wa.me/917030370076" className="btn btn-whatsapp btn-lg" target="_blank" rel="noopener" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <WhatsAppIcon size={18} /> WhatsApp
              </a>
            </div>
            
            {children && <div className="page-hero-children">{children}</div>}
          </div>
          
          <div className="hero-image-wrap" aria-hidden="true">
            <div className="hero-image-card">
              <Image src={image} alt={imageAlt} width={600} height={520} priority />
            </div>
            <div className="hero-float-card card-1">
              <div className="float-icon green"><CheckCircle size={14} style={{ color: 'var(--success)' }} /></div>
              <div><div className="float-title">Same Day Service</div><div className="float-sub">Book & get serviced today</div></div>
            </div>
            <div className="hero-float-card card-2">
              <div className="float-icon blue">⭐</div>
              <div><div className="float-title">4.8/5 Rating</div><div className="float-sub">500+ happy customers</div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-shape-divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,60 C300,120 900,0 1200,60 V120 H0 V60 Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
}
