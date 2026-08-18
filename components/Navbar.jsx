'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu, X, Phone, Droplet, ChevronDown, Disc3, Hexagon, Gem, Tags,
  Mail, MapPin, Facebook, Instagram, Linkedin, ClipboardList, Sparkles, ArrowRight
} from 'lucide-react';
import WhatsAppIcon from '@/components/WhatsAppIcon';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const isActive = (href) => href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      {/* TOP INFO BAR */}
      <div className="top-bar" aria-label="Contact info">
        <div className="container">
          <div className="top-bar-inner">
            <div className="top-bar-left">
              <a href="tel:07030370076" className="top-bar-link">
                <Phone size={13} /> <span>07030370076</span>
              </a>
              <a href="mailto:info@aquaguardservice.in" className="top-bar-link">
                <Mail size={13} /> <span>info@aquaguardservice.in</span>
              </a>
            </div>
            <div className="top-bar-right">
              <span className="top-bar-link">
                <MapPin size={13} /> <span>Wakad, Pimpri-Chinchwad, Pune</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
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
          <div className="navbar-cta">
            <a href="https://wa.me/917030370076" className="btn-navbar-cta" target="_blank" rel="noopener">
              <WhatsAppIcon size={16} style={{ color: '#25D366' }} />
              <span>Book Service</span>
            </a>
          </div>
          <button
            className={`mobile-menu-btn ${open ? 'open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            <span className="ham-line"></span>
            <span className="ham-line"></span>
            <span className="ham-line"></span>
          </button>
        </div>

        {/* PREMIUM MOBILE MENU */}
        {open && (
          <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
            <div className="mobile-menu-overlay" onClick={() => setOpen(false)} />
            <div className="mobile-menu-panel">
              
              {/* DARK HEADER */}
              <div className="mobile-menu-header">
                <div className="mobile-menu-header-inner">
                  <Link href="/" className="logo logo--dark" onClick={() => setOpen(false)}>
                    <div className="logo-icon"><Droplet size={18} /></div>
                    <div className="logo-text">Aquaguard<span>Service</span></div>
                  </Link>
                  <button className="mobile-menu-close" onClick={() => setOpen(false)} aria-label="Close menu">
                    <Sparkles size={16} /> MENU
                  </button>
                </div>
                <p className="mobile-menu-subtitle">
                  Aquaguard · Kent · Pureit · AO Smith · Livpure
                </p>
              </div>

              {/* EXPLORE SECTION */}
              <div className="mobile-menu-body">
                <div className="mobile-section">
                  <h3 className="mobile-section-title">EXPLORE</h3>
                  <div className="explore-cards">
                    <Link href="/all-brands" className="explore-card" onClick={() => setOpen(false)}>
                      <div className="explore-icon"><Tags size={20} /></div>
                      <div className="explore-text">
                        <h4>Brands</h4>
                        <p>Trusted names we service</p>
                      </div>
                      <ArrowRight size={16} className="explore-arrow" />
                    </Link>
                    <Link href="/services" className="explore-card" onClick={() => setOpen(false)}>
                      <div className="explore-icon"><ClipboardList size={20} /></div>
                      <div className="explore-text">
                        <h4>Services</h4>
                        <p>Repair, installation & AMC plans</p>
                      </div>
                      <ArrowRight size={16} className="explore-arrow" />
                    </Link>
                    <Link href="/locations" className="explore-card" onClick={() => setOpen(false)}>
                      <div className="explore-icon"><MapPin size={20} /></div>
                      <div className="explore-text">
                        <h4>Locations</h4>
                        <p>Find service areas near you</p>
                      </div>
                      <ArrowRight size={16} className="explore-arrow" />
                    </Link>
                  </div>
                </div>

                {/* QUICK LINKS SECTION */}
                <div className="mobile-section">
                  <div className="mobile-section-header">
                    <div className="mobile-section-title-wrap">
                      <h3 className="mobile-section-title">QUICK LINKS</h3>
                      <p>Tap to explore more</p>
                    </div>
                    <Link href="/contact" className="mobile-section-link" onClick={() => setOpen(false)}>View all</Link>
                  </div>
                  <div className="quick-links-grid">
                    <Link href="/" className="quick-link-card" onClick={() => setOpen(false)}>
                      <h4>Home</h4>
                      <p>Back to main page</p>
                    </Link>
                    <Link href="/contact" className="quick-link-card" onClick={() => setOpen(false)}>
                      <h4>Contact Us</h4>
                      <p>Get a quote or book</p>
                    </Link>
                    <Link href="/blog" className="quick-link-card" onClick={() => setOpen(false)}>
                      <h4>Blog</h4>
                      <p>RO maintenance tips</p>
                    </Link>
                    <Link href="#" className="quick-link-card" onClick={() => setOpen(false)}>
                      <h4>FAQs</h4>
                      <p>Quick answers</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* NEW PREMIUM BOTTOM NAV */}
      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        <div className="bottom-nav-inner">
          <Link href="/contact" className="btn-bottom-quote">
            Book Now <ArrowRight size={14} style={{ marginLeft: '4px' }} />
          </Link>
          <a href="https://wa.me/917030370076" className="btn-bottom-wa" target="_blank" rel="noopener" aria-label="WhatsApp Us">
            <WhatsAppIcon size={24} />
          </a>
          <a href="tel:07030370076" className="btn-bottom-call">
            <Phone size={14} style={{ marginRight: '6px' }} /> Call
          </a>
        </div>
        <div className="bottom-nav-timing">
          Mon–Sun: 8:00 AM – 11:30 PM
        </div>
      </nav>
    </>
  );
}
