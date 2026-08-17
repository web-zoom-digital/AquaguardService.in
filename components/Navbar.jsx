'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Droplet, Disc3, Hexagon, Gem, Tags,
  ChevronDown, Phone, Home, FileText, Mail, MapPin, Wrench, MessageCircle
} from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  const isActive = (href) => href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar" aria-label="Main navigation">
        <div className="navbar-inner">
          <Link href="/" className="logo" aria-label="AquaguardService Home">
            <div className="logo-icon"><Droplet size={20} /></div>
            <div className="logo-text">Aquaguard<span>Service</span></div>
          </Link>
          <ul className="nav-links" role="list">
            <li><Link href="/" className={isActive('/') ? 'active' : ''}>Home</Link></li>
            <li className="nav-dropdown">
              <Link href="/all-brands">Brands <ChevronDown size={14} /></Link>
              <ul className="dropdown-menu" role="list">
                <li><Link href="/aquaguard"><Droplet size={16} /> Aquaguard RO</Link></li>
                <li><Link href="/kent-ro"><Disc3 size={16} /> Kent RO</Link></li>
                <li><Link href="/pureit"><Disc3 size={16} /> Pureit RO</Link></li>
                <li><Link href="/ao-smith"><Hexagon size={16} /> AO Smith RO</Link></li>
                <li><Link href="/livpure"><Gem size={16} /> Livpure RO</Link></li>
                <li><Link href="/all-brands"><Tags size={16} /> All Brands</Link></li>
              </ul>
            </li>
            <li><Link href="/services" className={isActive('/services') ? 'active' : ''}>Services</Link></li>
            <li><Link href="/locations" className={isActive('/locations') ? 'active' : ''}>Locations</Link></li>
            <li><Link href="/blog" className={isActive('/blog') ? 'active' : ''}>Blog</Link></li>
            <li><Link href="/contact" className={isActive('/contact') ? 'active' : ''}>Contact</Link></li>
          </ul>
          <div className="nav-cta">
            <a href="tel:07030370076" className="nav-phone"><Phone size={14} /> 07030370076</a>
            <a href="tel:07030370076" className="btn btn-primary btn-sm">Book Service</a>
          </div>
          <button className={`hamburger${menuOpen ? ' open' : ''}`} aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(o => !o)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true">
        <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}></div>
        <div className="mobile-menu-panel">
          <nav className="mobile-menu-links" role="list">
            <Link href="/" onClick={() => setMenuOpen(false)}><Home size={20} /> Home</Link>
            <div className="mobile-menu-divider"></div>
            <Link href="/aquaguard" onClick={() => setMenuOpen(false)}><Droplet size={18} /> Aquaguard RO Service</Link>
            <Link href="/kent-ro" onClick={() => setMenuOpen(false)}><Disc3 size={18} /> Kent RO Service</Link>
            <Link href="/pureit" onClick={() => setMenuOpen(false)}><Disc3 size={18} /> Pureit RO Service</Link>
            <Link href="/ao-smith" onClick={() => setMenuOpen(false)}><Hexagon size={18} /> AO Smith RO Service</Link>
            <Link href="/livpure" onClick={() => setMenuOpen(false)}><Gem size={18} /> Livpure RO Service</Link>
            <Link href="/all-brands" onClick={() => setMenuOpen(false)}><Tags size={18} /> All Brands</Link>
            <div className="mobile-menu-divider"></div>
            <Link href="/services" onClick={() => setMenuOpen(false)}><Wrench size={18} /> Our Services</Link>
            <Link href="/locations" onClick={() => setMenuOpen(false)}><MapPin size={16} /> Locations</Link>
            <Link href="/blog" onClick={() => setMenuOpen(false)}><FileText size={18} /> Blog</Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}><Mail size={18} /> Contact Us</Link>
          </nav>
          <div className="mobile-menu-cta">
            <a href="tel:07030370076" className="btn btn-primary w-full" style={{justifyContent:'center'}}><Phone size={14} /> Call: 07030370076</a>
            <a href="https://wa.me/917030370076" className="btn btn-whatsapp w-full" style={{justifyContent:'center', display: 'flex', alignItems: 'center', gap: '8px'}} target="_blank" rel="noopener">
              <WhatsAppIcon size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
